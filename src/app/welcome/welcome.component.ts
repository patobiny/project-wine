import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  predictForm(){
    this.router.navigate(['/wineform']); 
  }
  recipe(){
    this.router.navigate(['/cocktail']); 
  }
  myWine(){
    this.router.navigate(['/wines']); 
  }
  gotoreko(){
    this.router.navigate(['/rekognition']); 
  }
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}

