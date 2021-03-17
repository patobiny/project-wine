import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string; 
  errorMessage:string;
  isError:boolean=false;

  onSubmit(){
    this.auth.login(this.email,this.password).then(
      res =>{
        console.log(res);
        this.router.navigate(['/welcome']);
      }
    ).catch(
      err=>{
        console.log(err);
        this.isError=true;
        this.errorMessage=err.message;
      }
    );
  }
  
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

}
