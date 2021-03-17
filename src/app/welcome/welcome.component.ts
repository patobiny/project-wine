import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}

