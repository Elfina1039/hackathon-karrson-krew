import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DrawingSvc } from '../services/drawing.service';
import { ImgData } from '../interfaces/img-data';
import { SlideConfig } from '../interfaces/slide-config';
import { Point } from '../interfaces/point';
import { ZoneCategory } from '../interfaces/zone-category';
import { Zone } from '../classes/zone';



@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
    providers:[DrawingSvc]
})
export class CanvasComponent implements OnInit, OnChanges, AfterViewInit {
     @ViewChild("magicglass") magicGlass;
     @ViewChild("msWrapper") wrapper;
     @ViewChild("manuscript") outer;
    @ViewChild("msCanvas") canvas;
     @ViewChild("interactiveCanvas") interaction;
    @ViewChild("animationCanvas") animation;
    @ViewChild("les") les;
    @Input("zones") zones: any;
     @Input("zoneCategories") zoneCategories : any;
    @Input("imgData") imgData: ImgData;
    @Input("mode") mode: string;
   startTime: number = Date.now();
    @Input("slideConfig") slideConfig: SlideConfig;
    @Input("top") top: string;
    @Input("height") height: string;
    @Input("infoWindow") infoWindow: string;
   // @Input("slideZoom") slideZoom: number;
    @Output() clicked = new EventEmitter<string>();
    drawing : DrawingSvc;
    title: string;
    bgImage: string;
    zoom:number;
    fitZoom : number;
    selectedZone : Zone;
    displayedZones : Zone[] = [];
    
    ctx: any;
    interCtx: any;
    animCtx: any;
    
    opacityRatio:number = 1;
    
    

  constructor (private _drawingSvc : DrawingSvc) { 
   this.zoom=1;
    this.fitZoom = 0.4;
      

  }
    

ngOnInit() {
   // console.log("--CANVAS--ON INIT--");
this.magicGlass.transcription="";
  }    
    
    
    ngAfterViewInit(){
     //  console.log("--CANVAS--AFTER VIEW INIT--");
    this.ctx=this.canvas.nativeElement.getContext("2d");
     this.interCtx=this.interaction.nativeElement.getContext("2d");
      this.animCtx=this.animation.nativeElement.getContext("2d");
         //  let zones = this.zones.filter((z)=>z.category=="Území");
          this.displayedZones = this.zones;
        console.log(this.zones);
        if(this.displayedZones){
             this.processZones(this.displayedZones);
        }
     
                     }
    

