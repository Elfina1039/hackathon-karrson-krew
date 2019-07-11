import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Translation } from '../interfaces/translation';

@Component({
  selector: 'app-magic-glass',
  templateUrl: './magic-glass.component.html',
  styleUrls: ['./magic-glass.component.css']
})
export class MagicGlassComponent implements OnInit {
  msText : any = {};
@Input("fontSize") fontSize : any;
@Input("infoWindow") infoWindow : any;
    @ViewChild("container") container : any;
    width : number = 0;
    mode : "none";
  constructor(private data : DataService) { }

  ngOnInit() {
  }

    
placeFrame(source, zoom){
    console.log(this.msText);
    this.container.nativeElement.style["background-image"]="url('"+source.msText.bgImage+"')";
     this.container.nativeElement.style["background-position"]=-source.imgCoords.topLeft.x+"px "+-source.imgCoords.topLeft.y+"px";
    this.container.nativeElement.style.display="block";
    this.container.nativeElement.style.width=source.imgCoords.width*zoom+"px";
     this.container.nativeElement.style.height=(source.imgCoords.height)*zoom+"px";
    
    this.msText=source.msText;
    
     this.container.nativeElement.style.left=source.imgCoords.topLeft.x*zoom+"px";
     this.container.nativeElement.style.top=source.imgCoords.topLeft.y*zoom+"px";
    
    console.log(this.container.nativeElement.style);
}    
    
    hideFrame(){
        console.log("hiding magic glass");
        this.container.nativeElement.style.display="none";
    }
    
    translate(w){
        console.log(w);
        this.data.askOxford(w.transcript,"el").subscribe((resp:Translation)=>w.translation=resp.results[0].lexicalEntries[0].entries[0].senses[0].translations[0].text);
    }
    
    layers(){
        this.container.nativeElement.style["background-image"]="url('"+this.msText.bgImage2+"')";
    }
    
    clear(){
        this.container.nativeElement.style["background-image"]="url('"+this.msText.bgImage+"')";
        this.mode="none";
    }
    
    showInfo(){
        this.infoWindow.open();
    }
    
}
