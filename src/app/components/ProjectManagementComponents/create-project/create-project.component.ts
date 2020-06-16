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


// name:any="tasneem";
//  description:any="any thing";
@Output() myEvent=new EventEmitter()

 
//  add(){
   
//   let tas={
//      name:this.name,
//      description:this.description
//    }
//    console.log(tas);
//   this.myEvent.emit(tas);
//  }
 add(name,description){
   let project={
     name,
     description

   }
   this.myEvent.emit(project)
console.log(project)
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

  //for the file section

 
 
  
}
