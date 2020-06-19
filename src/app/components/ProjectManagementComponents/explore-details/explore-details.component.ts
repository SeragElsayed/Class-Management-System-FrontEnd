import { Component, OnInit } from '@angular/core';
import { Project } from 'src/Models/ProjectModel';
import { ProjectService } from 'src/Services/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore-details',
  templateUrl: './explore-details.component.html',
  styleUrls: ['./explore-details.component.css']
})
export class ExploreDetailsComponent implements OnInit {
  MyProject:Project;
  httMyProject:Project;
  ProjectId:number;

  constructor(private MyProjectService:ProjectService,private RouteProjectId:ActivatedRoute) { }

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
