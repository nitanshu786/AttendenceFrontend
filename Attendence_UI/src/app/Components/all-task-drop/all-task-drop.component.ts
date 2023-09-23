import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {  Reordring } from 'src/app/Classes/task';
import { TaskServiceService } from 'src/app/Services/task-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateStage } from 'src/app/Classes/update-stage';
import { MatDialog } from '@angular/material/dialog';
import { TaskdetaildilogComponent } from '../taskdetaildilog/taskdetaildilog.component';
import { RegisterService } from 'src/app/Services/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-task-drop',
  templateUrl: './all-task-drop.component.html',
  styleUrls: ['./all-task-drop.component.scss']
})
export class AllTaskDropComponent implements OnInit {
  BackLog: any[] = [];
  Development: any[] = [];
  Test: any[] = [];
  Done: any[] = [];
  updateStage: UpdateStage = new UpdateStage();
  taskindexing:Reordring[]=[]
  
   TaskDetail:any;
  
  constructor(private _service: TaskServiceService,private registerservice:RegisterService, private route: Router,
    private router:ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
     const taskId = params['taskid'];
     if(taskId==undefined||null) return taskId;
   this._service.GetTaskById(taskId).subscribe(data=>{
  this.openDialog(data)
   })
    });
    this.GetAllTask();
  }

  GetAllTask() {
    this._service.GetAllAssignedTaskService().subscribe(tasks => {
      this.BackLog = tasks.map(x => x.workingTasks.filter((task: { stage: string; }) => task.stage === 'BackLog')).flat();
      this.Development = tasks.map(x => x.workingTasks.filter((task: { stage: string; }) => task.stage === 'Development')).flat();
      this.Test = tasks.map(x => x.workingTasks.filter((task: { stage: string; }) => task.stage === 'Test')).flat();
      this.Done = tasks.map(x => x.workingTasks.filter((task: { stage: string; }) => task.stage === 'Done')).flat();
    },
    (error) => {
      Swal.close();
      Swal.fire({
        icon: 'warning',
        title: `${error.error.Message}`,
        confirmButtonText: 'Ok'
      });

    })
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
       this.taskindexing = event.container.data.map((element, index) => ({
        task_Id: element.task_Id,
        index: index,
      }));    
        this._service.ReodringItemInArray(this.taskindexing).subscribe(item=>{
        this.GetAllTask();},
        (error) => {
          Swal.close();
          Swal.fire({
            icon: 'warning',
            title: `${error.error.Message}`,
            confirmButtonText: 'Ok'
          })})
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,);
        this.updateStage.Stage = event.container.id,
        this.updateStage.task_Id = event.item.data.task_Id
        this.updateStage.currentUserId= this.registerservice.GetUserIdfromStorage();
      this._service.UpdateTaskStageService(this.updateStage).subscribe(
        (response) => {
         this.GetAllTask();
        },
        (error) => {
          Swal.close();
          Swal.fire({
            icon: 'warning',
            title: `${error.error.Message}`,
            confirmButtonText: 'Ok'
          });
        })}
}

  TaskState(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  SaveTaskState(task:any,stage:any)
  {
      this.updateStage.task_Id= task.task_Id;
      this.updateStage.Stage= stage
       this._service.UpdateTaskStageService(this.updateStage).subscribe(resp=>{
     this.GetAllTask();
    })
  }
  
  openDialog(task: any): void {
    const dialogRef = this.dialog.open(TaskdetaildilogComponent, {
      data: {...task}
    });
    dialogRef.afterClosed().subscribe(result => {
    this.GetAllTask()
    this.route.navigate([], {
      queryParams: {
        taskid: null 
      }
    });
    });
  }


}
