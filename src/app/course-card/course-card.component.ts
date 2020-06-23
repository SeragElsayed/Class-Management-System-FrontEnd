import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../Services/Course/course.service';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  UserRole

  ngOnInit(): void {
    
    this.UserRole=localStorage.getItem("role")
    console.log(this.UserRole,"user role")
    //console.log("in oninit",this.Course.courseId);
    this.Course.courseId

  }
  @Output() onDeleteCourse: EventEmitter<any> = new EventEmitter<any>();
  public DeleteCourse(): void {
    this.onDeleteCourse.emit(this.Course);
}
 
  @Input() Course;
  constructor(private router: Router, private coursesService: CourseService) { }



  OnDetails() {
    this.router.navigate([`course/details/${this.Course['courseId']}`]);

  };

 

  DeleteCourseCard() {
    debugger;
    console.log("course id", this.Course.courseId)
    this.coursesService.deleteCourse(this.Course.courseId).subscribe(
      res => {
        console.log(res, "response from delete course")
        this.DeleteCourse()
      //  this.router.navigate([''])
      
      },
      err => {
        console.log(err)
      }
    );

  }

}
