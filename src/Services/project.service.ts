import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ProjectPaths} from '../Common/UrlConstants'
import { Project } from 'src/Models/ProjectModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  // const ProjectActions = {
 
  //   AddProjectByTrackId: 'Project/Add/Track',
  //   UpdateProject: 'Project/Edit',
  //   DeleteProjectById: 'Project/Delete',
   
  // };
  
  getProjectProjectId(ProjectId:number) {
    // return this.http.get<Project>(`${ProjectPaths.DeleteProjectById}/${ProjectId}`)
    return this.http.get<Project>(`${`http://localhost:3000/projects`}/${ProjectId}`)
    .pipe( catchError( this.handleError ) )
  }
  GetProjectByTrackId(TrackId:number) {
    return this.http.get<Project[]>(`${ProjectPaths.GetProjectByTrackId}/${TrackId}`)
    .pipe( catchError( this.handleError ) )
  }
  GetProjectByStudentId() {
    // let UserId:string="fsffsfs"//import from local storage
    // if (UserId=="")
      //throwError();

    // return this.http.get<Project[]>(`${ProjectPaths.GetProjectByStudentId}`)
    return this.http.get<Project[]>(`http://localhost:3000/projects`)
    .pipe( catchError( this.handleError ) )
  }

  AddProjectByTrackId(Project:Project) {
    return this.http.post<Project>(`${ProjectPaths.AddProjectByTrackId}`,Project)
    .pipe( catchError( this.handleError ) )
  }
  UpdateProject(Project:Project) {
    return this.http.put<Project>(`${ProjectPaths.UpdateProject}`,Project)
    .pipe( catchError( this.handleError ) )
  }
  DeleteProject(ProjectId:number) {
    return this.http.delete<Project>(`${ProjectPaths.UpdateProject}/${ProjectId}`)
    .pipe( catchError( this.handleError ) )
  }
   private handleError(errorResponse: HttpErrorResponse) {
     if (errorResponse.error instanceof ErrorEvent)
        console.log(errorResponse.error.message);
      else
        console.log(errorResponse.error);
      
        return throwError("dfdfd");
  }
}
