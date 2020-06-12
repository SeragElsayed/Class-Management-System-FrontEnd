import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskSolutionService {

  constructor(private http:HttpClient) { }
  tasksolutionId:any;
  StudentId:any;
  TaskId:any;
  CourseId:any;
  TaskSolutionId:any;
  getAllTasksSolution(){
    return this.http.get(`https://localhost:44374/api/course/tasksStd/${this.tasksolutionId}`);
  }

  addTaskSolution(taskSolution){
    
    // return this.http.post(`https://localhost:44374/api/course/tasksStd/${this.StudentId}/${this.TaskId}/${this.CourseId}`, JSON.stringify(taskSolution))
    return this.http.post(`https://localhost:44374/api/course/tasksStd/1/1/1`, JSON.stringify(taskSolution))

  }

  updateTaskSolution(taskSolution){
    return this.http.patch(`https://localhost:44374/api/course/tasksStd/${this.StudentId}/${this.TaskId}/${this.CourseId}`,JSON.stringify({isRead:true}));

  }

  deleteTaskSolution(){
    return this.http.delete(`https://localhost:44374/api/course/tasksStd/${this.TaskSolutionId}`)
  }
}
