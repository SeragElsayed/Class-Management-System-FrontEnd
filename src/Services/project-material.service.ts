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
    const fd=new FormData();
    for(let i =0; i < files.length; i++){
      fd.append("uploads[]", files[0], files[0]['name']);
    }
    return this.http.post<ProjectMaterial[]>(`https://localhost:44374/api/ProjectMaterial/Upload/${ProjectId}`,fd)
    // return this.http.post<ProjectMaterial[]>(`${ProjectMaterialPaths.UploadByProjectById}/${ProjectId}`,Files)
    .pipe( catchError( this.handleError ) )
  }

  DownloadMaterialById(MaterialId:number) {
    // return this.http.get<any>(`${ProjectMaterialPaths.UploadByProjectById}/${MaterialId}`)
    return this.http.get<any>(`https://localhost:44374//api/ProjectMaterial/${MaterialId}`)
    .pipe( catchError( this.handleError ) )
  }

  DeleteByName(MaterialName:string) {
    // return this.http.delete<any>(`${ProjectMaterialPaths.UploadByProjectById}/${MaterialName}`)
    return this.http.delete<any>(`https://localhost:44374//api/ProjectMaterial/${MaterialName}`)
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
