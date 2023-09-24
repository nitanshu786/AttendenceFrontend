import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { TaskComponent } from './Components/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AttendenceComponent } from './Components/attendence/attendence.component';
import { LogComponent } from './Components/log/log.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './Components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { RegisterService } from './Services/register.service';
import { IntercepterService } from './Services/intercepter.service';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TaskDialogComponent } from './Components/task-dialog/task-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { AllTaskDropComponent } from './Components/all-task-drop/all-task-drop.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskdetaildilogComponent } from './Components/taskdetaildilog/taskdetaildilog.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AttendenceCalenderComponent } from './Components/attendence-calender/attendence-calender.component';
import { AttendenceBootomSheetComponent } from './Components/attendence-bootom-sheet/attendence-bootom-sheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatGridListModule} from '@angular/material/grid-list';
import { EmailconfirmationComponent } from './Components/emailconfirmation/emailconfirmation.component';
import { AdmintaskpanelComponent } from './Components/admintaskpanel/admintaskpanel.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { TimeLabelPipe } from './Pipes/time-label.pipe';
import { LeavebalanceComponent } from './Components/leavebalance/leavebalance.component';
import { ApplyLeaveComponent } from './Components/apply-leave/apply-leave.component';
import { DecodePipe } from './Pipes/decode.pipe';

// npm install ngx-extended-pdf-viewer

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    TaskComponent,
    AttendenceComponent,
    LogComponent,
    LoginComponent,
    TaskDialogComponent,
    AllTaskDropComponent,
    SidenavComponent,
    ToolbarComponent,
    TaskdetaildilogComponent,
    AttendenceCalenderComponent,
    AttendenceBootomSheetComponent,
    EmailconfirmationComponent,
    AdmintaskpanelComponent,
    TimeLabelPipe,
    LeavebalanceComponent,
    ApplyLeaveComponent,
    DecodePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatStepperModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    DragDropModule,
    MatTableModule,
    MatExpansionModule,
    CdkDropList,
    MatBottomSheetModule,
    CdkDrag,
    MatGridListModule,
    MatPaginatorModule,
    MatButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
        return localStorage.getItem("CurrentUsers") ? JSON.parse(localStorage.getItem("CurrentUsers") as string): null;
        }
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepterService,
      multi: true
    },
   
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
