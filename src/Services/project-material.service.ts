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
    let h=new HttpHeaders().set('Content-Type', 'multipart/form-data')
    let h1=new HttpHeaders().set('Content-Type', 'application/octet-stream')
    let h2=new HttpHeaders({
      'Content-Type': 'application/json'
    })
    let hh=new HttpHeaders()
     hh.append('Content-Type', 'multipart/form-data');
    // hh.append('Access-Control-Allow-Origin', 'https://localhost:44374/')

    // hh.append('Connection', 'keep-alive');
    //hh.append('Accept', 'application/json');
    const formData: FormData = new FormData();
      formData.append(files[0].name, files[0], files[0].name);

    // for(let i=0 ; i < files.length ; i++)
    //   formData.append(files[i].name, files[i], files[i].name);

    console.log("from srvice material ",files,formData)

    return this.http.post<ProjectMaterial[]>
    (`https://localhost:44374/api/ProjectMaterial/api/ProjectMaterial/Upload/1`,
    formData
    ,
    {headers:hh} 
    )
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
