import { Component, OnInit } from '@angular/core';
import {TextMaterialService} from '../../Services/TextMaterial/text-material.service'
import {DownloadTxtFileService} from '../../Services/TextMaterial/download-txt-file.service';
import { pathToFileURL } from 'url';
import { DomSanitizer } from '@angular/platform-browser';
import {HttpClient,HttpResponse} from '@angular/common/http'
import { data } from 'jquery';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-matrial-box',
  templateUrl: './matrial-box.component.html',
  styleUrls: ['./matrial-box.component.css']
})
export class MatrialBoxComponent implements OnInit {

  constructor(private Auth:TextMaterialService,private down:DownloadTxtFileService,private http:HttpClient) { }
TxtFilePath="C:/Users/Ereny/source/repos/E-learnProjectBackend/onlinelearningbackend";
path=[{

}];
filename;
filepath;
/////////////////
download(index)
{
//  this. filename=this.path[index].name;
  console.log( this. filename)
  // var filepath=this.path[index].url;

this.down.downloadfile(this.filepath, this. filename).subscribe(
  res=>{
    
    console.log(res);
    const byteCharacters = atob(res);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
}

const byteArray = new Uint8Array(byteNumbers);

const blob = new Blob([byteArray], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});

saveAs(blob, this. filename)

},
  err=>console.log(err)
)
}
///////////////////////////////
  ngOnInit(): void {
    this.GetTxtMaterial();
  
  }
GetTxtMaterial(){
  console.log("box material func")
this.Auth.GetTxtMaterial(2).subscribe(
  res=>{
    console.log("in the res func")
    
    
    for (let i = 0; i < res.length; i++) {
      
      this.path.push({
      // 'url':`${this.TxtFilePath}/${res[i].url}`,
      'url':res[i].url,
      'name':res[i].textMaterialName
      })
    }
    console.log(this.path)
  },
  err=>{
    console.log("in the error");
    console.log(err.message)
  }
)
}



}
