import { Component, AfterViewInit, OnChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements AfterViewInit {
     @ViewChild("music") music;
     @ViewChild("song") song;
     @ViewChild("voice") voice;
     @ViewChild("comment") comment;
   youTube: any;
   @Input("youTubeId") youTubeId : string;
    
    @Input("songUrl") songUrl: string;
    @Input("playing") playing: boolean;
     @Input("mode") mode: string;
     @Input("commentUrl") commentUrl: string;
    
     @Output() canPlay = new EventEmitter<string>();


  constructor() {}


  ngAfterViewInit() {
      let ref=this;
      
      
    this.music.nativeElement.oncanplay = function() {
       console.log("player ready");
    ref.canPlay.emit("ready");
};
      
         if(this.songUrl){
          this.song.nativeElement.src=this.songUrl;
                console.log("loading song");
             this.music.nativeElement.load();
          if(this.playing){
          
          this.music.nativeElement.play();
      }
      }
      

  
      
   
  }
    
     ngOnChanges() {
         
         console.log("audio changes");
       
         if(this.youTubeId){
                  
         console.log("receiving youtube id: "+this.youTubeId);
            this.youTube.loadVideoById(this.youTubeId);
             this.music.nativeElement.pause();
          // this.youTube.playVideo();
              
         }
           
         
       //   console.log("PLAY: " + this.mode);
         
      if(this.songUrl && (this.playing || this.mode=="interaction")){
          console.log("loading song");
          this.music.nativeElement.load();
          this.youTube.stopVideo();
          this.youTubeId="";
          this.youTube.clearVideo();
         this.music.nativeElement.play();
      }
  }
    
    saveYT(yt){
        console.log("saving YT");
        this.youTube=yt;
      //  this.youTube.playVideo();
      
    }
    
     changeYT(e){
         console.log("YT message");
       //console.log(this.youTube);
         //this.youTube.playVideo();
          
    }


}
