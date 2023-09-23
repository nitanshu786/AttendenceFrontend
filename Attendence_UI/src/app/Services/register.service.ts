import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, map } from 'rxjs';
import jwt_decode from "jwt-decode";
import { TaskServiceService } from './task-service.service';
import { BaseRouting, ConstantUrl, navigateUrl } from '../Common/APIUrls';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public readonly UserId = "UserData"
  public readonly SessionItem = "CurrentUsers"
  redirectUrl:string|null=null
  private IsLogin=false
  constructor(private httpclient: HttpClient, private route: Router, private jwthelper: JwtHelperService) { }

  Registerservice(reg: any): Observable<any> {
    return this.httpclient.post<any>(`${ConstantUrl.Register}`, reg)
  }
  EmailConfirmation(userid:string, token:any)
  {
    return this.httpclient.get(`${ConstantUrl.EmailConfirmation}${userid}&token=${token}`)
  }

  LoginService(log: any): Observable<any> {
    return this.httpclient.post<any>(`${ConstantUrl.Login}`, log, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          const tokenData = response.body;
          let decodetoken = jwt_decode(tokenData.token);
          localStorage.setItem(this.UserId, JSON.stringify(decodetoken));
          localStorage.setItem(this.SessionItem, JSON.stringify(tokenData.token));
          if(this.redirectUrl)
          {
            this.route.navigateByUrl(this.redirectUrl)
            this.redirectUrl=null;
            this.IsLogin=true
            return response;
          }
          else
          this.route.navigate([navigateUrl.Attendence]);
            return response;
          
        
        }))
  }

  logout() {
    this.IsLogin=false
    localStorage.removeItem(this.SessionItem)
    localStorage.removeItem(this.UserId);
    this.route.navigate([navigateUrl.Login])
  }
  LoginStatus(){
    return this.IsLogin
  }

  public isAuthentication(): boolean {
    if (this.jwthelper.isTokenExpired())return false;
    return true;
  }
  GetUserIdfromStorage():Observable<any>
  {
    const status = localStorage.getItem(this.UserId) as any;
    const user= JSON.parse(status);
    return user.UserId
  }

}
