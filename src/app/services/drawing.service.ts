import { Injectable } from '@angular/core';
import { DrawingSettings } from '../interfaces/drawing-settings';
import { ImgData} from '../interfaces/img-data';
import { Point } from '../interfaces/point';

@Injectable({
  providedIn: 'root'
})

export class DrawingSvc {
    drawingSettings={uzemi:{}, highlight:{}, highlight_line:{}, Flora:{} , region_white:{}, region_green:{},region_green_dashed:{}, region_blue:{}, region_red:{}, region_red_dashed:{}, region_purple:{}, region_yellow:{},border_black:{},
                     text:{},  image:{}, cloud:{}, darkCloud:{}, blackness:{}, battlefield:{}, road:{}, sea_road:{}, shadow_outline:{}};
    animations=[];
    dynamics = [];
    animationStage=0;
      animating : boolean = true;
    imgData : any;
  
constructor(
    ) { 
    
    this.drawingSettings.uzemi=<DrawingSettings>{fillStyle:"transparent", strokeStyle:"red", lineWidth:5, shadowColor:"transparent", shadowBlur:0};
    this.drawingSettings.Flora=<DrawingSettings>{fillStyle:"rgba(0,255,0,0.5)", strokeStyle:"transparent", lineWidth:1, shadowColor:"transparent", shadowBlur:0};
    this.drawingSettings.region_white=<DrawingSettings>{fillStyle:"rgba(255,255,255,0.2)", strokeStyle:"black", lineWidth:3, shadowColor:"transparent", shadowBlur:0};
        this.drawingSettings.region_green=<DrawingSettings>{fillStyle:"rgba(0,255,0,0.2)", strokeStyle:"black", lineWidth:3, shadowColor:"transparent", shadowBlur:0};
         this.drawingSettings.region_blue=<DrawingSettings>{ fillStyle:"rgba(0,0,255,0.2)", strokeStyle:"black", lineWidth:3, shadowColor:"black", shadowBlur:0};
          this.drawingSettings.region_red=<DrawingSettings>{ fillStyle:"rgba(255,0,0,0.2)", strokeStyle:"transparent", lineWidth:0, shadowColor:"black", shadowBlur:50};
       
         this.drawingSettings.region_purple=<DrawingSettings>{ fillStyle:"rgba(255,0,255,0.2)", strokeStyle:"black", lineWidth:3, shadowColor:"transparent", shadowBlur:0};
         this.drawingSettings.region_yellow=<DrawingSettings>{ fillStyle:"rgba(239, 222, 28, 0.2)", strokeStyle:"transparent", lineWidth:0, shadowColor:"black", shadowBlur:50};
         this.drawingSettings.border_black=<DrawingSettings>{ fillStyle:"transparent", strokeStyle:"black", lineWidth:3, shadowColor:"transparent", shadowBlur:0};
    this.drawingSettings.text=<DrawingSettings>{fillStyle:"yellow", strokeStyle:"black", lineWidth:3, shadowColor:"transparent", shadowBlur:0};
    this.drawingSettings.highlight=<DrawingSettings>{ fillStyle:"rgba(255,255,255,0.2)", strokeStyle:"transparent", lineWidth:5, shadowColor:"white", shadowBlur:10};
        this.drawingSettings.highlight_line=<DrawingSettings>{ fillStyle:"transparent", strokeStyle:"rgba(255,255,255,0.7)", lineWidth:8, shadowColor:"white", shadowBlur:5};
    this.drawingSettings.image=<DrawingSettings>{ fillStyle:"white", strokeStyle:"transparent", lineWidth:5, shadowColor:"white", shadowBlur:10};
        
         this.drawingSettings.shadow_outline=<DrawingSettings>{ fillStyle:"transparent", strokeStyle:"rgba(0,0,255,0.5)", lineWidth:3, shadowColor:"blue", shadowBlur:10};
        
     this.drawingSettings.cloud=<DrawingSettings>{fillStyle:"rgba(255,255,255,0.8)", strokeStyle:"transparent", lineWidth:0, shadowColor:"rgba(255,255,255,0.8)", shadowBlur:50};    
        this.drawingSettings.darkCloud=<DrawingSettings>{fillStyle:"rgba(20,20,20,0.99)", strokeStyle:"transparent", lineWidth:0, shadowColor:"rgba(255,255,255,0.8)", shadowBlur:100};  
         this.drawingSettings.battlefield=<DrawingSettings>{fillStyle:"rgba(255,0,0,0.5)", strokeStyle:"transparent", lineWidth:0, shadowColor:"rgba(255,0,0,0.5)", shadowBlur:10}; 
        
         this.drawingSettings.road=<DrawingSettings>{fillStyle:"transparent", strokeStyle:"rgba(89, 52, 0,0.9)", lineWidth:4, shadowColor:"transparent", shadowBlur:0}; 
        this.drawingSettings.sea_road=<DrawingSettings>{fillStyle:"transparent", strokeStyle:"rgba(27, 29, 76,0.9)", lineWidth:4, shadowColor:"transparent", shadowBlur:0};
        
        
          this.drawingSettings.blackness=<DrawingSettings>{fillStyle:"black", strokeStyle:"transparent", lineWidth:0, shadowColor:"black", shadowBlur:5}; 
  this.imgData = {};
    }
    

    
    runAnimations(ctx, animCtx, canvas, zoom, startTime, duration){
    //  console.log("animating");
        // this.applySetting(animCtx,"image");
        let ref=this;
        var requestAnimationFrame=window.requestAnimationFrame;
        requestAnimationFrame(function(){ref.animate(ctx, animCtx, canvas, zoom, startTime, duration)});
    }
 
    
    animate(ctx, animCtx, canvas, zoom, startTime, duration){
        
        if(this.animating){
                animCtx.clearRect(0,0,canvas.nativeElement.width,canvas.nativeElement.height);
        let ref=this;

        this.animations.forEach(function(a, ai){
            let now = Date.now();
            let runningTime = now-startTime;
           // console.log("running: "+runningTime);
            if(a.offset<=runningTime && a.offset+a.duration>=runningTime){
               a.animate(animCtx, ref.calcStage(startTime+a.offset, a.duration), canvas, zoom);
               }
               
             
            
        });
        
    
        
        if(this.animationStage<1){
            this.animationStage=this.calcStage(startTime, duration);
            requestAnimationFrame(function(){ref.runAnimations(ctx,animCtx, canvas, zoom, startTime, duration)});
        }else{
          //  console.log("animation finished");
            animCtx.clearRect(0,0,canvas.nativeElement.width,canvas.nativeElement.height);
               this.animationStage=0;
                this.runAnimations(ctx,animCtx, canvas, zoom,Date.now(), 5000);
           
            this.animations.filter((a)=>a.fixed).forEach(function(a){
                
                    a.draw(ctx);
             
        });
        //    console.log(this.animations);
        }
        }
        
 
        
    }
    
    
    calcStage(startTime, duration){
        let now = Date.now();
        let diff = now - startTime;
        let stage = diff/duration;
        return stage;
    }
  
    
    writeText(ctx, text, canvasWidth, canvasHeight){
        this.applySetting(ctx, "text");
 
        ctx.textAlign="center";
        ctx.fillStyle="yellow";
       
        let fontSize = canvasHeight/20;
  
        ctx.font="800 "+fontSize+"px Arial";
       
    let textWidth = ctx.measureText(text.text).width;
        
        let  x = canvasWidth/2;
        let y: number;
        
        if(textWidth<=canvasWidth-50){
            y = canvasHeight - 20 - fontSize;
            this.placeText(ctx,text.text.replace(";",""), x, y);
        }else{
            let textSplit = text.text.split(";");

             y = canvasHeight - 40 - (fontSize*2);
            this.placeText(ctx,textSplit[0], x, y);
              y = canvasHeight - 20 - fontSize;
            this.placeText(ctx,textSplit[1], x, y);
        }
        
        
       
    
 
    }
    
