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
  }

  OnClickDetails(){
    console.log("proooooooooooooject card")

    // this.router.navigate([`/Project/Details/${this.MyProject.ProjectId}`]);
    this.router.navigate([`/Project/Details/${this.MyProject["id"]}`]);
  }

  OnClickDelete(){

    this.MyProjectService.DeleteProject(this.MyProject.ProjectId);
  }
}
