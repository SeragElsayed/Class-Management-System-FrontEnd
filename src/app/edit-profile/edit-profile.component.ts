import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  imgsrc:any="../../assets/images/avatar-01.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.imgsrc= (<FileReader>event.target).result;
        console.log(this.imgsrc)
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
