import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrial-box',
  templateUrl: './matrial-box.component.html',
  styleUrls: ['./matrial-box.component.css']
})
export class MatrialBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
matrial_pdf=[
  {
    name:"pdf1"
    
  },{
    name:"pdf2"
  },
  {
    name:"pdf3"
  }
]
}