    placeText(ctx,text, x, y){

         ctx.fillText(text, x, y);
        ctx.lineWidth=2;
        ctx.strokeStyle="black";
        ctx.strokeText(text, x, y);
    }
    

 
    drawPolygon(ctx, points, setting){
      // this.applySetting(ctx,this.drawingSettings[setting]);
     
            ctx.beginPath();
            ctx.moveTo(points[0].x,points[0].y);
            
            for(var p=1;p<points.length;p++)
            {
                ctx.lineTo(points[p].x, points[p].y);
            }
            
            ctx.closePath();
            ctx.fill(); 
            ctx.stroke();
    }
    
      drawLine(ctx, points, setting){
      // this.applySetting(ctx,this.drawingSettings[setting]);
     
            ctx.beginPath();
          ctx.setLineDash([10, 6])
            ctx.moveTo(points[0].x,points[0].y);
            
            for(var p=1;p<points.length;p++)
            {
                ctx.lineTo(points[p].x, points[p].y);
            }
            
            ctx.stroke();
          ctx.setLineDash([])
    }
    
     drawCover(ctx, points){
      // this.applySetting(ctx,this.drawingSettings[setting]);
     
          ctx.fillRect(0,0,5000,5000);
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.moveTo(points[0].x,points[0].y);
            
            for(var p=1;p<points.length;p++)
            {
                ctx.lineTo(points[p].x, points[p].y);
            }
            
            ctx.closePath();
            ctx.fill(); 
            ctx.stroke();
         
       
        ctx.globalCompositeOperation = "source-over";
    }
    
       
    

    
    drawImage(ctx, zone){
      //  console.log(zone);
      //  ctx.globalAlpha=1;
        let shift=[0,0];
//   zone.img.src = "assets/images/"+zone.source;
    let ix= parseInt(zone.imgCoords.topLeft.x+shift[0]);
    let iy=parseInt(zone.imgCoords.topLeft.y+shift[1]);
    //console.log(ctx.globalAlpha);
      //  console.log(zone.img.src);
    //    console.log(zone.img+" / "+ix+" / "+ iy+" / "+ zone.imgCoords.width+" / "+ zone.imgCoords.height);
   ctx.drawImage(zone.img,ix, iy, zone.imgCoords.width, zone.imgCoords.height);
         ctx.globalAlpha=1;
      
 
    }
    
