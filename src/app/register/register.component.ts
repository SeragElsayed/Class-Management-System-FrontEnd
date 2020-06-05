import { Component, OnInit, AfterViewInit  } from '@angular/core';
import {jquery2} from "../../vendor/main/main"
import * as $ from '../../../node_modules/jquery/dist/jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  imgsrc:any="../../assets/images/avatar-01.jpg";
  constructor() { }
  url:any;
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
  ngOnInit(): void {
  }

  changed(event) {
    this.  RecurFadeIn();
    this. readURL(this);
};

clicked(event) {
   this. RecurFadeIn();
}; 
 readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var filename = $("#inputGroupFile01").val();
        filename = filename.substring(filename.lastIndexOf('\\') + 1);
        reader.onload = function (e) {
            debugger;
            $('#preview').attr('src', e.target.result);
            $('#preview').hide();
            $('#preview').fadeIn(500);
            $('.custom-file-label').text(filename);
        }
        reader.readAsDataURL(input.files[0]);
    }
    $(".alert").removeClass("loading").hide();
}
 RecurFadeIn() {
    console.log('ran');
   this.FadeInAlert("Wait for it...");
}
 FadeInAlert(text) {
    $(".alert").show();
    $(".alert").text(text).addClass("loading");
}
}
