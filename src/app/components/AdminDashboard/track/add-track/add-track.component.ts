import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {TrackService} from '../../../../../Services/TrackService/track.service';
import {BranchService} from '../../../../../Services/BranchService/branch.service';

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.css']
})
export class AddTrackComponent implements OnInit {

  constructor(private track:TrackService,private branch:BranchService) { }
branches=[{}]
val=2;
branchId;
  private newBlogForm: FormGroup;
  ngOnInit(): void {
    this.GetAllBranches()
    this.newBlogForm = new FormGroup({
      TrackName: new FormControl(null)
    });
  }
  onSubmit(data) {
    console.log("in the submiit func")
        const formData = new FormData();
        console.log(data.TrackName)
        formData.append('TrackName', data.TrackName);
      formData.append("BranchId",this.branchId)

        this.track.AddTrack(formData).subscribe(
          res=>{console.log("in th res func");
         console.log(res);},
          err=>{
           console.log("in the error part"); 
           console.log(err)}
        )
      
        this.newBlogForm.reset();
      }
      //get selected value from dropdown list
      selectChange (event: any) {
        console.log("in the function to get value drop")
        //update the ui
        this.branchId=event;
        console.log( this.branchId);
      }
      // to get the branch name
      GetAllBranches()
{
  this.branch.getAll().subscribe(
    res=>{
      console.log("the response")
      console.log(res)
      for(let i=0;i<res.length;i++)
      {
       
        this.branches.push(
          {"id":res[i].branchId,
            "name":res[i].branchName
        })

      }
      console.log(this.branches)
    },
    err=>
    {
console.log("th error ")
console.log(err)
    }
  )
}
}
