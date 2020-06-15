import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TaskSolution } from 'src/Models/TaskSolution';
import { throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskSolutionService {

  constructor(private http:HttpClient) { }
 

  getAll() {
    return this.http.get<TaskSolution[]>('https://localhost:44374/api/course/tasksStd')
    .pipe( catchError( this.handleError ) )
  }

  getByTaskSolutionId(TaskSolution:number) {
    return this.http.get<TaskSolution[]>(`https://localhost:44374/api/course/tasksStd/${TaskSolution}`)
    .pipe( catchError( this.handleError ) )
  }

  addTaskSolution(NewTaskSolution:TaskSolution) {
    return this.http.post<TaskSolution>(`https://localhost:44374/api/course/tasksStd/`,NewTaskSolution)
    .pipe( catchError( this.handleError ) )
  }


  deleteTaskSolution(TaskSolutionId:number) {
    return this.http.get<[]>(`https://localhost:44374/api/course/tasksStd/${TaskSolutionId}`)
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
