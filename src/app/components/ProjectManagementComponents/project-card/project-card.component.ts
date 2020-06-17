import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/Models/ProjectModel';
import { Router } from '@angular/router';
import { ProjectService } from 'src/Services/project.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() MyProject:Project;
 
  

  constructor(private router:Router,private MyProjectService:ProjectService) { }

  ngOnInit(): void {
    console.log("inside project card", this.MyProject)
  }

  OnClickDetails(){
    this.router.navigate([`/Project/Details/${this.MyProject["projectModelId"]}`]);
  }

  OnClickDelete(){

    this.MyProjectService.DeleteProject(this.MyProject.ProjectId);
  }
 
}
