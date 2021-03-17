import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class PredictService {
  private url =  "https://m166ylhr6e.execute-api.us-east-1.amazonaws.com/beta";
  
  text;
  

  predictQuality(color:string, alcohol:number, citricAcid:number, volatile:number,chlorides:number,density:number):Observable<any>{
    let json = {
          "type":color,
          "volatile acidity": volatile,
          "citric acid": citricAcid,
          "chlorides":chlorides,
          "density": density,
          "alcohol": alcohol
        }
    let body  = JSON.stringify(json);
    console.log(body);
    console.log("in predict");
    return this.http.post<any>(this.url,body).pipe(
      map(res => {
        console.log(res);
        return res;       
      })
    );      
  }

  constructor(private http:HttpClient, public router:Router) { }
  
}
