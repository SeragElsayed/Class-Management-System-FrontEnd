import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{AuthenticationService} from'../../Services/Authentication/authentication.service';
import "../../vendor/select2/select2.min.js";
// import "../../vendor/countdowntime/countdowntime";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private   Auth: AuthenticationService){}

 //the form part


 private newBlogForm: FormGroup;
 ngOnInit(): void {
   this.newBlogForm = new FormGroup({
    UserName: new FormControl(null),
   
     Password: new FormControl(null),

   });
 }

 onSubmit(data) {
console.log("in the submiit func")
   const formData = new FormData();
 
   formData.append('UserName', data.UserName);
 formData.append('Password',data.Password);
 console.log(FormData);
   this.Auth.loginUser(formData).subscribe(
     res=>{
       console.log("in th response func");
    console.log(res.token);
    localStorage.setItem('token',res.token)
    console.log("the token ")
 console.log( this.Auth.getToken())
  },
     err=>{
      console.log("in the error part"); 
      console.log(err.message)}
   )
 
   this.newBlogForm.reset();
 }
 



}
