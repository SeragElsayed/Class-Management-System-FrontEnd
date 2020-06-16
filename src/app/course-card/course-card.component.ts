import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../Services/Course/course.service';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  constructor(private router:Router,private coursesService:CourseService) { }
  @Input() Course;


  btnClick= function () {
    this.router.navigateByUrl('/course/details');

  };

  DeleteCourseCard = function () {
  console.log("course id",this.Course.courseId)
  this.coursesService.DeleteCourse(this.Course.courseId);
  this.router.navigateByUrl('course');
    
  }



  ngOnInit(): void {

console.log("in oninit",this.Course);


  }


  
 




}
