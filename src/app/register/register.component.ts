
import { Component, OnInit, AfterViewInit  } from '@angular/core';
// import {RegisterModdel} from '../../model/RegisterModel';
import{AuthenticationService} from'../../Services/Authentication/authentication.service';
import * as $ from '../../../node_modules/jquery/dist/jquery';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  imgsrc:any="../../assets/images/avatar-01.jpg";
  constructor(private   Auth: AuthenticationService) { }
  //the form part

  selectedFile: File = null;
  private newBlogForm: FormGroup;
  ngOnInit(): void {
    this.newBlogForm = new FormGroup({
      UserName: new FormControl(null),
      ProfileImage: new FormControl(null),
      City: new FormControl(null),
      Password: new FormControl(null),
    Email: new FormControl(null),
    });
  }
  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
  }
  onSubmit(data) {
console.log("in the submiit func")
    const formData = new FormData();
    console.log(data.UserName)
    formData.append('UserName', data.UserName);
    formData.append('ProfileImage', this.selectedFile);
    formData.append('City',data.City);
  formData.append('Email',data.Email);
  formData.append('Password',data.Password);
  console.log(FormData,"hdddddddddddddddddddddddddd");
    this.Auth.registerUser(formData).subscribe(
      res=>{console.log("in th res func");
     console.log(res);},
      err=>{
       console.log("in the error part"); 
       console.log(err.message)}
    )
  
    this.newBlogForm.reset();
  }
  
 //to handle the services
 userreg:any={
   name:"",
   Email:"",
  City:"",
Password:"",
ProfileImage:null
 };

 registerUser()
 {
   console.log("in user func");
   console.log(this.userreg);
   console.log("the user data above")
   this.Auth.registerUser(this.userreg).subscribe(
     res=>{console.log("in th res func");
    console.log(res);},
     err=>{
      console.log("in the error part"); 
      console.log(err.message)}
   )
   console.log("after comp func finish");
   }
  // to handel the image upload
  url:any;
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.imgsrc= (<FileReader>event.target).result;
        // console.log(this.imgsrc)
      }
      this.selectedFile = <File>event.target.files[0]; 
      reader.readAsDataURL(event.target.files[0]);
    }
  }
 
 
}
