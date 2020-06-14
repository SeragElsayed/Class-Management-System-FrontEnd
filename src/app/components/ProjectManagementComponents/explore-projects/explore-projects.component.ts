import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-projects',
  templateUrl: './explore-projects.component.html',
  styleUrls: ['./explore-projects.component.css']
})
export class ExploreProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  project=[
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
