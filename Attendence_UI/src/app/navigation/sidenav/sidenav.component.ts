import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  constructor(private registerservice: RegisterService) { }
  

  ngOnInit(): void {
    this.IsLoggedIn()
  }
  IsLoggedIn(){
  return this.registerservice.LoginStatus()
  }
  signout() {
    this.registerservice.logout();
  }

}
