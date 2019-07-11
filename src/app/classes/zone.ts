import { DrawingSettings } from '../interfaces/drawing-settings';
import { Point } from '../interfaces/point';
import { TransformSettings } from '../interfaces/transform-settings';

import { DrawingSvc } from '../services/drawing.service';

export class Zone {
    drawing : DrawingSvc  = new DrawingSvc();
    word: string;
    category: string;
    
    title : string;
    description: string;
    image: string;
    music: string;
    comment: string;
    
    img : any;
    source : string;
    
    points: Point[]; 
    imgCoords : any;
    drawingSetting: string;
    static: boolean;
    
    offset? : number;
    duration? : number;
    
    startDate : number;
    endDate : number;
    
    
    constructor(slide){
      console.log("constructing zone");
        this.static = true;
        this.word = slide.word;
        this.category = slide.cat;
        
        this.title = slide.fields.title.value;
        this.image="assets/images/"+slide.fields.image.value;
        this.description = slide.fields.description.value;
        this.music = slide.fields.music.value;
       // this.comment = slide.fields.comment.value;
        
        this.points=this.drawing.stringToPath(slide.shape);
        this.imgCoords=this.calcImgCoords(this.points); 
        console.log(this.imgCoords);
        
        let timeSpan = slide.fields.timeSpan.value.split("-");
        
        this.startDate=timeSpan[0];
        this.endDate=timeSpan[1];
        
        if(slide.fields.drawingSetting){
            this.drawingSetting = slide.fields.drawingSetting.value;
        }else{
            this.drawingSetting = slide.cat;
        }
       
             if(slide.fields.image.value){
            this.img=new Image();
                this.img.src="assets/images/"+slide.fields.image.value;
              //console.log("image loaded: " + this.img.src);
           this.source=slide.fields.icon.value;
           
            }
        
      console.log(this);
        
    }
    
   highlight(ctx){
       this.drawing.applySetting(ctx,"highlight");
        this.drawing.drawPolygon(ctx, this.points, "highlight");
    }
    

    
     calcImgCoords(points){
        let xs=points.map((p)=>p.x);
        let ys=points.map((p)=>p.y);
        
        let minX=this.myArrayMin(xs);
        let minY=this.myArrayMin(ys);
        
        let maxX=this.myArrayMax(xs);
        let maxY=this.myArrayMax(ys);
        
      return {topLeft:{x:minX, y:minY}, width:maxX-minX, height:maxY-minY, min:{x:minX, y:minY}, max:{x:maxX, y:maxY}}
    }
    
        myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
  
    myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
    
    
}





export class Icon extends Zone {
    
    position: any;
    img : any;
    source : string;
    animationPath : any;
    
    constructor(slide){
        super(slide);
      
        
           this.position=this.imgCoords.topLeft;
            this.img=new Image();
                this.img.src="assets/images/"+slide.fields.icon.value;
              //console.log("image loaded: " + this.img.src);
           this.source=slide.fields.icon.value;
        
        if(slide.fields.path.value){
            let pathPoints = this.drawing.stringToPath(slide.fields.path.value);
            this.animationPath = this.drawing.calcAnimationPath(this.imgCoords.topLeft, pathPoints);
        }
        
    }
    
    draw(ctx){
        this.drawing.drawImage(ctx, this);
        console.log("drawing "+this.word);
    }
    
    
    addToAnimations(canvas, zoom){
   //  console.log("adding" + this.word);
       return [this];
    }
    
    animate(ctx, stage, canvas, zoom){
       // console.log("animating region");
         ctx.save();
        
        this.draw(ctx);
         ctx.restore();
     
    }
    
    

    
    
}


export class Region extends Zone {
msText : any;
offset : number = 0;
duration : number = 8000;
    
    constructor(slide, imgData){
        super(slide);
      //console.log("constructing region");
        
        let transcription = null;
        let translation = null;
        
        if(slide.fields.transcription){
            transcription=slide.fields.transcription.value.split(" ").map(function(w){return {transcript:w, translation:""}}); 
        }
        
         if(slide.fields.translation){
            translation=slide.fields.translation.value.split(" ").map(function(w){return {transcript:w}});
        }
        
       
        
        this.msText = {transcription:transcription, translation:translation, bgImage:imgData.url, bgImage2:imgData.url2 };
        
        console.log(this);
    }
        

    draw(ctx){
      //console.log("drawing Region");
         this.drawing.applySetting(ctx, this.drawingSetting);
        this.drawing.drawPolygon(ctx, this.points, this.drawingSetting);
    }
    
        addToAnimations(canvas, zoom){
     console.log("adding" + this.word);
       return [this];
    }
    
    animate(ctx, stage, canvas, zoom){
       // console.log("animating region");
         ctx.save();
        this.drawing.applySetting(ctx, this.drawingSetting);
        ctx.globalAlpha=stage;
        this.draw(ctx);
         ctx.restore();
     
    }
    
