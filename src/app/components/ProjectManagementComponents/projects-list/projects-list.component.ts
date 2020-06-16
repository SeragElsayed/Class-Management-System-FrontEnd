import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/Models/ProjectModel';
import { ProjectService } from 'src/Services/project.service';
import { Router } from '@angular/router';

@Component({
  
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  constructor(private MyProjectService: ProjectService) { }
  @Input() projects

  MyProjects:Project[];

  ngOnInit(): void {

    this.getProjectsByStudentId();
  }

  getProjectsByStudentId(){
    this.MyProjectService.GetProjectByStudentId().subscribe(
      res=>{
        this.MyProjects=res;
      }
    )
  }
  
  
  tas(t){
    console.log(t)
    
    //this.MyProjects.push(t)
    this.MyProjectService.AddProjectByTrackId(t).subscribe(
      res=>{
        console.log(res,"response after add")
      }
    )

  }
}
