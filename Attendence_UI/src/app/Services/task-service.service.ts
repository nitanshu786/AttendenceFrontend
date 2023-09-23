import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EditTask, Reordring, Task } from '../Classes/task';
import { UpdateStage } from '../Classes/update-stage';
import { environment } from 'src/environments/environment.development';
import { ConstantUrl } from '../Common/APIUrls';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private httpclient:HttpClient, private route:Router) {  }
 
  DeleteService(applicationUserId:any):Observable<any>
  {
    return this.httpclient.delete<any>(`${ConstantUrl.DeleteTask}`,applicationUserId)
  }

  CreateService(taskdata:Task):Observable<any>
  {
    return this.httpclient.post<any>(`${ConstantUrl.CreateTask}`,taskdata)
  }

  UpdateService(taskupdate:EditTask):Observable<any>
  {
    return this.httpclient.put<any>(`${ConstantUrl.UpdateTask}`,taskupdate)
  }

  GetTasksAssignedService():Observable<any>
  {
    return this.httpclient.get<any>(`${ConstantUrl.GetTaskByUser}`)
  }
  GetAllAssignedTaskService():Observable<any[]>
  {
   return this.httpclient.get<any[]>(`${ConstantUrl.GetAllTask}`);
  }
  UpdateTaskStageService(tt:UpdateStage):Observable<any>
  {
   return this.httpclient.put<any>(`${ConstantUrl.UpdateStage}`,tt);
  }

  GetUserService():Observable<any[]>
  {
    return this.httpclient.get<any[]>(`${ConstantUrl.GetRegisterUser}`)
  }
  GetProjectService():Observable<any[]>
  {
    return this.httpclient.get<any[]>(`${ConstantUrl.GetAllProjects}`)
  }

  ReodringItemInArray(payload:Reordring[]):Observable<any[]>
  {
    return this.httpclient.post<any>(`${ConstantUrl.ReordringTask}`,payload)
  }
  GetTaskById(taskId:any):Observable<any>
  {
    return this.httpclient.get<any>(`${ConstantUrl.GetTaskById}${taskId}`)
  }
}
