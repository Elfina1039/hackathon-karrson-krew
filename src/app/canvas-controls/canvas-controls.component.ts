import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ZoneCategory } from '../interfaces/zone-category';
import {  Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-canvas-controls',
  templateUrl: './canvas-controls.component.html',
  styleUrls: ['./canvas-controls.component.css']
})
export class CanvasControlsComponent implements OnInit {

    @Output() changeZoom = new EventEmitter<number>(); 
    @Output() changeSelection = new EventEmitter<any>(); 
    @Output() changeOpacity = new EventEmitter<any>(); 
     @Input("zoom") zoom : number;
     @Input("fitZoom") fitZoom : number;
     @Input("opacityRatio") opacityRatio : number;
     @Input("zoneCategories") zoneCategories : ZoneCategory[];
    
    catColors : any = {Content: "yellow", Script : "red"};
    
  constructor(private router : Router, private navigation : NavigationService) { }

  ngOnInit() {
  }
    
    zoomChng(value){
        this.changeZoom.emit(value);
        
    }
    
    selectionChng(){
        
        let selected = {};
        this.zoneCategories.forEach((zc)=>selected[zc.name] = zc.selected);
        
        this.changeSelection.emit(selected);
        
    }
    
     opacityChng(e){
        console.log(e.srcElement.value);
          this.changeOpacity.emit(e.srcElement.value);
         
    }
    
    navigate(set, part){
        console.log("going to map");
        this.router.navigate(['interaction/'+set+'/'+part])
    }
    
    goBack(i){
        this.navigation.goBack(i);
    }
    
    

}
