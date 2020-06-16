import { Component, OnInit } from '@angular/core';
import {BranchService} from '../../../../../Services/BranchService/branch.service';
import {TrackService} from '../../../../../Services/TrackService/track.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-all-tracks',
  templateUrl: './all-tracks.component.html',
  styleUrls: ['./all-tracks.component.css']
})
export class AllTracksComponent implements OnInit {

  constructor(private track:TrackService,private branch:BranchService,private router:Router) { }

  ngOnInit(): void {
    this.GetAllTracks()
  }
  tracks=[{
    "id":"0",
    "name":"lala",
    "branch":"smart"
  }]

  deleteTrack(i)
  {
    console.log("the id to del")
    var id =this.tracks[i].id;
    console.log(this.tracks[i].id)
    this.track.DeleteByTrackId(id).subscribe(
      res=>{console.log("success")},
    err=>{console.log("error part"),
  console.log(err)}
    )
  }
  trackid
  getid(id)
  {
     console.log("to get the clicked id ")
     console.log(id)
  
     
            this.track.getByTrackId(id).subscribe(
              res=>{
                console.log("success");
             console.log(res.trackId)
                localStorage.setItem("trackval",res.trackId)
                localStorage.setItem("trackname",res.trackName)
                this.router.navigateByUrl('/track/edit')
              }
              ,err=>{
                console.log("error")
              }
            )
          
  }
  GetAllTracks()
  {
    this.track.getAll().subscribe(
      res=>{
        console.log("the response")
        console.log(res)
        for(let i=0;i<res.length;i++)
        {
           this.branch.getByBranchId(res[i].branchId).subscribe(
              response=>
              {
                this.tracks.push(
                  {
                    "id":res[i].trackId,
                    "name":res[i].trackName,
                "branch":response.branchName
                
                })
              }
            )
          

    
  
        }
        console.log(this.tracks)
      },
      err=>
      {
  console.log("th error ")
  console.log(err)
      }
    )
  }
}
