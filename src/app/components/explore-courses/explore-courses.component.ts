import { Component, OnInit } from '@angular/core';
import {BranchService} from '../../../Services/BranchService/branch.service';
import {TrackService} from '../../../Services/TrackService/track.service';
import { Track } from 'src/Models/TrackModel';
import { Branch } from 'src/Models/BranchModel';

@Component({
  selector: 'app-explore-courses',
  templateUrl: './explore-courses.component.html',
  styleUrls: ['./explore-courses.component.css']
})
export class ExploreCoursesComponent implements OnInit {

  MyTracks:Track[];
  MyBranches:Branch[];
  constructor(private MyTrackService:TrackService,private MyBranchService:BranchService) { }

  ngOnInit(): void {
    this.MyBranchService.getAll()
      .subscribe((branches) => {this.MyBranches = branches;console.log(this.MyBranches)});

    // this.MyTrackService.getAll()
    //   .subscribe(tracks => this.MyTracks = tracks);
  }
  

  
  
  }
  


