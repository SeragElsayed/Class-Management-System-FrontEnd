import { Component, OnInit, Input } from '@angular/core';
import { TaskSolutionService } from 'src/Services/TaskSolution/task-solution.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-student-solutions-list',
  templateUrl: './student-solutions-list.component.html',
  styleUrls: ['./student-solutions-list.component.css']
})
export class StudentSolutionsListComponent implements OnInit {
 @Input() TaskId
 @Input() student
  SolutionsList
  filename

  constructor(private tasksolutionservice:TaskSolutionService) { }

  ngOnInit(): void {
    this.getStudentSolutionList()
  }
  getStudentSolutionList(){
    this.tasksolutionservice.gettasksolutionbytaskidandstudentid(this.TaskId,this.student["id"]).subscribe(
      res=>{
        this.SolutionsList=res;
      }
    )
  }


  
  download(material) {


    this.tasksolutionservice.DownloadMaterialById(material["taskSolutionId"]).subscribe(
      res => {

        console.log(res);
        const byteCharacters = atob(res);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);

        const blob = new Blob([byteArray], { type: 'application/pdf' });

        saveAs(blob, this.filename)

      },
      err => console.log(err)
    )
  }



}
