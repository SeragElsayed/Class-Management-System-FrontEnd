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
  currentInput
  selectedFile
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
     const formData: FormData = new FormData();

    for(let i=0 ; i < event.target.files.length ; i++){

      formData.append(`file[]`, event.target.files[i], event.target.files[i].name);  
      this.currentInput.push(event.target.files[i].name)
    }
    console.log(formData)

    this.selectedFile=formData;
 
  }

  onSubmit(data) {
     this.ProjMatService.UploadMaterialByProjectId(this.ProjectId,this.selectedFile).subscribe(
      res => {
        this.MyMaterial=res;
          alert('Uploaded!!');
        })
   
    this.ProjectMaterial.reset();
    this.currentInput=null;
  }
}
