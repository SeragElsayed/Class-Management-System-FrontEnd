import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {ProjectMaterialPaths} from '../Common/UrlConstants'
import { ProjectMaterial } from 'src/Models/ProjectMaterialModel';

@Injectable({
  providedIn: 'root'
})
export class ProjectMaterialService {

  constructor(private http: HttpClient) { }
  
  UploadMaterialByProjectId(ProjectId:number,files) {
   



    return this.http.post<ProjectMaterial[]>
    (`https://localhost:44374/api/ProjectMaterial/api/ProjectMaterial/Upload/1`,
    files)
    // return this.http.post<ProjectMaterial[]>(`${ProjectMaterialPaths.UploadByProjectById}/${ProjectId}`,Files)
    .pipe( catchError( this.handleError ) )
  }

  DownloadMaterialById(MaterialId:number) {
    return this.http.get<any>(`${ProjectMaterialPaths.UploadByProjectById}/${MaterialId}`)
    .pipe( catchError( this.handleError ) )
  }

  DeleteByName(MaterialName:string) {
    return this.http.delete<any>(`${ProjectMaterialPaths.UploadByProjectById}/${MaterialName}`)
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
