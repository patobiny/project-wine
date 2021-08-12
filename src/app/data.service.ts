import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fileUpload(file: FormData) {
    return this.http.post('http://ec2-52-90-72-87.compute-1.amazonaws.com/upload_image', file);
}

analyze(filename){
  return this.http.get('http://ec2-52-90-72-87.compute-1.amazonaws.com/analyze/yakov-my-upload-bucket-01/'+filename)
}
  constructor(private http:HttpClient) { }
}

