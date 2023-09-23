import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterService } from './register.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor {
  constructor(private Service: RegisterService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser =  "" ;
    var currentUserSession = localStorage.getItem(this.Service.SessionItem);
    if (currentUserSession != null) {
      currentUser = JSON.parse(currentUserSession);
    }
    req = req.clone({
      url:`${environment.apiUrl+req.url}`,
      setHeaders: {
        Authorization: "Bearer " + currentUser,
        'Content-Type': 'application/json'
      }
    });
    return next.handle(req);
   
  }

}

