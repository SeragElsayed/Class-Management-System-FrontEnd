import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Project } from 'src/Models/ProjectModel';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExploreProjectService {

  constructor(private http:HttpClient) { }
url='https://localhost:44374/api/selectProjects'
  getAllProjects() {
    return this.http.get<Project>(this.url)
    .pipe( catchError( this.handleError ) )
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent)
       console.log(errorResponse.error.message);
     else
       console.log(errorResponse.error);
     
       return throwError("error");
 }

}
