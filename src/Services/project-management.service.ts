import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ProjectManagPaths} from '../Common/UrlConstants'


@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {

  constructor(private http: HttpClient) { }

  
  getProjectCollaboratorByProjectId(ProjectId:number) {
    return this.http.get<any[]>(ProjectManagPaths.GetCollabByProjId)
    .pipe( catchError( this.handleError ) )
  }

  PostAddCollaboratorByEmail(ProjectId:number,Email:string) {
    return this.http.get<any>(`${ProjectManagPaths}/${ProjectId}/${Email}`)
    .pipe( catchError( this.handleError ) )
  }

  MakeCollaboratorOwnerByUserId(CollabId:number) {
    return this.http.get(`${ProjectManagPaths.MakeOwnerByUserId}/${CollabId}`)
    .pipe( catchError( this.handleError ) )
  }

  DeleteCollaboratorByUserId(UserId:string){
    return this.http.get(`${ProjectManagPaths.DeleteCollabByUserId}/${UserId}`)
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
