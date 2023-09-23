import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BottomSheetService {
SeletedDateData:any;
  constructor() { }

  SetDataInSheet(data:any)
  {
    this. SeletedDateData=data;
  }
  GetDataFromSheetService()
  {
    return this.SeletedDateData;
  }
}
