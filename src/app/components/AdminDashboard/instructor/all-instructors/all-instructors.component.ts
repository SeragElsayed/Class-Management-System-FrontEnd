import { Component, OnInit } from '@angular/core';
import {InstructorServiceService} from '../../../../../Services/InstructorService/instructor-service.service'
import { BranchService } from 'src/Services/BranchService/branch.service';
@Component({
  selector: 'app-all-instructors',
  templateUrl: './all-instructors.component.html',
  styleUrls: ['./all-instructors.component.css']
})
export class AllInstructorsComponent implements OnInit {

  constructor(private instructor:InstructorServiceService,private branch:BranchService) { }

  ngOnInit(): void {
    this.GetAllInstructors();
  }
  //to add instructor on array
  instructors=[{
    "id":"",
    "name":"",
    "mail":"",
    "phone":"",
    "track":"",
    "branch":""
  }]

//to delete instructor
deleteinstructor(i)
{
  console.log("the id to del")
  console.log(i)
  var id =this.instructors[i].id;
  console.log(this.instructors[i].name)
  this.instructor.DeleteByInstructorId(id).subscribe(
    res=>{console.log("success"),
  err=>{console.log("error part"),
console.log(err)}}
  )
}

GetAllInstructors()
{
  this.instructor.getAll().subscribe(
    res=>{
      console.log("the response")
      console.log(res)
    
      for(let i=0;i<res.length;i++)
      {
       console.log(res[i].id)
        // this.instructors.push(
        //   {
        //     "id":res[i].id,
        //     "name":res[i].userName,
        // "mail":res[i].email,
        // "phone":res[i].phoneNumber,
        // "track":res[i].trackId,
        // "branch":res[i].branchId
        // })

        this.branch.getByBranchId(res[i].branchId).subscribe(
          response=>
          {
            this.instructors.push(
              {
                "id":res[i].id,
                "name":res[i].userName,
            "mail":res[i].email,
            "phone":res[i].phoneNumber,
            "track":res[i].trackId,
            "branch":response.branchName
            
            })
          }
        )



      }
      console.log(this.instructors)
    },
    err=>
    {
console.log("th error ")
console.log(err)
    }
  )
}
}
