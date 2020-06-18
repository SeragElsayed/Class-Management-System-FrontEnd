import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

SelectedOption


@Output() myEvent=new EventEmitter()


 add(ProjectName,ProjectDescription){
   let project={
     ProjectName,
     ProjectDescription

   }
   this.myEvent.emit(project)
 }
  selectedLevel;
    
      data= [
          {id: 0, name: "SD"},
          {id: 1, name: "UI"},
          {id: 2, name: "MOBILE"}
      ];
    
      selected($event){
        console.log($event.target.value);
      }

  
}
