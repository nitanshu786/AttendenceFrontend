import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, map } from 'rxjs';
import { ConstantUrl } from '../Common/APIUrls';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {
  private triggerAttendenceLoad= new Subject<void>();
    constructor(private httpclient: HttpClient, private route: Router) { }
  PunchInService(applicationUserId: any): Observable<any> {
    return this.httpclient.post<any>(`${ConstantUrl.PunchIn}${applicationUserId}`,{})
  }

  PunchOutService(applicationUserId: any): Observable<any> {
    return this.httpclient.post<any>(`${ConstantUrl.PunchOut}${applicationUserId}`,{})
  }

  PunchingData(): Observable<any> {
    return this.httpclient.get<any>(`${ConstantUrl.GetAttendence }`)
  }
  AttendenceDataForCalender(): Observable<any> {
    return this.httpclient.get<any>(`${ConstantUrl.GetAttendence }`)
  }
  PunchStatus(userid: any): Observable<any> {
    return this.httpclient.get<any>(`${ConstantUrl.GetAttendenceStatus}${userid}`);
  }
  

}


