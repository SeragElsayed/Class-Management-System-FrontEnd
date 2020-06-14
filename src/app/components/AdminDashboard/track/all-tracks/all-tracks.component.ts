import { Component, OnInit } from '@angular/core';
import {TrackService} from '../../../../../Services/TrackService/track.service'
@Component({
  selector: 'app-all-tracks',
  templateUrl: './all-tracks.component.html',
  styleUrls: ['./all-tracks.component.css']
})
export class AllTracksComponent implements OnInit {

  constructor(private track:TrackService) { }

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
      res=>{console.log("success"),
    err=>{console.log("error part"),
  console.log(err)}}
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
         
          this.tracks.push(
            {
              "id":res[i].trackId,
              "name":res[i].trackName,
          "branch":res[i].branchId
          
          })
  
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
