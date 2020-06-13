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
  selectedFile: File[] = null;
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

  onSelectFile(fileInput: any) {
    this.selectedFile = <File[]>fileInput.target.files;
  }

  onSubmit(data) {

     this.ProjMatService.UploadMaterialByProjectId(this.ProjectId,this.selectedFile).subscribe(
      res => {
        this.MyMaterial=res;
          alert('Uploaded!!');
        })
   
    this.ProjectMaterial.reset();
  }
}
