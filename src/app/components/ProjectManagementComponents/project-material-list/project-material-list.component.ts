import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProjectMaterialService } from 'src/Services/project-material.service';
import { ActivatedRoute } from '@angular/router';
import { ProjectMaterial } from 'src/Models/ProjectMaterialModel';

@Component({
  selector: 'app-project-material-list',
  templateUrl: './project-material-list.component.html',
  styleUrls: ['./project-material-list.component.css']
})
export class ProjectMaterialListComponent implements OnInit {

  MyMaterial:ProjectMaterial[];

  ProjectId:number;
  
  selectedFile=new Array();
  
  FilesNamesString;
private ProjectMaterial: FormGroup;

  constructor(private ProjMatService:ProjectMaterialService,private RouteProjectId:ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.ProjectMaterial = new FormGroup({
      MaterialFiles: new FormControl(null)
    });

    this.RouteProjectId.params.subscribe(params=>{
      this.ProjectId=Number.parseInt(params["ProjectId"])
    })
  }

  onSelectFile(event) {

    if(this.selectedFile==null)
    return

    for(let i=0 ; i < event.target.files.length ; i++){
      this.FilesNamesString+=`${event.target.files[i].name}...`;
      this.selectedFile.push(event.target.files[i]);
     }
 
  }

  onSubmit(data) {
    
    if(this.selectedFile==null)
    return

     this.ProjMatService.UploadMaterialByProjectId(this.ProjectId,this.selectedFile).subscribe(
      res => {
        this.MyMaterial=res;
        console.log(this.MyMaterial,"material from material list")
          alert('Uploaded!!');
        })
   
    this.ProjectMaterial.reset();
    this.selectedFile=null;
    this.FilesNamesString=null;
  }
}
