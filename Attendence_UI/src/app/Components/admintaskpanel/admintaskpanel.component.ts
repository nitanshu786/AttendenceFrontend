import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskServiceService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-admintaskpanel',
  templateUrl: './admintaskpanel.component.html',
  styleUrls: ['./admintaskpanel.component.scss']
})
export class AdmintaskpanelComponent implements OnInit {
  displayedColumns: string[] = ['UserName', 'Project', 'Task-Name', 'Task-Priority', 'Task-Discription', 'Start', 'End'];
  dataSource = new MatTableDataSource<any>();
  constructor(private service: TaskServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.GetAllAssignedTask();
  }
  openDialog() {
    const dialogRef = this.dialog.open(TaskDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.GetAllAssignedTask();
    });
  }
  GetAllAssignedTask() {
    this.service.GetAllAssignedTaskService().subscribe(
      (response) => {
        this.dataSource.data = response
        console.log(this.dataSource);

      },
      (err) => { alert(err) }
    )
  }

}
