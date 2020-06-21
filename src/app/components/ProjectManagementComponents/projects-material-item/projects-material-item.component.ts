import { Component, OnInit, Input } from '@angular/core';
import { ProjectMaterial } from 'src/Models/ProjectMaterialModel';
import { ProjectMaterialPaths } from 'src/Common/UrlConstants';
import { ProjectMaterialService } from 'src/Services/project-material.service';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-projects-material-item',
  templateUrl: './projects-material-item.component.html',
  styleUrls: ['./projects-material-item.component.css']
})
export class ProjectsMaterialItemComponent implements OnInit {
  @Input()MyMaterial;
  // DisplayName:string
  DownloadLink:string

  constructor(private ProjMatServ:ProjectMaterialService, private _FileSaverService: FileSaverService) { }

  ngOnInit(): void {

    // this.DownloadLink=`${ProjectMaterialPaths.DownloadById}/${this.MyMaterial.MaterialId}`
     this.DownloadLink=`https://localhost:44347/api/ProjectMaterial/Download/${this.MyMaterial.PathOnServer}`

  }
  OnClick(){

    this.ProjMatServ.DownloadMaterialById(this.MyMaterial.projectMaterialModelId).subscribe(
      res=>{
        let f=res["file"]["fileContents"];
        let fn=res["file"]["fileDownloadName"];
        console.log(res,"the dowwwwwwwwwwnload file",f,fn)
        this._FileSaverService.save(f, fn);
      
      }
    )
  }

  downloadFile(data) {
    console.log("dataaaaaaaaa",data)
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
