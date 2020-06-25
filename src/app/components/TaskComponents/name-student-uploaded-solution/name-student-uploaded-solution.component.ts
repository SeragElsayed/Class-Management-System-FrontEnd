import { Component, OnInit, Input } from '@angular/core';
import { TaskSolutionService } from 'src/Services/TaskSolution/task-solution.service';

@Component({
  selector: 'app-name-student-uploaded-solution',
  templateUrl: './name-student-uploaded-solution.component.html',
  styleUrls: ['./name-student-uploaded-solution.component.css']
})
export class NameStudentUploadedSolutionComponent implements OnInit {

  @Input()TaskId

  StudentList
  constructor(private tasksolutionservice:TaskSolutionService) { }

  ngOnInit(): void {
    this.getStudentNames()
    
  }

  getStudentNames(){
    this.tasksolutionservice.GetStudentNameUploadedSolutionByTaskId(this.TaskId).subscribe(
      res=>{
        console.log(res,"studentList")
        this.StudentList=res;
      }
    )
  }
}