       activate(ctx, component, zoom){
        console.log("activating");
        console.log(component.container.nativeElement);
       // ctx.clearRect(this.imgCoords.topLeft.x, this.imgCoords.topLeft.y, this.imgCoords.width, this.imgCoords.height);
        component.placeFrame(this, zoom);
        
        console.log(component);
        
    }
    
   
}


export class Cover extends Zone {

    constructor(slide){
        super(slide);
      //console.log("constructing region");
    }
        

    draw(ctx){
      //console.log("drawing Region");
         this.drawing.applySetting(ctx, this.drawingSetting);
     this.drawing.drawCover(ctx, this.points);
 
    
    }
    
        addToAnimations(canvas, zoom){
     console.log("adding" + this.word);
       return [this];
    }
    
    animate(ctx, stage, canvas, zoom){
       // console.log("animating region");
         ctx.save();
        this.drawing.applySetting(ctx, this.drawingSetting);
        ctx.globalAlpha=stage;
        this.draw(ctx);
         ctx.restore();
     
    }
    
        
   
}




export class Poster extends Zone {
    
    imgCoords : any;
    position: any;
    img : any;
    source : string;
    alpha : number;
    transform: any;
    duration : number;
    transformSetting : TransformSettings;
    animation : string;
    
    constructor(slide){
        super(slide);
        this.duration = 5000;
        this.static = false;
        this.animation = slide.fields.animation.value;
      this.imgCoords=this.calcImgCoords(this.points); 
        
           this.position=this.imgCoords.topLeft;
            this.img=new Image();
                this.img.src="assets/images/"+slide.fields.image.value;
              //console.log("image loaded: " + this.img.src);
        
           this.source=slide.fields.icon.value;
    }
    
    addToAnimations(canvas, zoom){
      //console.log(this.img);
        this.transformSetting=this.drawing.calcScaleToFit(this.imgCoords, canvas, zoom);
  
      //console.log("TEXT: " + this.description);
        let text = new Text(this.description, 200, 500);
       return [this];
    }
    
    animate(ctx, stage, canvas, zoom){
         ctx.save();
        this.setTransformSetting(stage, this.animation);
        this.drawing.drawTransparentImage(ctx, this, zoom);
        
        if(this.animation=="curtain"){
            this.drawing.drawCurtain(ctx, this);
        }
        
         ctx.restore();
       
          
    }
    
    draw(ctx){
        this.drawing.drawStaticImage(ctx, this);
    }
    
    setTransformSetting(stage, version){
      //console.log("SETTING V: " + version);
        switch(version){
            case "all": this.transformSetting.globalAlpha = this.calcAlpha(stage); this.transformSetting.scale = this.calcScale(stage, 0.5, 1); this.transformSetting.translate = this.calcTranslate(stage, this.transformSetting.center); break;
                case "smAll": this.transformSetting.globalAlpha = this.calcAlpha(stage); this.transformSetting.scale = 1 + (stage/5); this.transformSetting.translate = this.calcTranslate(stage, this.transformSetting.centerOrig); break;
            case "alpha": this.transformSetting.globalAlpha = this.calcAlpha(stage); this.transformSetting.scale = this.transformSetting.maxScale ; this.transformSetting.translate = {x:0, y:0}; break;
             case "curtain": this.transformSetting.globalAlpha = 1-stage; this.transformSetting.scale = this.transformSetting.maxScale ; this.transformSetting.translate = {x:0, y:0}; break;
            case "static": this.transformSetting.globalAlpha =  this.calcAlpha(stage); this.transformSetting.scale = 1 ; this.transformSetting.translate = {x:this.imgCoords.topLeft.x, y:this.imgCoords.topLeft.y}; break;
        }
        
    }
    
    calcAlpha(stage){
        let alpha:number;
             if(stage<0.5){
         alpha=Math.sqrt(stage/0.5);
     }else{
         alpha=Math.sqrt((1-stage)*2);
     }   
      return alpha;
    }
    
      calcScale(stage, initial, target){
        let scale:number;
          scale = (this.transformSetting.maxScale*initial) + (((target-initial)*this.transformSetting.maxScale)*stage);
        return scale;
   
      }
    
    calcTranslate(stage, destination){
          let x = this.imgCoords.topLeft.x + ((destination.x-this.imgCoords.topLeft.x)*stage);
        let y =  this.imgCoords.topLeft.y + ((destination.y-this.imgCoords.topLeft.y)*stage);
        return {x:x, y:y};
   
      }
}



export class Slide{
    name : string;
    text : Text;
    duration : number;
    music : string;
    zones : any[];
    
    seqLength: number;
    seqCount: number;
    
