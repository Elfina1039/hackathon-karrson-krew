import { Injectable } from '@angular/core';
import { Islide } from '../interfaces/Islide';
import { SlideSet } from '../interfaces/slide-set';
import { ImgData } from '../interfaces/img-data';
import { ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    presentation={jedna:"prvni", dva:"druha"};
    slide: string;
    imgData : ImgData[];
    slideSets : SlideSet[];
    

  constructor(private _activatedRoute: ActivatedRoute, private http: HttpClient) { 
      console.log("data service construction");
     // console.log(this._activatedRoute.snapshot.params['zid']);
  //this.slide=this._activatedRoute.snapshot.params['zid'];
    //  console.log("SLIDE: "+ this.slide);
  
  }
    
    fetchJson(fileName){
        console.log("fetch "+fileName);
        return this.http.get("/assets/json/"+fileName+".json");
        
    }
    

    
     askOxford(word, language){
        console.log("look up "+word);
 
        return this.http.get("/assets/php/askOxford.php?word="+word+"&lang="+language);
        
    }
    
    
    
    

    
    processIcons(slideSet){
        console.log("PROCEsSING");
        let ref=this;
        slideSet.slides.forEach(function(slide){
             slide.points=ref.stringToPath(slide.shape);
            slide.imgCoords=ref.calcImgCoords(slide.points);
            
            if(slide.fields.icon.value){
            slide.position=slide.imgCoords.topLeft;
            slide.img=new Image();
                slide.img.src="assets/images/"+slide.fields.icon.value;
                console.log("image loaded: " + slide.img.src);
           slide.source=slide.fields.icon.value;
           
            }
            
             if(slide.fields.image.value){
            slide.img=new Image();
                slide.img.src="assets/images/"+slide.fields.image.value;
                console.log("image loaded: " + slide.img.src);
           slide.source=slide.fields.icon.value;
           
            }
        });
        
    }
    
    getImgData(i){
        return this.imgData[i];
    }
    
    getSlides(i){
        let jsonData= this.fetchJson("aritreia").subscribe(
        function(data){
            console.log(data);
            let result=data;
        this.processIcons(result);
        return result;
            
            });
        
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
 
    