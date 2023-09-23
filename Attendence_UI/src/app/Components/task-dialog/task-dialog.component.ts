import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';
import { Router,ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/Classes/task';
import { navigateUrl } from 'src/app/Common/APIUrls';
import { RegisterService } from 'src/app/Services/register.service';
import { TaskServiceService } from 'src/app/Services/task-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {
  project?: any[];
  taskid:any;
  taskdata: Task = new Task();
  minDate?:Date
  constructor(private _formBuilder: FormBuilder, private _service: TaskServiceService, public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any, private route: Router, private Formbuilder: FormBuilder,private router: ActivatedRoute,
    private registerservice:RegisterService) {this.minDate=new Date }

  ngOnInit(): void {
    this.GetAllUser();
    this.GetAllProjects();
  }
  GetAllUser() {
    this._service.GetUserService().subscribe(
      (response) => {
        this.dialogData = response
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
  GetAllProjects() {
    this._service.GetProjectService().subscribe(
      (response) => {
        this.project = response
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
  OnSave() {
    this.taskdata.currentUserId= this.registerservice.GetUserIdfromStorage();
    this._service.CreateService(this.taskdata).subscribe(
      (response) => {
        this.route.navigate([navigateUrl.Task])
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

  isSaveButtonDisabled(): boolean {
    return !this.taskdata.applicationUserId || !this.taskdata.projectId ||
      !this.taskdata.task_Name || !this.taskdata.taskDiscription ||
      !this.taskdata.taskPriority || !this.taskdata.taskStart ||
      !this.taskdata.taskEnd;
  }

}