 ngOnChanges() {
     console.log(this.zones);
     console.log(this.imgData);
 //  console.log("--CANVAS--ON CHANGES--");
     if(this.imgData){
           this.bgImage=this.imgData.url;
    this.canvas.nativeElement.style.backgroundImage="url("+this.bgImage+")";
        //  this.interaction.nativeElement.style.backgroundImage="url("+this.imgData.url2+")";
     this.zoom=this.calcZoomToFit();
    this.fitZoom=this.zoom;
     this.scaleCanvas([this.canvas, this.interaction, this.animation],this.wrapper, this.outer,this.zoom, this.fitZoom,{x:0,y:0});
     
     }
   
  
     
  if(this.ctx && this.interCtx && this.animCtx){
   this.displayedZones = this.zones;
        if(this.displayedZones){
             this.processZones(this.displayedZones);
        }
  }
  }
   
    
processZones(zones){
    
    console.log(zones);
    if(this.mode=="interaction"){
        this.ctx.clearRect(0,0,this.canvas.nativeElement.width,this.canvas.nativeElement.height);
    }
    
     this.animCtx.clearRect(0,0,this.interaction.nativeElement.width,this.interaction.nativeElement.height);
    this._drawingSvc.animations=[];
     
   zones.forEach((zone)=>{
    //    console.log("canvas drawing zones: ");
      //  console.log(zone);
        
        
            if(this.mode=="preview"){
              //  console.log("adding to animations");
            //    console.log(zone);
             //   this._drawingSvc.animations.push({img:zone.img,imgCoords:zone.imgCoords,cat:zone.cat, source:zone.fields.icon.value, destination:zone.fields.destination.value.split(","),shift:[<number>0,<number>0] });
                this._drawingSvc.animations=this._drawingSvc.animations.concat(zone.addToAnimations(this.canvas, this.zoom));
            }else{
                zone.draw(this.ctx);
            }
        
    });
     
if(this._drawingSvc.animations.length>0){
    
    // this.canvas.nativeElement.style.transition="transform "+this.slideConfig.duration/1000+"s";
    // this.interaction.nativeElement.style.transition="transform "+this.slideConfig.duration/1000+"s";
    // this.animation.nativeElement.style.transition="transform "+this.slideConfig.duration/1000+"s";
    
    // this.scaleCanvas([this.canvas,  this.animation], this.wrapper, this.outer, this.fitZoom*this.slideConfig.zoom, this.fitZoom, this.slideConfig.translate);
    
//console.log("RUNNING ANIMATIONS");
 //   console.log(this._drawingSvc.animations);
    this._drawingSvc.animationStage=0;
    //this.zoomChng(0.2);
    console.log("running animations");
    let ref = this;
    ref._drawingSvc.runAnimations(ref.ctx,ref.animCtx, ref.animation, ref.zoom,Date.now(), 8000);
    setInterval(function(){ref._drawingSvc.runAnimations(ref.ctx,ref.animCtx, ref.animation, ref.zoom,Date.now(), 8000);},8500);
    
}  
    
  
   
    
    
}    
   
    
 locatePolygon(mouse, ctx, display) {
     if(this.mode=="interaction" && this.displayedZones){
           var rZone;
         let ref = this;
         //z.cat!="movement" && 
  this.displayedZones.filter((z)=>(z!=ref.selectedZone && z.category!="Mrak")).forEach(function(zone, zid) {

    let points = zone.points;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    //console.log(zone.WORD["#text"]+"="+points[0].x+":"+ points[0].y);

    for (let p = 1; p < points.length; p++) {
      //  console.log(zone);
      ctx.lineTo(points[p].x, points[p].y);

      //console.log(points[p].x+":"+ points[p].y);
    }

    ctx.closePath();

    if (ctx.isPointInPath(mouse.offsetX, mouse.offsetY)) {
      rZone = zone;


    }

  });
     if(rZone){
      //  console.log(rZone.word);
        
     this.animCtx.clearRect(0,0,this.interaction.nativeElement.width,this.interaction.nativeElement.height);
    // this._drawingSvc.drawPolygon(this.interCtx, rZone.points,"highlight");
    rZone.highlight(this.animCtx);
     //    console.log(this.magicGlass);
        
     if(display==true){
      //   console.log(rZone);
           
        this.clicked.emit(rZone); 
       
      
             this.focusOn(rZone); 
             this.selectedZone = rZone;
         
        
     } 
     }

  
     }



}
    
calcZoomToFit(){
//    console.log("calculating zoom");
  //   console.log(this.wrapper);
   // console.log(this.wrapper.nativeElement.offsetHeight);
    let wrapperWidth=this.wrapper.nativeElement.offsetWidth;
    let wrapperHeight=this.wrapper.nativeElement.offsetHeight;
    
 //   console.log(wrapperWidth +" <> "+wrapperHeight);
    
    let ratioX=parseInt(wrapperWidth)/parseInt(this.imgData.width);
    let ratioY=parseInt(wrapperHeight)/parseInt(this.imgData.height);
    
  //  console.log(ratioX +" - "+ratioY);
    
    if(ratioX<=ratioY){
      //  console.log("returning X");
        return ratioX;
    }else{
        return ratioY;
    }
}
    
    
zoomChng(zChng) {
    this.magicGlass.hideFrame();
  // console.log(zChng);
 // console.log("before:", this.zoom);
  let newZoomLevel = this.zoom + parseFloat(zChng);
  this.zoom = newZoomLevel >= .1 ? newZoomLevel : .1;
//  console.log("after:", this.zoom);
    this.scaleCanvas([this.canvas, this.interaction, this.animation], this.wrapper, this.outer, this.zoom, this.fitZoom,{x:0,y:0});


}
    
