import { Component, OnInit, Input } from '@angular/core';
import { ProjectMaterial } from 'src/Models/ProjectMaterialModel';
import { ProjectMaterialPaths } from 'src/Common/UrlConstants';

@Component({
  selector: 'app-projects-material-item',
  templateUrl: './projects-material-item.component.html',
  styleUrls: ['./projects-material-item.component.css']
})
export class ProjectsMaterialItemComponent implements OnInit {
  @Input()MyMaterial:ProjectMaterial;
  DisplayName:string
  DownloadLink:string

  constructor() { }

  ngOnInit(): void {

    this.DownloadLink=`${ProjectMaterialPaths.DownloadById}/${this.MyMaterial.MaterialId}`

    let splipath=this.MyMaterial.PathOnServer.split('/');
    this.DisplayName=splipath[splipath.length-1];
  }

}
