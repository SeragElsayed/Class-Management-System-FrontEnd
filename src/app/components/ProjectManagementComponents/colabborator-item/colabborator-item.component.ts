import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-colabborator-item',
  templateUrl: './colabborator-item.component.html',
  styleUrls: ['./colabborator-item.component.css']
})
export class ColabboratorItemComponent implements OnInit {

  @Input() MyColaborator:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
