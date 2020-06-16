import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { TaskSolutionService } from 'src/Services/TaskSolution/task-solution.service';
import { TaskSolution } from 'src/Models/TaskSolution';



@Component({
  selector: 'app-task-solution',
  templateUrl: './task-solution.component.html',
  styleUrls: ['./task-solution.component.css']
})
export class TaskSolutionComponent implements OnInit {

  constructor(private service:TaskSolutionService) { 
    
  }
myTaskSolution:TaskSolution[];
input:any
id:any
  ngOnInit(): void {

    
  }

  getAll(){
    this.service.getAll().subscribe(
      res=>{
        console.log(res)
        this.myTaskSolution=res;
    
       
      }
    )
  }
Add(){
  this.service.addTaskSolution(this.input)  
      .subscribe(data => {  
       console.log(data)
      },  
      error => {  
        console.log("error")  
      });
}

  getByTaskSolutionId(id){
    this.service.getByTaskSolutionId(id).subscribe(
      res=>{
         this.myTaskSolution=res;
      },error => {  
        console.log("error")  
      });
    
  }

  

deleteTaskSolution(){
  for (const droppedFile of this.files) {
    console.log("filename:  ",droppedFile.relativePath);

    droppedFile.relativePath=null;


    
    console.log("filename become:  ",droppedFile.relativePath);
    }
}


////save in db
addTaskSolution(input){
      for (const droppedFile of this.files) {
      
    console.log("filename:  ",droppedFile.relativePath);
    input=droppedFile.relativePath;

console.log("input",input);
        this.service.addTaskSolution(input)
        .subscribe(res=>{
          input.push(input);


          // input['id']=res.json().id;
          // console.log("res",res.json())
          this.files.splice(0,0,input);
          console.log("this",this.files.splice(0,0,input));
        }),
        err=>{
         console.log("error in add task solution"); 
         console.log(err.message)}


         
      
    }

   
    
 
}
    




  public files: NgxFileDropEntry[] = [];
 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
 
        
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }
}
