
import { Component, OnInit } from '@angular/core';
import { RegisterService } from './Services/register.service';
import { AttendenceService } from './Services/attendence.service';
import { Router } from '@angular/router';
import { TaskComponent } from './Components/task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Attendence_UI';

  IsAuthentication: any;

  constructor(private service: AttendenceService, private registerservice: RegisterService, private route: Router) { }

  ngOnInit(): void {
    const items = sessionStorage.getItem(this.registerservice.SessionItem) as string
    const sessionvalue = JSON.parse(items)
    this.IsAuthentication = sessionvalue;

  }


}
