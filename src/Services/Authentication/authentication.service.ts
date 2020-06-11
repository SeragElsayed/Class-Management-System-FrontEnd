import { Injectable } from '@angular/core';
import {HttpClient,HttpInterceptor} from '@angular/common/http';

// const jwt = require('jsonwebtoken');
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
  private _config: { [key: string]: string };

  constructor(private http:HttpClient) {

    this._config = { 

      // PathAPI: 'https://localhost:44374/api/';
      baseUrl: "https://localhost:44370/api/"

  };
   }
  //register method 
registerUser(user)

{
  console.log("in func ser");
    console.log(user);
  var j=this.http.post<any>("https://localhost:44374/api/user/Register",user);
  console.log(j);

  console.log("after the services func")
 return j;
}
  //login method 
  loginUser(user)

  {
    console.log("in func ser");
      console.log(user);
    var j=this.http.post<any>("https://localhost:44374/api/user/Login",user);
    console.log(j);
  
    console.log("after the services func")
   return j;
  }
  //get profile method 
  GetProfileUser()

  {
    console.log("get profile method ");
     
    var j=this.http.get<any>("https://localhost:44374/api/user/Profile");
    console.log(j);
  
    console.log("after the services func")
   return j;
  }
  //get profile method 
  EditProfileUser(user)

  {
    console.log("edit profile method ");
     
    var j=this.http.post<any>("https://localhost:44374/api/user/Profile",user);
    console.log(j);
  
    console.log("after the services func")
   return j;
  }
//to get token 
getToken()
{
 return localStorage.getItem('token');
}
//to verify token 
verifyToken(req,res,next){
  console.log("in the verify token func")
  if(!req.headers.Authorization)
  return res.status(401).send("unauthorize request")
  let Token=req.headers.Authorization.split(' ')[1];
  if(Token==null)
  {
  return res.status(401).send("unauthorize request")
  }
//   let payload=jwt.verify(Token,'secretKey')
//   if(!payload){
//     return res.status(401).send("unauthorize request")
//   }
// req.userId=payload.sugject
// console.log("the user id ")
// console.log(req.userId)
next()
}
  
}
