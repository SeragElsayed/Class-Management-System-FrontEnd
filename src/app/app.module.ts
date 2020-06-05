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
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';





// import { FontAwesomeModule } from '@fontawesome/angular-fontawesome'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhyAcadWorksComponent } from './why-acad-works/why-acad-works.component';
import { PopularCoursesComponent } from './popular-courses/popular-courses.component';
import { FooterComponent } from './footer/footer.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AboutOurUnivComponent } from './about-our-univ/about-our-univ.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { register } from 'ts-node';
import { ExploreCoursesComponent } from './explore-courses/explore-courses.component';
import { RegisterComponent } from './register/register.component'
import { from } from 'rxjs';
import { AddCoursesComponent } from './add-courses/add-courses.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    WhyAcadWorksComponent,
    PopularCoursesComponent,
    FooterComponent,
    AddCourseComponent,
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
    AddCoursesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'explore/courses', component: ExploreCoursesComponent },

      { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
    ]),
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
