import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SELECT_PANEL_VIEWPORT_PADDING } from '@angular/material/select';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

URL="http://ec2-52-90-72-87.compute-1.amazonaws.com";

  fileUpload(file: FormData) {
    return this.http.post('http://ec2-52-90-72-87.compute-1.amazonaws.com/upload_image', file);
}

analyze(filename){
  return this.http.get('http://ec2-52-90-72-87.compute-1.amazonaws.com/analyze/yakov-my-upload-bucket-01/'+filename)
}

saveD(imgName, name,confidence):Observable<any>{
  console.log("service save");
  return this.http.get(`${this.URL}/set_object?objectId=${imgName}&name=${name}&constanse=${confidence}`);
};


  constructor(private http:HttpClient) { }
}

