import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import 'rxjs/Rx';
// import {observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DownloadTxtFileService {

  constructor(private http:HttpClient) { }
  downloadfile(url:string,name:string)
  {
console.log("in the download services")
console.log(name)
return this.http.get<any>(`https://localhost:44374/api/material/getfile/${name}`)
/*
,{
  responseType : 'blob',
  headers:new HttpHeaders().append('Contect-Type','application/text')
*/
  }
}