    moveInTime(year) {
        console.log("moving to "+year);
        console.log(this.zones);
this.canvas.nativeElement.style.opacity=1;
this.interaction.nativeElement.style.opacity=0;
        
   // this.displayedZones = this.zones.filter((z)=>year>=z.startDate && year<=z.endDate);
//    this.processZones(this.displayedZones);
    
}
    
    
redrawSelected(e){
 //   console.log(e);
    this.displayedZones = this.zones.filter((z)=>e[z.category]==true);
    this.processZones(this.displayedZones);
}    
    

    
    scaleCanvas(canvases, inner, outer, zoom, fitZoom, translate){
      //  console.log("scaling to: "+zoom);
      
let dw=parseInt(outer.nativeElement.style.width);   // manuscript element
let dh=parseInt(outer.nativeElement.style.height);   
    
    
let nw : number=parseInt(this.imgData.width)*zoom;    
let nh : number=parseInt(this.imgData.height)*zoom;  
    
        let ref=this;
    canvases.forEach(function(c){
        let shift=" ";
        if(zoom<fitZoom){
          //c.nativeElement.style["transform-origin"]= "center center";  
            shift=" translate(500px, 500px)";
        }else{
            c.nativeElement.style["transform-origin"]= "top left"; 
        }
        
        c.nativeElement.style.transform= "scale(" + zoom + "," + zoom + ") translate("+translate.x+"px,"+translate.y+"px)";
        
        
         if(nw<dw && nh<dh)
        {
       c.nativeElement.style.overflow="hidden";
        }
    else
           {
            c.nativeElement.style.overflow="scroll";
        }
        
    });
    

   
    
   // console.log(nw + "--" + nh);
 inner.nativeElement.style.width=nw;
  inner.nativeElement.style.height=nh;
       
        
} 
    
  focusOn(zone){
   // console.log("zooming in");
         
    let xtr=zone.imgCoords;
    
    let sx=xtr.max.x-xtr.min.x;
    let sy=xtr.max.y-xtr.min.y;
    
    let vw=this.outer.nativeElement.clientWidth;
    let vh=this.outer.nativeElement.clientHeight;
      
    //  console.log(this.outer);
    
    let ox=(vw-sx)/2;
    let oy=(vh-sy)/2;
      let nzm: number;
      
    if(ox<oy){
        nzm = vw/sx*0.7;
    }else{
         nzm = vh/sy*0.7;
    }
  
    //  console.log(vw + " : " + sx);
    //  console.log("new zoom: "+nzm);
       let ref=this;
      

    
    this.zoomChng(nzm-this.zoom);
     // ref.moveScreen(xtr,ox,oy, nzm, zone);
     
   setTimeout(function(){ref.moveScreen(xtr,ox,oy, nzm, zone)},700);
   
                };
    
moveScreen(xy, ox, oy, nzm, zone) {
//  console.log(((xy.max.x-xy.min.y)/6*nzm) + "//" + ((xy.max.y-xy.min.y)/6*nzm));
//-((xy.max.x-xy.min.y/3)*nzm)
//-((xy.max.y-xy.min.y/3)*nzm)
    var x=Math.max(0,(xy.min.x*nzm-((xy.max.x-xy.min.x)/6*nzm) ));
    var y=Math.max(0,(xy.min.y*nzm-((xy.max.y-xy.min.y)/6*nzm)));


 // console.log(x + "-ss-" + y);
  //  console.log( this.outer);

  this.wrapper.nativeElement.scrollTop = y;
  this.wrapper.nativeElement.scrollLeft = x;
     zone.activate(this.ctx,this.magicGlass, nzm);
    
           // this.displayedZones = this.zones.filter((z)=>z.word!=zone.word);
      //this.processZones(this.displayedZones);


}
  
  
    

}


