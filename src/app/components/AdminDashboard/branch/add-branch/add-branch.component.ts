import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BranchService} from '../../../../../Services/BranchService/branch.service'
@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(private branch:BranchService) { }
  private newBlogForm: FormGroup;
  ngOnInit(): void {
    this.newBlogForm = new FormGroup({
      BranchName: new FormControl(null),
      BranchEmail: new FormControl(null),
      BranchTelephone: new FormControl(null),
    });
  }
  onSubmit(data) {
    console.log("in the submiit func")
        const formData = new FormData();
        console.log(data.BranchName)
        formData.append('BranchName', data.BranchName);
        // formData.append('IsActive', "1");
        formData.append('BranchEmail',data.BranchEmail);
      formData.append('BranchTelephone',data.BranchTelephone);

   
        this.branch.AddBranch(formData).subscribe(
          res=>{console.log("in th res func");
         console.log(res);},
          err=>{
           console.log("in the error part"); 
           console.log(err)}
        )
      
        this.newBlogForm.reset();
      }
}
