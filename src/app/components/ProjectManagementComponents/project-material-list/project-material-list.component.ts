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
  currentInput:string[]
  selectedFile=new Array();
  FilesNames=new Array();
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
    //  const formData: FormData = new FormData();
     
    //  formData.append(`file`, event.target.files[0], event.target.files[0].name);
    //  this.FilesNames.push(event.target.files[0].name);
    for(let i=0 ; i < event.target.files.length ; i++){
      // console.log(event.target.files[i].name)

      this.FilesNames.push(event.target.files[i].name);
      this.selectedFile.push(event.target.files[i]);
      // formData.append(`file[]`, event.target.files[i], event.target.files[i].name);  
     }
    
    // this.selectedFile=formData;
    console.log(this.FilesNames,this.selectedFile)
 
  }

  onSubmit(data) {
    console.log("data on submit",data)
     this.ProjMatService.UploadMaterialByProjectId(this.ProjectId,this.selectedFile).subscribe(
      res => {
        this.MyMaterial=res;
          alert('Uploaded!!');
        })
   
    this.ProjectMaterial.reset();
    this.currentInput=null;
  }
}
