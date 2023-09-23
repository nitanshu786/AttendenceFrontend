import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { RegisterService } from './register.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BaseRouting, ConstantUrl } from '../Common/APIUrls';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class JwtActiveGuardService implements CanActivate {
  constructor(private RegisterService: RegisterService, private router:Router, private jwthelper: JwtHelperService) { }
  canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean {
    if (this.RegisterService.isAuthentication()) {
      return true;
    }
    else {
       this.RegisterService.redirectUrl= state.url
      this.router.navigateByUrl(BaseRouting.LoginRoute)
      return false;
    }
  }
}
