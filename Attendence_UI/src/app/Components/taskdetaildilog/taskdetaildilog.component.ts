import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Register } from 'src/app/Classes/register';
import { EditTask, Task } from 'src/app/Classes/task';
import { navigateUrl } from 'src/app/Common/APIUrls';
import { RegisterService } from 'src/app/Services/register.service';
import { TaskServiceService } from 'src/app/Services/task-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-taskdetaildilog',
  templateUrl: './taskdetaildilog.component.html',
  styleUrls: ['./taskdetaildilog.component.scss']
})
export class TaskdetaildilogComponent implements OnInit {
  taskdata: EditTask = new EditTask();
  dialogdata: any[] = []
  panelOpenState = false;
   minDate?:Date
  constructor(public dialogRef: MatDialogRef<TaskdetaildilogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _service: TaskServiceService, private route: Router,
    private registerservice: RegisterService) { this.taskdata = data; this.minDate=new Date}

  ngOnInit(): void {
    this.GetAllUser();
  }


  GetAllUser() {
    this._service.GetUserService().subscribe(
      (response) => {
        this.dialogdata = response
      },
      (error) => {
        Swal.close();
        Swal.fire({
          icon: 'warning',
          title: `${error.error.Message}`,
          confirmButtonText: 'Ok'
        });

      }
    )
  }
  OnUpdate() {
    debugger
    this.taskdata.currentUserId = this.registerservice.GetUserIdfromStorage();
    this._service.UpdateService(this.taskdata).subscribe(
      (response) => {
        this.route.navigate([navigateUrl.TaskDilog])
      },
      (error) => {
        Swal.close();
        Swal.fire({
          icon: 'warning',
          title: `${error.error.Message}`,
          confirmButtonText: 'Ok'
        });
      }
    )
  }

}
