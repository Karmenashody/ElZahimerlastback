import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient, private route: Router) {
    if (localStorage.getItem('userInfo') != null) {
      this.saveData();
    }
  }
  userdata = new BehaviorSubject(null);
  saveData() {
    let encodeData = JSON.stringify(localStorage.getItem('userInfo'));
    this.userdata.next(jwtDecode(encodeData));
    // console.log(this.userdata);
    return (this.userdata)
  }

  logout() {
    localStorage.removeItem('userInfo')
    this.userdata.next(null);
    this.route.navigate(['/Login']);

  }
  RegisterHelper(formDta: any): Observable<any> {

    return this._httpClient.post("http://localhost:5218/api/Account/RegisterHelper", formDta)
  }
  RegisterPatient(formDta: any): Observable<any> {
    return this._httpClient.post("http://localhost:5218/api/Account/RegisterPatient", formDta)
  }
  Login(formDta: any): Observable<any> {
    return this._httpClient.post("http://localhost:5218/api/Account/Login", formDta)
  }
  calscore(dd:any): Observable<any> {
    return this._httpClient.post("http://localhost:5218/api/Test/GetFinalScore", dd)
  }
  currentuser: any;
  gettokenID(): any {
  //   let token: any = localStorage.getItem("userInfo");
  //   this.currentuser = jwtDecode(token);
  //   console.log(this.currentuser);
  //   var nameIdentifier = this.currentuser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  //   console.log(nameIdentifier);
  //   return nameIdentifier;
  try{
    let token: any = localStorage.getItem("userInfo");
    this.currentuser = jwtDecode(token);
    console.log(this.currentuser);
    var nameIdentifier = this.currentuser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    console.log(nameIdentifier);
    return nameIdentifier;
    }
    catch(e){
      localStorage.clear() 
      console.log(e)}
    }
  gettokenRole(): string {
    let token: any = localStorage.getItem("userInfo");
    this.currentuser = jwtDecode(token);
    var nameIdentifier = this.currentuser['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    return nameIdentifier;
  }

  

}
