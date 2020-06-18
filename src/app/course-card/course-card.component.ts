import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../Services/Course/course.service';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  
  ngOnInit(): void {

    //console.log("in oninit",this.Course.courseId);
        this.Course.courseId
    
      }

  @Input() Course;
  constructor(private router:Router,private coursesService:CourseService) { }



  btnClick () {
    this.router.navigateByUrl('/course/details');

  };

  DeleteCourseCard () {
    debugger;
  console.log("course id",this.Course.courseId)
  this.coursesService.deleteCourse(this.Course.courseId).subscribe(
    res=>{
      console.log(res,"response from delete course")
    },
    err=>{
      console.log(err)
    }
  );
  this.router.navigateByUrl('course');
 
  }

}
