import { ApplyLeaveComponent } from './Components/apply-leave/apply-leave.component';
import { LeavebalanceComponent } from './Components/leavebalance/leavebalance.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TaskComponent } from './Components/task/task.component';
import { RegisterComponent } from './Components/register/register.component';
import { AttendenceComponent } from './Components/attendence/attendence.component';
import { LogComponent } from './Components/log/log.component';
import { LoginComponent } from './Components/login/login.component';
import { JwtActiveGuardService } from './Services/jwt-active-guard.service';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { AllTaskDropComponent } from './Components/all-task-drop/all-task-drop.component';
import { BaseRouting } from './Common/APIUrls';
import { AttendenceCalenderComponent } from './Components/attendence-calender/attendence-calender.component';
import { EmailconfirmationComponent } from './Components/emailconfirmation/emailconfirmation.component';
import { AdmintaskpanelComponent } from './Components/admintaskpanel/admintaskpanel.component';

const routes: Routes = [
  { path: '', redirectTo: BaseRouting.LoginRoute, pathMatch: 'full' },
  { path: BaseRouting.LoginRoute, component: LoginComponent },
  { path: BaseRouting.RegisterRoute, component: RegisterComponent },
  { path: BaseRouting.EmailConfirmation, component: EmailconfirmationComponent },

  {
    path: BaseRouting.DashboardRoute,canActivate: [JwtActiveGuardService],
    children: [
      { path: '', redirectTo: BaseRouting.HomeRoute, pathMatch: 'full' },
      {
        path: BaseRouting.HomeRoute, component: HomeComponent,
        children: [
          { path: '', redirectTo: BaseRouting.HomeRoute, pathMatch: 'full' },
          { path: BaseRouting.TaskRoute, component: TaskComponent },
          { path: BaseRouting.AttendenceRoute, component: AttendenceComponent},
          { path: BaseRouting.LogsRoute, component: LogComponent },
          { path: BaseRouting.Alltask, component: AllTaskDropComponent },
          { path: BaseRouting.AttendenceCalender, component: AttendenceCalenderComponent },
          { path: BaseRouting.LeaveBalnce, component: LeavebalanceComponent },
          { path: BaseRouting.ApplyLeave, component: ApplyLeaveComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
