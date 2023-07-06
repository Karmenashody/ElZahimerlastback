import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class patientOrHelperGuard implements CanActivate {
  constructor(private auth:AuthService)
  {

  }
  canActivate():any
  {
      if(this.auth.gettokenRole()=="IsHelper"){
        return 1;
      }
      else if(this.auth.gettokenRole()=="IsPatient"){
        return 2;
      }
      else {
        return 3;
      }
    }
  }