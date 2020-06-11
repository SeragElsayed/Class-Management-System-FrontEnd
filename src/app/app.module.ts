import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
// import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
// import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
// import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import {CourseListComponent} from './course-list/course-list.component';


import {AddMaterialComponent} from './add-material/add-material.component'
import {EnrollKeyComponent} from './enroll-key/enroll-key.component'
// import { FontAwesomeModule } from '@fontawesome/angular-fontawesome'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhyAcadWorksComponent } from './why-acad-works/why-acad-works.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';
import { FooterComponent } from './footer/footer.component';
// import { AddCourseComponent } from './add-course/add-course.component';
import { CourseCardComponent } from './course-card/course-card.component';

import { AboutOurUnivComponent } from './about-our-univ/about-our-univ.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
// import {} from '';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {MangeStudentComponent} from './mange-student/mange-student.component';
import {MatrialBoxComponent} from './matrial-box/matrial-box.component';
import {StudentDetailsComponent} from './student-details/student-details.component';
import {SubmitTaskComponent} from './submit-task/submit-task.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { register } from 'ts-node';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { RegisterComponent } from './register/register.component'
import { from } from 'rxjs';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CompCourseComponent } from './comp-course/comp-course.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
//importing the services
import {AuthenticationService} from '../Services/Authentication/authentication.service';
import {TokeninterceptService} from '../Services/TokenInterceptor/tokenintercept.service';

//for the require keyword
declare var require: any;
@NgModule({
  declarations: [
    AddMaterialComponent,
    EnrollKeyComponent,
    SubmitTaskComponent,
    StudentDetailsComponent,
    MatrialBoxComponent,
    MangeStudentComponent,
    EditProfileComponent,
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    WhyAcadWorksComponent,
    PopularCoursesComponent,
    FooterComponent,
    CourseListComponent,

    CourseCardComponent,
    CourseListComponent,
    AboutOurUnivComponent,
    CarouselComponent,
    AboutComponent,
    LoginComponent,

    ProfileComponent,
    ContactComponent,
    ExploreCoursesComponent,
    RegisterComponent,
    AddCoursesComponent,
    CourseComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgxFileDropModule,
    ReactiveFormsModule,
    // ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'course/add', component: AddCoursesComponent },
      { path: 'course/student', component: MangeStudentComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'course', component: CourseComponent },
      
      { path: 'student/details', component: StudentDetailsComponent},
      { path: 'explore/courses', component: ExploreCoursesComponent },
      { path: 'course/details', component: CourseDetailsComponent }
  
    ]),
    NgbModule
  ],
  providers: [
    AuthenticationService,
{
  provide:HTTP_INTERCEPTORS,
  useClass:TokeninterceptService,
  multi:true
}
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
