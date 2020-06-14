export const BaseURL='https://localhost:44374/'

const EndPoints = {
  Track: 'Track/',
  Task: 'Task/',
  Branch: 'Branch/',
 
};

 const TrackActions = {
    GetAllTracks: 'api/Track',
    GetTrackByTrackId: 'api/Track/track',
    GetTrackByBranchId: 'api/Track',
    AddTrack: 'api/Track/Add',
    UpdateTrack: 'api/Track/Edit',
    DeleteTrackById: 'api/Track/Delete',
  };

  export const TrackPaths={
    //GetAllTracks:`${BaseURL}${EndPoints.Track}${TrackActions.GetAllTracks}`
    GetAllTracks:`${BaseURL}${TrackActions.GetAllTracks}`,
    GetTrackByTrackId:`${BaseURL}${TrackActions.GetTrackByTrackId}`,
    GetTrackByBranchId:`${BaseURL}${TrackActions.GetTrackByBranchId}`,
    AddTrack:`${BaseURL}${TrackActions.AddTrack}`,
    UpdateTrack:`${BaseURL}${TrackActions.UpdateTrack}`,
    DeleteTrackById:`${BaseURL}${TrackActions.DeleteTrackById}`,
  }
  
  const BranchActions = {
    GetAllBranches: 'api/branch',
    GetBranchById: 'api/branch',
    AddBranch: 'api/branch/Add',
    UpdateBranch: 'api/branch/Edit',
    DeleteBranchById: 'api/branch/Delete',
   
  };
  export const BranchPaths={
    // GetAllBranches:`${BaseURL}${EndPoints.Branch}${BranchActions.GetAllBranches}`
     GetAllBranches:`${BaseURL}${BranchActions.GetAllBranches}`,
     GetBranchById:`${BaseURL}${BranchActions.GetBranchById}`,
     AddBranch:`${BaseURL}${BranchActions.AddBranch}`,
     UpdateBranch:`${BaseURL}${BranchActions.UpdateBranch}`,
     DeleteBranchById:`${BaseURL}${BranchActions.DeleteBranchById}`,
   }
  const TaskActions = {
    GetAllTasks: 'Tasks',
    GetTaskById: 'Task',
    DeleteTaskById: 'Delete',
    UpdateTaskById: 'Update',
    AddTask: 'Add',
   
  };

export const TaskPaths={
  // GetAllTasks:`${BaseURL}${EndPoints.Task}${TaskActions.GetAllTasks}`,
  // GetTaskById: `${BaseURL}${EndPoints.Task}${TaskActions.GetTaskById}`,
  // DeleteTaskById: `${BaseURL}${EndPoints.Task}${TaskActions.DeleteTaskById}`,
  // UpdateTaskById: `${BaseURL}${EndPoints.Task}${TaskActions.UpdateTaskById}`,
  // AddTask: `${BaseURL}${EndPoints.Task}${TaskActions.AddTask}`,
  GetAllTasks:`${BaseURL}${TaskActions.GetAllTasks}`,
  GetTaskById: `${BaseURL}${TaskActions.GetTaskById}`,
  DeleteTaskById: `${BaseURL}${TaskActions.DeleteTaskById}`,
  UpdateTaskById: `${BaseURL}${TaskActions.UpdateTaskById}`,
  AddTask: `${BaseURL}${TaskActions.AddTask}`,
}

const ProjectManagActions = {
  GetCollabByProjId: 'PM',
  DeleteCollabByUserId: 'Delete',
  MakeOwnerByUserId: 'MakeOwner',
  AddCollabByUserEmail: 'Add',
 
};

export const ProjectManagPaths={
GetCollabByProjId:`${BaseURL}${ProjectManagActions.GetCollabByProjId}`,
DeleteCollabByUserId: `${BaseURL}${ProjectManagActions.DeleteCollabByUserId}`,
MakeOwnerByUserId: `${BaseURL}${ProjectManagActions.MakeOwnerByUserId}`,
AddCollabByUserEmail: `${BaseURL}${ProjectManagActions.AddCollabByUserEmail}`,
}