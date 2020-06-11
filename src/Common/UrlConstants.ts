export const BaseURL='http://localhost:3000/'

const EndPoints = {
  Track: 'Track/',
  Task: 'Task/',
  Branch: 'Branch/',
 
};

 const TrackActions = {
    GetAllTracks: 'Tracks',
   
  };
  const BranchActions = {
    GetAllBranches: 'Branches',
   
  };

  const TaskActions = {
    GetAllTasks: 'Tasks',
    GetTaskById: 'Task',
    DeleteTaskById: 'Delete',
    UpdateTaskById: 'Update',
    AddTask: 'Add',
   
  };

export const TrackPaths={
  //GetAllTracks:`${BaseURL}${EndPoints.Track}${TrackActions.GetAllTracks}`
  GetAllTracks:`${BaseURL}${TrackActions.GetAllTracks}`
}

export const BranchPaths={
 // GetAllBranches:`${BaseURL}${EndPoints.Branch}${BranchActions.GetAllBranches}`
  GetAllBranches:`${BaseURL}${BranchActions.GetAllBranches}`
}
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