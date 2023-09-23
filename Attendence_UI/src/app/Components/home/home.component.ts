import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AttendenceService } from 'src/app/Services/attendence.service';
import { RegisterService } from 'src/app/Services/register.service';
import Swal from 'sweetalert2';
import { AttendenceComponent } from '../attendence/attendence.component';
import { BaseRouting, navigateUrl } from 'src/app/Common/APIUrls';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  applicationUserId: any;
  UserAttendence: any[] = []
  punchstatus: any;
  Inactivestatus: any;

  constructor(private service: AttendenceService, private registerservice: RegisterService, private route: Router, private sharedservice: SharedService) {
    this.applicationUserId = this.registerservice.GetUserIdfromStorage()
  }
  ngAfterViewInit(): void {
    this.service.PunchStatus(this.applicationUserId).subscribe(status => {
      this.punchstatus = status;
    })
    this.callLoadAttendenceData()
  }

  punchIn() {
    this.service.PunchInService(this.applicationUserId).subscribe(
      (response) => {
        this.ngAfterViewInit();
        this.route.navigate([navigateUrl.Attendence]);
      },
      (error) => {
        Swal.close();
        Swal.fire({
          icon: 'warning',
          title: 'Something went wrong',
          confirmButtonText: 'Ok'
        }
        )
      })
  }

  punchOut() {
    this.service.PunchOutService(this.applicationUserId).subscribe(
      (response) => {
        this.ngAfterViewInit();
        this.route.navigate([navigateUrl.Attendence]);

      },
      (error) => {
        Swal.close();
        Swal.fire({
          icon: 'warning',
          title: 'User already PunchOut',
          confirmButtonText: 'Ok'
        }
        )
      })
  }

  callLoadAttendenceData() {
    this.sharedservice.EmitAttendenceLoad();
  }

}
