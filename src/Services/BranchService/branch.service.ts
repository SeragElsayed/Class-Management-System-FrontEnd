

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


  getByBranchId(BranchId:number) {
    return this.http.get<Branch[]>(`${BranchPaths.GetBranchById}/${BranchId}`)
    .pipe( catchError( this.handleError ) )
  }

 

  AddBranch(NewBranch:Branch) {
    return this.http.post<Branch>(`${BranchPaths.AddBranch}`,NewBranch)
    .pipe( catchError( this.handleError ) )
  }
  EditBranch(EditedBranch:Branch) {
    return this.http.put<Branch>(`${BranchPaths.GetAllBranches}/${EditedBranch.BranchId}`,EditedBranch)
    .pipe( catchError( this.handleError ) )
  }
  DeleteByBranchId(BranchId:number) {
    return this.http.get<[]>(`${BranchPaths.GetAllBranches}/${BranchId}`)
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
