import { Component, OnChanges, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnChanges {
    
    @Input('imgUrl') imgUrl : string;
    @Input('youTubeId') youTubeId : string;
    @Input('name') name : string;
    @Input('description') description : string;
    @Input('mapTitle') mapTitle : string;
    @ViewChild("container") container : any;
    opened : boolean = false;

  constructor() { }

  ngOnChanges() {
     
  }

    close(){
        console.log("closing infowindow");
        this.container.nativeElement.style.height="0px";
        this.opened=false;
    }
    
      open(){
        console.log("opening infowindow");
        this.container.nativeElement.style.height="70%";
          this.opened=true;
    }
    
}
