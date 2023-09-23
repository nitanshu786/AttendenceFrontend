import { OnInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AttendenceService } from 'src/app/Services/attendence.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskServiceService } from 'src/app/Services/task-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})

export class TaskComponent implements OnInit {
  displayedColumns: string[] = ['UserName', 'Project', 'Task Name', 'Task Priority', 'Task Discription', 'Start', 'End'];
  dataSource = new MatTableDataSource<any>();
  constructor(private service: TaskServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.GetAssignedTask();
  }
  openDialog() {
    const dialogRef = this.dialog.open(TaskDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.GetAssignedTask();
    });
  }
  GetAssignedTask() {
    this.service.GetTasksAssignedService().subscribe(
      (response) => {
        this.dataSource.data = response
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