    constructor(data, zones){
        this.name = data.name;
        let text = data.text;
        this.duration = data.duration;
        this.zones = zones;
        this.music=data.music;
        this.zones.push(new Text(text, 1700, 2000));
        
        this.seqLength = this.zones.filter((z)=> z.text==null).length;
        this.seqCount = 0;
        
       this.setTiming(data);
    }
    
    addToAnimations(canvas, zoom){
        let animations=[];
        this.zones.forEach((z)=>animations=animations.concat(z.addToAnimations(canvas, zoom)));
       return animations;
    }
    
    animate(ctx, stage, canvas, zoom){
         let animations=[];
        this.zones.forEach((z)=>z.animate(ctx, stage, canvas, zoom));
       return animations;
     
    }
    
    setTiming(data){
        let ref = this;
        let segment = this.duration / this.seqLength;
        
          this.zones.filter((z)=>z.text!=null).forEach(function(z, zi){
            z.offset = 0; 
            z.duration = data.duration;
               
            });
             
        
        
         this.zones.filter((z)=>z.text==null).forEach(function(z, zi){
            switch(data.seqMode){
                case "S" : z.offset = 0; z.duration = data.duration; break; 
                case "D" : z.offset = zi*segment; z.duration = segment; break; 
                case "C" : z.offset = zi*segment; z.duration = data.duration-z.offset; break; 
            }
              
        });
    }
    
    
}


export class Text{
    drawing : DrawingSvc  = new DrawingSvc();
    text : string;
    x : number;
    y: number;
    
    constructor(text, x, y){
      console.log(">> constructing TEXT: " + text);
        this.text = text;
        this.x= x;
        this.y = y;   
      //console.log(this);
    }
    
    addToAnimations(canvas, zoom){
        return [this]
    }
    
    animate(ctx, stage, canvas){
        ctx.globalAlpha = this.calcAlpha(stage);

        this.drawing.writeText(ctx,this, canvas.nativeElement.offsetWidth, canvas.nativeElement.offsetHeight);
    }
    
       calcAlpha(stage){
        let alpha:number;
             if(stage<0.5){
         alpha=stage/0.5;
     }else{
         alpha=(1-stage)*2;
     }   
      return alpha;
    }
    
}

export class Curtain extends Slide{
   width : number;
    height : number;
    x : number;
    y : number;
    constructor(data, zones){
        super(data, zones);
        this.width = data.width;
        this.height = data.height;
        this.x = data.x;
        this.y = data.y;
        
        for(let x=0;x<data.x;x++){
            for(let y=0;y<data.y;y++){
            
                this.zones.push(new Cloud((data.width/data.x)*x, (data.height/data.y)*y, data.shape, data.setting));
            }
        }
        
         this.zones.push(new Text(data.text, 1700, 2000));
        this.setTiming(data);
    }
    
    
}

export class Cloud{
    type : string;
    drawing : DrawingSvc  = new DrawingSvc();
    drawingSetting: string;
    transformSetting : TransformSettings;
    points : Point[];

    constructor(x, y, shape, setting){
        this.type = "element";
        this.drawingSetting = setting;
        this.points = this.drawing.stringToPath(shape);
        this.transformSetting = {maxScale:1, scale:1, translate:{x:this.getRandom(x-50, x+50), y:this.getRandom(y-50, y+50)}, globalAlpha: this.getRandom(0,1)};
        
    }
    
    addToAnimations(){
        return [this];
    }

    
    animate(ctx, stage, canvas, zoom){
       // console.log("animating region");
         ctx.save();
        this.randomizeSetting(stage);
        this.drawing.applySetting(ctx, this.drawingSetting);
        this.drawing.applyTransform(ctx, this.transformSetting);
         ctx.globalAlpha = 1-stage;
        this.draw(ctx);
         ctx.restore();
     
    }
    
    randomizeSetting(stage){
        this.transformSetting.translate.x+=this.getRandom(-0.05,0.05);
        this.transformSetting.translate.y+=this.getRandom(-0.05,0.05);
        this.transformSetting.globalAlpha=1-stage;
        this.transformSetting.scale+=this.getRandom(0,0.02);
        let ref=this;
       //this.points.forEach((point)=>{point.x+=ref.getRandom(0,1);});
        
     //   console.log(this.transformSetting);
        
    }
    
     draw(ctx){
      //console.log("drawing Region");
         this.drawing.applySetting(ctx, this.drawingSetting);
        this.drawing.applyTransform(ctx, this.transformSetting);
        
        this.drawing.drawPolygon(ctx, this.points, this.drawingSetting);
    }
    
     getRandom(min, max){
    let result = min + (Math.random()*(max-min));
    return result;
}
    
      calcAlpha(stage){
        let alpha:number;
             if(stage<0.5){
         alpha=Math.sqrt(stage/0.5);
     }else{
         alpha=Math.sqrt((1-stage)*2);
     }   
      return alpha;
    }
    
}





