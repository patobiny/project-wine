import { PredictService } from '../predict.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { WineService } from '../wines.service';
import {FormControl} from '@angular/forms';





@Component({
  selector: 'wineform',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.css']
})
export class WineFormComponent implements OnInit {

  
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  color;
  alcohol;
  volatile;
  citricAcid;
  chlorides;
  density;
  userId;
  result;
  wineColor:boolean = false;
  savePredict:boolean = false;
  hasNotError:boolean=true;

 

animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  colors = [
    {name: 'Red' ,sound:'Good Choice!'},
    {name: 'White',sound:'Good Choice!'},
    
  ];



  validateType(color:number){
    if(color!=0 && color!=1 ){
      this.hasNotError=false;
      console.log(this.hasNotError);
    }
    else{
      this.hasNotError=true;
    }
  }

  predict(){
    if(this.color['name']=="Red"){
      this.color="1";
    }else{
      this.color="0";
    }
    console.log(this.color);
    this.savePredict = true;
    this.predictService.predictQuality(this.color, this.alcohol, this.volatile, this.citricAcid, this.chlorides, this.density).subscribe(
          res => {
            console.log(res);
              this.result = res;
            })
        
  }

  save(){
    this.winesService.addCheck(this.userId,this.color, this.alcohol, this.volatile, this.citricAcid, this.chlorides, this.density, this.result);
    this.router.navigate(['/wines']);
  }
  

  constructor(private _formBuilder: FormBuilder, private authService:AuthService, private winesService:WineService, private router:Router, private predictService:PredictService) {}

  ngOnInit() {
    this.result= null;
    this.authService.getUser().subscribe(
      user => {
          this.userId = user.uid;
          });
          

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}