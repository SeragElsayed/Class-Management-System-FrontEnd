// import { BadInput } from './../common/bad-input';
// import { NotFoundError } from './../common/not-found-error';
// import { AppError } from './../common/app-error';

import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import {TaskPaths} from '../../Common/UrlConstants'
import { Task } from 'src/Models/TaskModel';
import {  throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable()
export class TaskService {
   
  constructor( private http: HttpClient) {
   
   }
   ngOnInit(){

   }

  getAll() {
    return this.http.get<Task[]>(TaskPaths.GetAllTasks)
    .pipe( catchError( this.handleError ) )
  }

  getById(TaskId:number) {
    return this.http.get<Task>(`${TaskPaths.GetAllTasks}/${TaskId}`)
    .pipe( catchError( this.handleError ) )
  }

  DeleteById(TaskId:number) {
    return this.http.delete(`${TaskPaths.GetAllTasks}/${TaskId}`)
    .pipe( catchError( this.handleError ) )
  }

  UpdateById(Task:Task) {
    return this.http.put<Task>(`${TaskPaths.GetAllTasks}/${Task.TaskId}`,Task)
    .pipe( catchError( this.handleError ) )
  }

  AddTask(Task:Task) {
    return this.http.post<Task>(`${TaskPaths.AddTask}`,Task)
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
