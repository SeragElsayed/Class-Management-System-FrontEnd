import { Component, OnInit, Output } from '@angular/core';
import { ExploreProjectService } from 'src/Services/explore-project.service';
import { Project } from 'src/Models/ProjectModel';

@Component({
  selector: 'app-explore-projects',
  templateUrl: './explore-projects.component.html',
  styleUrls: ['./explore-projects.component.css']
})
export class ExploreProjectsComponent implements OnInit {

  constructor(private services:ExploreProjectService ) { }
  MyProjects:Project;

  ngOnInit(): void {
   console.log( this.getAllProjects());
    
  }
  @Output() Projects
  getAllProjects(){
    this.services.getAllProjects().subscribe(
      res=>{
        console.log(res)
        this.MyProjects=res;
      // this.MyProjects.push(res);
        console.log(this.MyProjects)
      }
    )
  }
  

  projects=[
    {
      name:"project1",
      desc:"any thing"
    }, {
      name:"project2",
      desc:"any thing"
    }, {
      name:"project3",
      desc:"any thing"
    }, {
      name:"project4",
      desc:"any thing"
    }, {
      name:"project5",
      desc:"any thing"
    }, {
      name:"project1",
      desc:"any thing"
    }, {
      name:"project1",
      desc:"any thing"
    }, {
      name:"project1",
      desc:"any thing"
    }, {
      name:"project1",
      desc:"any thing"
    }
  ]

}
