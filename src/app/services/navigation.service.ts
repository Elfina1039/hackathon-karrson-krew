import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
    previousRoutes : any[] = [];
  constructor(private router : Router) { 
  this.previousRoutes = [];
  }
    
    
    goBack(i){
        console.log(this.previousRoutes);
        let path = "interaction/"+this.previousRoutes[i].join("/");
        this.navigate([path]);
    }
    
    navigate(r){
        this.router.navigate(r);
    }   
    
    
}
