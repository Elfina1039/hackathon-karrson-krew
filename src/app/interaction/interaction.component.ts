import { Component, OnInit, Output, EventEmitter, ViewChildren, ViewChild} from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Islide } from '../interfaces/Islide';
import { MapData } from '../interfaces/map-data';
import { Zone, Region, Icon, Slide, Poster, Cover} from '../classes/zone';
import { ImgData} from '../interfaces/img-data';
import { ZoneCategory } from '../interfaces/zone-category';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit{
    @Output() soundLoaded = new EventEmitter<string>();
    @ViewChildren("canvas") canvases :any;
     @ViewChild("infoWindow") infoWindow :any;
    slide: any;
    zoneLoader : any[] = [];
    zones: any[] = [];
    description: string;
    imgData: any = [];
    imgUrl: string;
    songUrl:string;
    youTubeId : string = "";
    commentUrl:string;
    name: string;
    zoneCategories: any[]=[];
    mode : string = "interaction";
    imgCount : number;
    imgCounter : number = 0;
    cis : number[] = []
    
  constructor(protected _activatedRoute: ActivatedRoute, protected _dataService: DataService, private router : Router) { 
  this.zones=[];
      this.zoneCategories=[];

  }


  ngOnInit() {
      console.log("afterViewInit");
      console.log(this.canvases);
     
   // console.log("route at component: "+this._activatedRoute.snapshot.params['map']);
   //   console.log("selected zone: "+this._activatedRoute.snapshot.params['zone']);
      
      //this._dataService.askOxford("ΤΗΣ","el");
      
      let source=this._activatedRoute.snapshot.params['source'];
      let canvases=this._activatedRoute.snapshot.params['canvases'].split(",");
      
      if(canvases.length>1){
           
this.mode="preview";
      }
      
      let ref=this;
    
      
      for(let i=0;i<canvases.length;i++){
          this.cis.push(i);
              this._dataService.fetchJson(source+"_"+canvases[i]).subscribe(function(data : MapData){
        console.log(data);
       let imgData=data["imgData"];
       // ref.canvases._results[i].imgData=imgData;
        console.log(imgData);
        
console.log("processing loop");
        
      let zoneLoader=ref.processIcons(data);
        console.log(ref.zoneLoader);
 // ref.displayZones();
       //  ref.canvases._results[i].zones=ref.zoneLoader.zones;         
       // ref.canvases._results[i].zoneCategories=ref.zoneLoader.zoneCategories;  
                  
                  
                  
      let catList=ref.zones.map((zone)=>zone.category);
     // this.cats=new Set(catList);
           
    ref.zones[i]=zoneLoader.zones;
     ref.zoneCategories[i]=zoneLoader.zoneCategories;
      ref.imgData[i]=imgData;
            console.log(ref.zones);   
    });
          
 
      }
     
    
      
       console.log(ref.zones);

       // let id=<string>this._activatedRoute.snapshot.params['zid'];
  
      
      
  }
    
displayClicked(e){
    //console.log("clicked");
    //console.log(e);
   // this.infoWindow.open();
    this.name=e.word;
    this.description=e.description;
    this.imgUrl=e.image;
    

            this.youTubeId=e.music;
            this.songUrl="";
     
      


}
    
       processIcons(slideSet){
           console.log("Processing icons");
        let ref=this;
        var result = [];
         let categories = {};
           
        slideSet.slides.forEach(function(slide){
            console.log("PROCESSING "+ slide.word);
            let newZone;
            slide.component = ref;
            switch(slide.cat){
           
                case "translation" : newZone= new Region(slide, slideSet.imgData); break;
                    case "Script" : newZone= new Region(slide, slideSet.imgData); break;
                    case "Content" : newZone= new Region(slide, slideSet.imgData); break;
                    case "Region" : newZone= new Region(slide, slideSet.imgData); break;
                 
            }
            
            if(!categories[slide.cat]){
                let selectedVal: boolean;
               
                
                selectedVal=true;
                
               categories[slide.cat] = {name: slide.cat, zoneCount:0, selected:selectedVal}; 
            }
            categories[slide.cat].zoneCount++;
            
            result.push(newZone);
            console.log(result);
        });
           
      console.log(result);
           let zoneCategories = [];
           
           for(let c in categories){
               zoneCategories.push(categories[c]);
           }
           
        return {zones :result, zoneCategories : zoneCategories};
    }
    
    displayZones(){
        this.zones = this.zoneLoader;
        console.log("displaying zones");
    }
    
    moveInTime(e){
        console.log(e.srcElement.value);
      //  this.canvases._results.forEach((c)=>c.moveInTime(e.srcElement.value));
        
        this.router.navigate(['single/aquila_v/'+e.srcElement.value])
        
    }
    
    getTop(ci){
        return ci*50+"%";
    }
    
    getHeight(ci){
        return 100/ci+"%";
    }

}
