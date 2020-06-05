import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {
  today: number = Date.now();

  imgsrc:any="assets/images/book.jpg";
  constructor() { 
  
  }
  
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
  /**
   *
   */
  
}
/**
 *
 */

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
