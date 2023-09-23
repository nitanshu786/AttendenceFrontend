import { Component,OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { BottomSheetService } from 'src/app/Services/bottom-sheet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attendence-bootom-sheet',
  templateUrl: './attendence-bootom-sheet.component.html',
  styleUrls: ['./attendence-bootom-sheet.component.scss']
})
export class AttendenceBootomSheetComponent implements OnInit {
  sharedData:any;
  constructor(private _bottomSheetRef: MatBottomSheetRef<AttendenceBootomSheetComponent>,private _service:BottomSheetService) { }

  ngOnInit(): void {
    debugger
   return this.sharedData=this. _service.GetDataFromSheetService()

  }
 
}
