import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectManagementService } from 'src/Services/project-management.service';
import { ProjectManagPaths } from 'src/Common/UrlConstants';

@Component({
  selector: 'app-colaborator-list',
  templateUrl: './colaborator-list.component.html',
  styleUrls: ['./colaborator-list.component.css']
})
export class ColaboratorListComponent implements OnInit {

  ColabEmailToBeAdded:string;
  MyColaborators:any;
  ProjectId:number;

  constructor(private ProjManagService:ProjectManagementService,private RouteProjectId:ActivatedRoute) { }

  ngOnInit(): void {
    this.RouteProjectId.params.subscribe(params=>{
      this.ProjectId=Number.parseInt(params["ProjectId"])
    })

    this.ProjManagService.getProjectCollaboratorByProjectId(this.ProjectId).subscribe(
      res=>{
        this.MyColaborators=res;

      })
  }

  OnAddColab(){
    if(this.ColabEmailToBeAdded=="")
    return

    this.ProjManagService.PostAddCollaboratorByEmail(this.ProjectId,this.ColabEmailToBeAdded)
      .subscribe(res=>{
        alert("added");
      })
  }

  OnRemove($event,colab){
    this.ProjManagService.DeleteCollaboratorByUserId(colab["Id"]).subscribe(
      res=>{
        const index = this.MyColaborators.indexOf(colab);
        if (index > -1) {
          this.MyColaborators.splice(index, 1);
        }
      })
  }


  OnMakeOwner($event,colab){
    this.ProjManagService.MakeCollaboratorOwnerByUserId(colab["Id"]).subscribe(
      res=>{
        alert("added");
      }
    )
  }

}
