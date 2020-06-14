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
  selectedFile=[]//: FileList = null;
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
    let fileList: FileList = event.target.files;
    if(fileList.length > 0){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0].name);
    }
    //this.test_template = event.target.files[0].name;
    for(let i=0 ; i < event.target.files.length ; i++)
      this.selectedFile.push(event.target.files[i]);
    //this.selectedFile=event.target.files[0];
    console.log(event,fileList,"selectedddd file event")
    //this.selectedFile =event.target;
  }

  onSubmit(data) {

    console.log(data,this.selectedFile,"dataaaaaaaaaa file")

     this.ProjMatService.UploadMaterialByProjectId(this.ProjectId,this.selectedFile).subscribe(
      res => {
        this.MyMaterial=res;
          alert('Uploaded!!');
        })
   
    this.ProjectMaterial.reset();
  }
}
