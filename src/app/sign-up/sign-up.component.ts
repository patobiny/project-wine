import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email:string;
  password:string;
  errorMessage:string;
  isError:boolean=false;
   

  onSubmit(){
    this.auth.SignUp(this.email,this.password).then(
      res =>{
       console.log('Succesful sign-up');
      // this.router.navigate(['/books']);
     }).catch(
       err=>{
         console.log(err);
         this.isError=true;
         this.errorMessage=err.message;
       }
     )
    
  }
  
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

}
