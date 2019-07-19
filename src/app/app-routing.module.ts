import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InteractionComponent } from './interaction/interaction.component';
import { QrReaderComponent} from './qr-reader/qr-reader.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const routes: Routes = [
     {path:'interaction/:source/:canvases/:annotation', component: InteractionComponent},
    {path:'single/:source/:canvases', component: InteractionComponent},
     {path:'interaction/:source/:canvases', component: InteractionComponent},
    {path:'interaction/:map', component: InteractionComponent},
     {path:'home', component: QrReaderComponent}, 
    {path:'', redirectTo: "/interaction/aquila_v/0,2", pathMatch:"full"} 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
    providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
