import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-rekognition',
  templateUrl: './rekognition.component.html',
  styleUrls: ['./rekognition.component.css']
})
export class RekognitionComponent implements OnInit {

  fileObj: File;
  fileUrl: string;
  imgName:string;
  errorMsg: boolean;
  good=false;
  title = 's3-file-uploader-app';
  result;
  analyzeV:boolean= false;
  thisJson;
  constructor(private fileUploadService: DataService) {
    this.errorMsg = false;
  }

  onFilePicked(event: Event): void {

    this.errorMsg = false;
    console.log(event);
    const FILE = (event.target as HTMLInputElement).files[0];
    this.fileObj = FILE;
    console.log(this.fileObj);
  }
  
  analyze(){
    this.fileUploadService.analyze(this.imgName).subscribe(res =>{
      console.log(res);
      this.analyzeV=true;
      this.thisJson=res;
    })
  };
  
  onFileUpload() {

    if (!this.fileObj) {
      this.errorMsg = true;
      return
    }
    
    const fileForm = new FormData();
    fileForm.append('file', this.fileObj);
    this.fileUploadService.fileUpload(fileForm).subscribe(res => {
      console.log(res);
      this.good=true;
      this.imgName = res["imgName"];
      console.log(this.imgName);
    });
  }

  ngOnInit(): void {
  }

}