    drawStaticImage(ctx, zone){
        this.applySetting(ctx, "image");
        
       // let img=new Image();
        zone.img.onload=function(img){
             
     //    console.log(zone.img+" / "+zone.imgCoords.topLeft.x+" / "+ zone.imgCoords.topLeft.y+" / "+ zone.imgCoords.width+" / "+ zone.imgCoords.height);
        ctx.drawImage(zone.img,zone.imgCoords.topLeft.x, zone.imgCoords.topLeft.y, zone.imgCoords.width, zone.imgCoords.height);
        ctx.font = "20px Georgia";
        //ctx.fillStyle="black";
        ctx.globalAlpha=1;
        ctx.fillText(zone.word,  zone.imgCoords.topLeft.x ,zone.imgCoords.topLeft.y+zone.imgCoords.height);
        };
 
    }
    
    drawTransparentImage(ctx,zone, zoom){
        //console.log(zone.alpha);
    this.applySetting(ctx, "image");   
this.applyTransform(ctx, zone.transformSetting);
   
       // ctx.scale(zone.maxScale, zone.maxScale);
         
       
        // console.log(zone.img+" / "+zzoone.imgCoords.topLeft.x+" / "+ zone.imgCoords.topLeft.y+" / "+ zone.imgCoords.width+" / "+ zone.imgCoords.height);
        ctx.drawImage(zone.img,0, 0, zone.imgCoords.width, zone.imgCoords.height);
       
    
    
    }
    
        
    drawCurtain(ctx,zone){
  
  
        ctx.fillStyle="rgba(0,0,0,0.7)";
      
        // console.log(zone.img+" / "+zzoone.imgCoords.topLeft.x+" / "+ zone.imgCoords.topLeft.y+" / "+ zone.imgCoords.width+" / "+ zone.imgCoords.height);
        ctx.fillRect(0, 0, zone.imgCoords.width, zone.imgCoords.height);
 
    
    
    }
    
//old version
    calcDestination(position, destination, stage){
       // console.log(stage);
        let diffX=destination[0]-position.x;
        let diffY=destination[1]-position.y;
      //  console.log(diffY);
        let shift=[diffX*stage, diffY*stage];
      //  console.log(position);
     //    console.log(destination);
      //  console.log(shift);
        return shift;
    }
    
     calcAnimationPath(position : Point, points : Point[]){
        let result = [{start:{time:0, point:position}, end:{time:0, point:{x:position.x, y:position.y}}, distance:0, relDistance:0}];
        let ref = this;
         points.forEach(function(p, pi){
             result[pi].end.point=p;
             result[pi].distance = ref.calcPathLength(result[pi].start.point, result[pi].end.point);
             result.push({start:{time:0, point: p}, end:{time:0, point:{x:position.x, y:position.y}}, distance : 0, relDistance: 0});
         });
         
         let distances = result.map((r)=>r.distance);
        // console.log("total distance array: " + distances);
         let totalDistance = distances.reduce((tot,d)=>tot+d);
         //  console.log("total distance: " + totalDistance);
         let counter = 0;
          result.forEach(function(r, ri){
             r.relDistance = r.distance/totalDistance;
             r.start.time = counter;
              counter+=r.relDistance;
            r.end.time = counter;
         });
         
         return result;
         
    }

