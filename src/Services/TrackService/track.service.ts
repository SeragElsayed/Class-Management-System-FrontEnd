// import { BadInput } from './../common/bad-input';
// import { NotFoundError } from './../common/not-found-error';
// import { AppError } from './../common/app-error';

import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import {TrackPaths} from '../../Common/UrlConstants'
import { Track } from 'src/Models/TrackModel';
import {  throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable()
export class TrackService {
   
  constructor( private http: HttpClient) {
   
   }
   ngOnInit(){

   }
   getAll() {
    return this.http.get<Track[]>(`${TrackPaths.GetAllTracks}`)
    .pipe( catchError( this.handleError ) )
  }
  getByTrackId(TrackId:number) {
    return this.http.get<Track[]>(`${TrackPaths.GetTrackByTrackId}/${TrackId}`)
    .pipe( catchError( this.handleError ) )
  }

  getTracksByBranchId(BranchId:number) {
    return this.http.get<Track[]>(`${TrackPaths.GetTrackByBranchId}/${BranchId}`)
    .pipe( catchError( this.handleError ) )
  }

  AddTrack(NewTrack:Track) {
    return this.http.post<Track>(`${TrackPaths.AddTrack}`,NewTrack)
    .pipe( catchError( this.handleError ) )
  }
  EditTrack(EditedTrack:Track) {
    return this.http.put<Track>(`${TrackPaths.GetAllTracks}/${EditedTrack.TrackId}`,EditedTrack)
    .pipe( catchError( this.handleError ) )
  }
  DeleteByTrackId(TrackId:number) {
    return this.http.get<[]>(`${TrackPaths.GetAllTracks}/${TrackId}`)
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
