import { Component, OnInit, Output, EventEmitter, ViewChildren, ViewChild} from '@angular/core';
import { DataService } from '../services/data.service';
import { NavigationService } from '../services/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Islide } from '../interfaces/Islide';
import { MapData } from '../interfaces/map-data';
import { Zone, Region, Icon, Slide, Poster, Cover, Annotation} from '../classes/zone';
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
    
  constructor(protected _activatedRoute: ActivatedRoute, protected _dataService: DataService, private router : Router, private navigation : NavigationService) { 
  this.zones=[];
      this.zoneCategories=[];

  }


  ngOnInit() {
      
      let ref= this;
      this._activatedRoute.paramMap.subscribe(function(p){
        let source=p.get('source');
      let canvases=p.get('canvases').split(",");
      let annotation=p.get('annotation');
          
    ref.navigation.previousRoutes.unshift([source,canvases.join(","), annotation]);
       
          if(!annotation){
              annotation=null;
          }
          
       ref.initialize(canvases, source, annotation);
      });
      
    
      
       // let id=<string>this._activatedRoute.snapshot.params['zid'];
  
      
      
  }
    
    
initialize(canvases, source, annotation){
    this.zones = [];
    this.zoneLoader = [];
    this.zoneCategories = [];
    this.cis=[];
    
        if(canvases.length>1){
this.mode="preview";
      }else{
          this.mode="interaction";
      }
      
      let ref=this;
    
      
      for(let i=0;i<canvases.length;i++){
          this.cis.push(i);
              this._dataService.fetchJson(source+"_"+canvases[i]).subscribe(function(data : MapData){
      
       let imgData=data["imgData"];
       // ref.canvases._results[i].imgData=imgData;
   
        
              
        if(annotation){
            data.slides=[data.slides[annotation]];
        }
        
      let zoneLoader=ref.processIcons(data);

 // ref.displayZones();
       //  ref.canvases._results[i].zones=ref.zoneLoader.zones;         
       // ref.canvases._results[i].zoneCategories=ref.zoneLoader.zoneCategories;  
                  
                  
                  
      let catList=ref.zones.map((zone)=>zone.category);
     // this.cats=new Set(catList);
        
    ref.zones[i]=zoneLoader.zones;
     ref.zoneCategories[i]=zoneLoader.zoneCategories;
      ref.imgData[i]=imgData;
      
        if(annotation){
           ref.displayClicked(ref.zones[i][annotation]);
            ref.infoWindow.open();
        }

    });
          
 
      }
}    
    
    
displayClicked(e){


   // this.infoWindow.open();
    this.name=e.title;
    this.description=e.description;
    this.imgUrl=e.image;


            this.youTubeId=e.music;
            this.songUrl="";
     


}
    
       processIcons(slideSet){

        let ref=this;
        var result = [];
         let categories = {};
           
        slideSet.slides.forEach(function(slide){

            let newZone;
            slide.component = ref;
            
            if(ref.mode!="preview"){
                   switch(slide.cat){
           
                case "translation" : newZone= new Annotation(slide, slideSet.imgData); break;
                    case "Script" : newZone= new Annotation(slide, slideSet.imgData); break;
                    case "Content" : newZone= new Annotation(slide, slideSet.imgData); break;
                     case "Author" : newZone= new Annotation(slide, slideSet.imgData); break;
                     case "Text" : newZone= new Annotation(slide, slideSet.imgData); break;
                     case "Material" : newZone= new Annotation(slide, slideSet.imgData); break;
                    case "Region" : newZone= new Region(slide, slideSet.imgData); break;
                 case "Discovery" : newZone= new Annotation(slide, slideSet.imgData); break;
                    case "City" : newZone= new Region(slide, slideSet.imgData); break;
            }
            }else{
                newZone= new Region(slide, slideSet.imgData);
            }
                
            
         
            
            if(!categories[slide.cat]){
                let selectedVal: boolean;
               
                
                selectedVal=true;
                
               categories[slide.cat] = {name: slide.cat, zoneCount:0, selected:selectedVal}; 
            }
            categories[slide.cat].zoneCount++;
            
            result.push(newZone);

        });
           

           let zoneCategories = [];
           
           for(let c in categories){
               zoneCategories.push(categories[c]);
           }
           
        return {zones :result, zoneCategories : zoneCategories};
    }
    
    displayZones(){
        this.zones = this.zoneLoader;

    }
    
    moveInTime(e){
      //  this.canvases._results.forEach((c)=>c.moveInTime(e.srcElement.value));
        let ref = this;
        

        
        if(e==1){
          this.canvases._results[1].wrapper.nativeElement.addEventListener("transitionend", function(){ref.navigate(['interaction/aquila_v/'+e]),3000});
            this.canvases._results[1].wrapper.nativeElement.style.transform="rotate(180deg)";  
        }else{
            
            ref.navigate(['interaction/aquila_v/'+e]);
            
        }
        
    }
    
  
    
    navigate(r){
        this.router.navigate(r);
    }
    
    getTop(ci){
        return ci*50+"%";
    }
    
    getHeight(ci){
        return (100/(ci+1))+"%";
    }
    
    onSwipe(e){
        alert("swipe");
    }

}
