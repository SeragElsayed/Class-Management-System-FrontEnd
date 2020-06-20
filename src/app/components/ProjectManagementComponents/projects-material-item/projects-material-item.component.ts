import { Component, OnInit, Input } from '@angular/core';
import { ProjectMaterial } from 'src/Models/ProjectMaterialModel';
import { ProjectMaterialPaths } from 'src/Common/UrlConstants';
import { ProjectMaterialService } from 'src/Services/project-material.service';

@Component({
  selector: 'app-projects-material-item',
  templateUrl: './projects-material-item.component.html',
  styleUrls: ['./projects-material-item.component.css']
})
export class ProjectsMaterialItemComponent implements OnInit {
  @Input()MyMaterial;
  // DisplayName:string
  DownloadLink:string

  constructor(private ProjMatServ:ProjectMaterialService) { }

  ngOnInit(): void {

    // this.DownloadLink=`${ProjectMaterialPaths.DownloadById}/${this.MyMaterial.MaterialId}`
     this.DownloadLink=`https://localhost:44347/api/ProjectMaterial/Download/${this.MyMaterial.PathOnServer}`

    console.log(this.MyMaterial,"material from material item ")
    // let splipath=this.MyMaterial.PathOnServer.split('/');
    // this.DisplayName=splipath[splipath.length-1];
  }
  OnClick(){

    this.ProjMatServ.DownloadMaterialById(this.MyMaterial.projectMaterialModelId).subscribe(
      res=>{
        this.downloadFile(res)
      }
    )
  }

  downloadFile(data) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
