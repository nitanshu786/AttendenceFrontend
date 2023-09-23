import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationEnd, Router } from '@angular/router';
import { AttendenceService } from 'src/app/Services/attendence.service';
import { SharedService } from 'src/app/Services/shared.service';


@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {
  displayedColumns: string[] = ['date', 'punchIn', 'punchOut', 'duration'];
  dataSource = new MatTableDataSource<any[]>();
  constructor(private service: AttendenceService,private sharedservice:SharedService) { }

  ngOnInit() {
  this. LoadAttendenceData();
  this.sharedservice.TriggerAttendeneLoasd$().subscribe(()=>{
    this.LoadAttendenceData()
  })
  }

  LoadAttendenceData(){
    debugger
    this.service.PunchingData().subscribe(attendence=>{
      this.dataSource.data = attendence;
     })
  }
  
}


