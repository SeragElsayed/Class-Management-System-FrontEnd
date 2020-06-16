import { Component, OnInit } from '@angular/core';
import { Project } from 'src/Models/ProjectModel';
import { ProjectService } from 'src/Services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  MyProject:Project;
  httMyProject:Project;
  ProjectId:number;
  constructor(private MyProjectService:ProjectService,private RouteProjectId:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProject();

  }
  SelectedOption
 
 
 
  selectedLevel;
    
      data= [
          {id: 0, name: "SD"},
          {id: 1, name: "UI"},
          {id: 2, name: "MOBILE"}
      ];
    
      selected($event){
        console.log($event.target.value);
      }

  //for the file section
  getProject(){

    this.RouteProjectId.params.subscribe(params=>{
      this.ProjectId=Number.parseInt(params["ProjectId"])
    })

    this.MyProjectService.getProjectProjectId(this.ProjectId).subscribe(
      res=>{
        this.MyProject=res;
        console.log(this.MyProject,"afterrrrrrrrrrrr cal ")

      })
  }
 
  

}
