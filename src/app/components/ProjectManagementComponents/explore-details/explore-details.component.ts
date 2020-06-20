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
  MyProject;
  // httMyProject:Project;
  ProjectId:number;

  constructor(private MyProjectService:ProjectService,private RouteProjectId:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.RouteProjectId.params.subscribe(params=>{
      this.ProjectId=Number.parseInt(params["ProjectId"])
    })

    this.getProject();
    
  }
  getProject(){

console.log(this.ProjectId)
    this.MyProjectService.getProjectProjectId(this.ProjectId).subscribe(
      res=>{
        console.log(res,"explore details response")
        this.MyProject=res;

        
      })
  }
}
