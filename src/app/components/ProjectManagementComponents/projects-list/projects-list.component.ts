import { Component, OnInit } from '@angular/core';
import { Project } from 'src/Models/ProjectModel';
import { ProjectService } from 'src/Services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  constructor(private MyProjectService: ProjectService) { }

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
  

}
