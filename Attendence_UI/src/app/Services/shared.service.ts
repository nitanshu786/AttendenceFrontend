import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private triggerAttendenceLoad= new Subject<void>();
  constructor() { }

  TriggerAttendeneLoasd$()
  {
   return this.triggerAttendenceLoad.asObservable();
  }
  EmitAttendenceLoad(){
   this.triggerAttendenceLoad.next();
  }
}
