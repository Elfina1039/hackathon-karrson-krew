import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as dragon from 'openseadragon';

@Component({
  selector: 'app-manuscript',
  templateUrl: './manuscript.component.html',
  styleUrls: ['./manuscript.component.css']
})
export class ManuscriptComponent implements OnInit {
    dragon : any;

    @ViewChild("canvas") canvas : any;

  constructor() { 

  }

  ngOnInit() {
 
      
  }
    
    ngAfterViewInit(){
       
              
this.dragon = dragon({
      element:this.canvas.nativeElement,
    preserveViewport: true,
    visibilityRatio:    1,
    minZoomLevel:       1,
    defaultZoomLevel:   2,
    sequenceMode:       true,
    tileSources:   [{
      "@context": "http://iiif.io/api/image/2/context.json",
      "@id": "https://libimages1.princeton.edu/loris/pudl0001%2F4609321%2Fs42%2F00000001.jp2",
      "height": 7200,
      "width": 5233,
      "profile": [ "http://iiif.io/api/image/2/level2.json" ],
      "protocol": "http://iiif.io/api/image",
      "tiles": [{
        "scaleFactors": [ 1, 2, 4, 8, 16, 32 ],
        "width": 1024
      }]
    },
    
    ]

});
        
        console.log(this.dragon);
     
    }

}
