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
    let fileName
    
    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'multipart/form-data');

    files.forEach(element => {
      for(let key in element){
          if (key == 'name'){
            fileName = element[key]
            console.log(fileName)
          }
          console.log(key)

        fd.append(key, files[key])
        }
    
    });
    console.log(files ,"from service")
  
    // for(let key in files) => {
    //   if (key == 'fileName'){
    //     fileName = extraData[key]
    //   }
    // formData.append(key, extraData[key])
    // });

    return this.http.post<ProjectMaterial[]>(`https://localhost:44374/api/ProjectMaterial/Upload/${ProjectId}`,files,{headers})
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
