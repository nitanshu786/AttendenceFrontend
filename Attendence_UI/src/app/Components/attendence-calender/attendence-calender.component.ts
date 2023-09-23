import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import { AttendenceBootomSheetComponent } from '../attendence-bootom-sheet/attendence-bootom-sheet.component';
import { AttendenceService } from 'src/app/Services/attendence.service';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { BottomSheetService } from 'src/app/Services/bottom-sheet.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-attendence-calender',
  templateUrl: './attendence-calender.component.html',
  styleUrls: ['./attendence-calender.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AttendenceCalenderComponent implements OnInit {
  selectedDates: Date[] = [];
  attendanceData: any[] = [];
  IsDataLoaded = false
  currentDate = new Date();
  currentdate = this.currentDate.getDate()
  currentYear = this.currentDate.getFullYear();
  currentMonth = this.currentDate.getMonth();
  currentDay = this.currentDate.getDate();
 
  constructor(private dialog: MatDialog, private _bottomSheet: MatBottomSheet,
    private attendenceservice: AttendenceService, private _servce: BottomSheetService) {  }

  ngOnInit(): void {
    this.fetchAttendanceData()

  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
  
    const cellYear = cellDate.getFullYear();
    const cellMonth = cellDate.getMonth();
    const celldate = cellDate.getDate()
    const cellDayOfWeek = cellDate.getDay();

    if (view === 'month' && (cellYear < this.currentYear || (cellYear === this.currentYear && cellMonth <= this.currentMonth))) {
      const formattedDate = this.formatDate(cellDate);
      if (this.attendanceData && this.attendanceData.length > 0) {
        debugger
        const attendanceEntry = this.attendanceData.find(d => d.dateFormating === formattedDate);
        if (attendanceEntry) {
          if (attendanceEntry.status === "Present") return 'example-custom-date-class-green';
          else if (attendanceEntry.status === "Absent") return 'example-custom-date-class-red';
          else if (attendanceEntry.status === "Halfday") return 'example-custom-date-class-yellow';
        }
        else if (cellDayOfWeek === 6 || cellDayOfWeek === 0) return 'example-custom-date-class-holiday';
        else if (celldate < this.currentdate && cellMonth == this.currentMonth && cellYear === this.currentYear) return ['example-custom-date-class-red'];
        else if (celldate >= this.currentdate && cellMonth == this.currentMonth && cellYear === this.currentYear) return '';
        else if (cellYear < this.currentYear || (cellYear === this.currentYear && cellMonth <= this.currentMonth)) return 'example-custom-date-class-red';
        else return 'example-custom-date-class-red';
      }
      return '';
    }

    return '';
  };

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  fetchAttendanceData() {
    this.attendenceservice.PunchingData().subscribe(data => {
      this.attendanceData = data;
      this.IsDataLoaded = true;
      console.log(this.attendanceData);

    },
      (err) => { alert(err.message) }
    )
  }

  openBottomSheet(): void {
    this._bottomSheet.open(AttendenceBootomSheetComponent);
  }


  onSelect(event: any) {
    debugger
    const cellcurrentDate = event.getDate()
    const cellcurrentMonth = event.getMonth()
    const cellcurrentYear = event.getFullYear()
    const celleventDayOfWeek = event.getDay();
    if ( cellcurrentMonth <= this.currentMonth) {
      if(cellcurrentDate>this.currentdate && cellcurrentMonth==this.currentMonth && cellcurrentYear==this.currentYear){ return undefined;}
      const selectedDate = this.formatDate(event)
      if (this.attendanceData && this.attendanceData.length > 0) {
        const attendance = this.attendanceData.find(d => d.dateFormating === selectedDate);
        if (attendance) {
          this._servce.SetDataInSheet(attendance)
          this.openBottomSheet()
        }
        else if (celleventDayOfWeek === 6 || celleventDayOfWeek === 0) {
          Swal.close();
          Swal.fire({
            icon: 'info',
            title: `Holiday on ${selectedDate} `,
            confirmButtonText: 'Ok'
          }
          )
        }
        else {
          Swal.close();
          Swal.fire({
            icon: 'warning',
            title: `Absent on ${selectedDate} `,
            confirmButtonText: 'Ok'
          });
        }
      }
    }
  }



}
