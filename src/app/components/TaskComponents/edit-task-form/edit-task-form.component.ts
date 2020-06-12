import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';

import { Task } from 'src/Models/TaskModel';
import { TaskService } from 'src/Services/TaskService/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.css']
})
export class EditTaskFormComponent implements OnInit {

  constructor(private MyTaskService:TaskService,private location: Location,private RouteTaskId:ActivatedRoute) {

   }

  MyTask:Task;
  TaskId:number;

  ngOnInit(): void {
    this.RouteTaskId.params.subscribe(params=>{
      this.TaskId=Number.parseInt(params["TaskId"])
      console.log("paraaaaaaaaaaam",this.TaskId)
    })


   this.MyTaskService.getById(this.TaskId).subscribe(
    res=>{
        this.MyTask=res;
     },
    err=> console.log(err,this.TaskId)
    )}


}
