import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';

import { ImageComponent } from './image/image.component';
import { InteractionComponent } from './interaction/interaction.component';
//import { ControlsComponent } from './controls/controls.component';
import { AudioComponent } from './audio/audio.component';
import { CanvasControlsComponent } from './canvas-controls/canvas-controls.component';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import {MatSliderModule} from '@angular/material/slider';
import { MagicGlassComponent } from './magic-glass/magic-glass.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { QrReaderComponent } from './qr-reader/qr-reader.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,

    ImageComponent,
    InteractionComponent,
   // ControlsComponent,
    AudioComponent,
   CanvasControlsComponent,
   MagicGlassComponent,

   QrReaderComponent
   
  ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      NgxYoutubePlayerModule.forRoot(),
      MatSliderModule,
         MatButtonModule,
      MatIconModule,
       ZXingScannerModule,
      MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
