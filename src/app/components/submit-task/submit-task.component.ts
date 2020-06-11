import { Component, OnInit } from '@angular/core';
//import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { TaskService } from 'src/Services/TaskService/task.service';
import { Task } from 'src/Models/TaskModel';
@Component({
  selector: 'app-submit-task',
  templateUrl: './submit-task.component.html',
  styleUrls: ['./submit-task.component.css']
})
export class SubmitTaskComponent implements OnInit {

  MyTasks:Task[]
  MyTask:Task
  NewTask:any
  constructor(private MyTaskService:TaskService) { 

  }

  ngOnInit(): void {
    this.MyTaskService.getAll()
      .subscribe((tasks) => {this.MyTasks = tasks;console.log(this.MyTasks)});
  }


  onSubmit(){
    console.log(this.NewTask)
  }

  OnDelete($event:Event,Task:Task):void{
    let IndexOfTask=this.MyTasks.indexOf(Task)
    this.MyTasks.splice(IndexOfTask,1)
    
    this.MyTaskService.DeleteById(Task.TaskId)
    .subscribe(
        null,
        (error)=>{
        this.MyTasks.splice(IndexOfTask,0,Task)
        }
      );
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





