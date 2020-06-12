import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Location} from '@angular/common';

import { TaskService } from 'src/Services/TaskService/task.service';
import { Task } from 'src/Models/TaskModel';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {

  constructor(private MyTaskService:TaskService,private location: Location) { }
    
    private newTaskForm: FormGroup;

    ngOnInit(): void {
      this.newTaskForm = new FormGroup({
        TaskName: new FormControl(null),
        TaskDescription: new FormControl(null),
        DueDate: new FormControl(null),
      });
    }


    onSubmit(data) {
      let newtask:Task={
        TaskName:data.TaskName,
        TaskDescription:data.TaskDescription,
        DueDate:data.DueDate,
        TaskId:0,
        CourseId:0
      }

      this.MyTaskService.AddTask(newtask).subscribe(
        res=>{
          this.location.back();
      },
      err=> this.location.back()
      )
    }

}
