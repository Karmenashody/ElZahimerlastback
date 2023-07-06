import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class adminGuard implements CanActivate {
  constructor(private Auth:AuthService)
  {

  }
  canActivate()
  {
      if(this.Auth.gettokenRole()=="Admin"){
        return true;
      }
      else{
        return false;
      }
    }
  }