 calcPathLength(a, b){
        let sx = Math.abs(a.x-b.x);
        let sy = Math.abs(a.y-b.y);
        
        let p = Math.sqrt(Math.pow(sx,2) + Math.pow(sy,2));
        
        return p;
    }
    
    
    applySetting(ctx, stg){
       // ctx.globalAlpha=this.drawingSettings[stg].globalAlpha;
        ctx.fillStyle=this.drawingSettings[stg].fillStyle;
        ctx.strokeStyle=this.drawingSettings[stg].strokeStyle;
        ctx.lineWidth=this.drawingSettings[stg].lineWidth;
        ctx.shadowColor=this.drawingSettings[stg].shadowColor;
        ctx.shadowBlur=this.drawingSettings[stg].shadowBlur;
        
        if(this.drawingSettings[stg].dashed){
            ctx.setLineDash([10, 6])
        }else{
            ctx.setLineDash([])
        }
    }
    
    applyTransform(ctx,transformSetting){
      // console.log(">>> TRANSFORMING: " + transformSetting.globalAlpha);
        //console.log(transformSetting);
    let scale = transformSetting.scale;

        ctx.globalAlpha = transformSetting.globalAlpha;
        ctx.translate(transformSetting.translate.x, transformSetting.translate.y); 
        ctx.scale(scale, scale); 
        
    }
    
    
    calcScaleToFit(img,canvas, zoom){
  // console.log(canvas);
    let wrapperWidth=canvas.nativeElement.offsetWidth;
    let wrapperHeight=canvas.nativeElement.offsetHeight;
    
   // console.log(wrapperWidth*zoom +" <> "+wrapperHeight*zoom);
   // console.log(img.width);
    let ratioX=parseInt(wrapperWidth)/parseInt(img.width);
    let ratioY=parseInt(wrapperHeight)/parseInt(img.height);
    
  //  console.log(ratioX +" - "+ratioY);
    
        let maxScale : number;
        
    if(ratioX<=ratioY){
        maxScale = ratioX;
    }else{
        maxScale = ratioY;
    }
        
    let centerX = (wrapperWidth-(img.width*maxScale))/2;   
    let centerY = (wrapperHeight-(img.height*maxScale))/2;  
        
    let centerOrigX = (wrapperWidth-(img.width))/2;   
    let centerOrigY = (wrapperHeight-(img.height))/2;  
        
     //   console.log({maxScale: maxScale, center : {x:centerX, y:centerY}});
        
        return {maxScale: maxScale, center : {x:centerX, y:centerY}, centerOrig:{x:centerOrigX, y:centerOrigY}};
}
 
        
       stringToPath(pathString){
        let coords=pathString.trim().split(/\s+/);
        let rsl=[];
        coords.forEach((c)=>{
            let xy=c.trim().split(",");
         
            rsl.push({x:xy[0], y:xy[1]});
        });
        return rsl;
    }

  //NOt USED
    
         drawTexture(ctx, zone, cat){
           //  console.log("drawing texture");
      
           // console.log("texture loaded");
           // zone.img.src="assets/images/textures/forest_tile.png";
         let texture=ctx.createPattern(zone.img, "repeat");
            ctx.fillStyle=texture;
         ctx.strokeStyle="transparent";
                ctx.beginPath();
            ctx.moveTo(zone.points[0].x,zone.points[0].y);
            
            for(var p=1;p<zone.points.length;p++)
            {
             //    console.log(p);
                ctx.lineTo(zone.points[p].x, zone.points[p].y);
            }
            
            ctx.closePath();
         
         ctx.fill();
            ctx.stroke();
           
       ctx.globalCompositeOperation='source-in';
      zone.source="textures/forest_tile.png";
         //this.drawStaticImage(ctx,zone);)
    //     console.log(texture);
        //console.log("TEXTURE: /"+texture+" / "+zone.imgCoords.topLeft.x+" / "+ zone.imgCoords.topLeft.y+" / "+ zone.imgCoords.width+" / "+ zone.imgCoords.height);
        // ctx.fillStyle="transparent";
      //  ctx.drawImage(texture,zone.imgCoords.topLeft.x, zone.imgCoords.topLeft.y, zone.imgCoords.width, zone.imgCoords.height);
       //ctx.fillStyle="blue";
        //ctx.fillRect(0,0,3000, 3000);
      
       ctx.globalCompositeOperation='source-over';
       //this.applySetting(ctx,this.drawingSettings[cat]);
           
   
       
    }
        
        
    }

