import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as _ from 'lodash';


import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  // courseList: AngularFireList<any>;

	// [CourseName] [nvarchar](max) NOT NULL,
	// [Description] [nvarchar](max) NOT NULL,
	// [IntervalInDays] [int] NOT NULL,
	// [StartingDate] [datetime2](7) NOT NULL,
	// [EnrollmentKey] [nvarchar](max) NOT NULL,
	// [TopicId] [int] NULL,
  // [TrackId] [int] NULL,
  

  form: FormGroup = new FormGroup({
  
    CourseName: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    IntervalInDays: new FormControl('', Validators.required),
    // StartingDate: new FormControl(''),
    EnrollmentKey: new FormControl('', Validators.required),


  });

  initializeFormGroup() {
    this.form.setValue({
    
      CourseName: '',
      Description: '',
      IntervalInDays: '',
      // StartingDate: Date.now, ////create in db 
      EnrollmentKey: '',
   
     
    });
  }


   getCourses() {
  //   this.courseList = this.firebase.list('courses');
  return this.http.get<any[]>(`https://localhost:44374/api/Course/GetCourses`);
  
  }

  insertCourse(course) {
    // this.courseList.push({
    //   CourseName: course.CourseName,
    //   email: course.email,
    //   mobile: course.mobile,
    //   city: course.city,
    //   gender: course.gender,
    //   department: course.department,
    //    // tslint:disable-next-line: triple-equals
    //    hireDate: course.hireDate == '' ? '' : this.datePipe.transform(course.hireDate, 'yyyy-MM-dd'),
    //   isPermanent: course.isPermanent
    // });
console.log(course)

   return this.http.post<any>("https://localhost:44374/api/Course/Add",course);
   
  }

  updateCourse(course) {
    // this.courseList.update(course.$key,
    //   {
    //     CourseName: course.CourseName,
    //     email: course.email,
    //     mobile: course.mobile,
    //     city: course.city,
    //     gender: course.gender,
    //     department: course.department,
    //      // tslint:disable-next-line: triple-equals
    //      hireDate: course.hireDate == '' ? '' : this.datePipe.transform(course.hireDate, 'yyyy-MM-dd'),
    //     isPermanent: course.isPermanent
    //   });
  }

  deleteCourse($key: string) {
    // this.courseList.remove($key);
  }

  populateForm(course) {
    // this.form.setValue(_.omit(course, 'departmentName'));
  }
}
