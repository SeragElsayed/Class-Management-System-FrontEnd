

import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Injectable} from '@angular/core';
import {BranchPaths} from '../../Common/UrlConstants'
import { Branch } from 'src/Models/BranchModel';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BranchService {
  constructor(private http: HttpClient) {
   
   }

  getAll() {
    return this.http.get<Branch[]>(BranchPaths.GetAllBranches)//http://localhots:8080/api/branches
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
