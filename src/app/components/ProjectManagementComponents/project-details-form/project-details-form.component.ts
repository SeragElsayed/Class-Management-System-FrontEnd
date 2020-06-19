import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProjectService } from 'src/Services/project.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/Models/ProjectModel';

@Component({
  selector: 'app-project-details-form',
  templateUrl: './project-details-form.component.html',
  styleUrls: ['./project-details-form.component.css']
})
export class ProjectDetailsFormComponent implements OnInit {

   MyProject:Project;
  httMyProject:Project;
  ProjectId:number;


  constructor(private MyProjectService:ProjectService,private RouteProjectId:ActivatedRoute) { 
    //this.getProject();
    console.log(this.MyProject,"inside details form on constructor")

  }
 

  ngOnInit(): void {
    this.getProject();
  }

  getProject(){

    this.RouteProjectId.params.subscribe(params=>{
      this.ProjectId=Number.parseInt(params["ProjectId"])
    })

    this.MyProjectService.getProjectProjectId(this.ProjectId).subscribe(
      res=>{
        this.MyProject=res;

        
      })
  }
}
