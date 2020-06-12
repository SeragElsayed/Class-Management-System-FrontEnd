import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/Services/TaskService/task.service';
import { Task } from 'src/Models/TaskModel';
import {Router} from '@angular/router';
@Component({
  selector: 'app-submit-task',
  templateUrl: './submit-task.component.html',
  styleUrls: ['./submit-task.component.css']
})
export class SubmitTaskComponent implements OnInit {

  MyTasks:Task[]
  MyTask:Task
  PassedTask:Task= {
    TaskName:"Enter Task Name",
    TaskId:0,
    TaskDescription:"Enter Task Desc.",
    CourseId:0,
    DueDate:new Date(),
  }
  constructor(private MyTaskService:TaskService,private router: Router) { 

  }

  ngOnInit(): void {
    this.MyTaskService.getAll()
      .subscribe((tasks) => {this.MyTasks = tasks;console.log(this.MyTasks)});
  }


  OnEdit($event:Event,Task:Task):void{
    this.router.navigate([`/Task/Edit/${Task.TaskId}`])
   
  }
  OnAddTask($event){
    this.router.navigate(['/Task/Add'])
  }
  OnDelete($event:Event,Task:Task):void{
    
    
    this.MyTaskService.DeleteById(Task.TaskId)
    .subscribe(
        res=>{let IndexOfTask=this.MyTasks.indexOf(Task)
        this.MyTasks.splice(IndexOfTask,1)} );
  }
}



// public files: NgxFileDropEntry[] = [];

// public dropped(files: NgxFileDropEntry[]) {
//   this.files = files;
//   for (const droppedFile of files) {

//     // Is it a file?
//     if (droppedFile.fileEntry.isFile) {
//       const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
//       fileEntry.file((file: File) => {

//         // Here you can access the real file
//         console.log(droppedFile.relativePath, file);

      

//       });
//     } else {
//       // It was a directory (empty directories are added, otherwise only files)
//       const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
//       console.log(droppedFile.relativePath, fileEntry);
//     }
//   }
// }

// public fileOver(event){
//   console.log(event);
// }

// public fileLeave(event){
//   console.log(event);
// }





