import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {TextMaterialService} from '../../Services/TextMaterial/text-material.service';
import * as $ from '../../../node_modules/jquery/dist/jquery';
@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {

  constructor(private TxtMaterial:TextMaterialService) { }
  selectedFile: File = null;
  private newBlogForm: FormGroup;
  ngOnInit(): void {

    this.newBlogForm = new FormGroup({
     
      MaterialFile: new FormControl(null)
    
    });
  }
 
  onSubmit(data) {
    if(this.selectedLevel.name="Text"){
    console.log("in the submiit func")
        const formData = new FormData();
        console.log("the files")
        console.log(this.selectedFile);
        formData.append('MaterialFile', this.selectedFile);
     
      console.log(FormData);
        this.TxtMaterial.AddTextMaterial(formData).subscribe(
          res=>{console.log("in th res func");
         console.log(res);},
          err=>{
           console.log("in the error part"); 
           console.log(err.message)}
        )
      
        this.newBlogForm.reset();
      }
    }

      selectedLevel;
      data:Array<Object> = [
          {id: 0, name: "Text"},
          {id: 1, name: "Vedio"}
      ];
    
      selected(){
        console.log(this.selectedLevel.name)
      }

  //for the file section
  public files: NgxFileDropEntry[] = [];
 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
   
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.selectedFile = file;
   
          // Here you can access the real file
        //  console.log(droppedFile.relativePath, file);
 
          
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }
}
