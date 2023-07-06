import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {proposal} from '../Interfaces/proposal'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private _HttpClient: HttpClient) {}
  addProposal(propsal: proposal): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:2167/api/HelperRequest/AddHelperRequest`,
      propsal
    );
  }
  // show jobs for helper
  ShowJobs(): Observable<any> {
    return this._HttpClient.get(`http://localhost:2167/api/HelperRequest/GetAllHelperRequest`);
  }
getJobDetails(id:any): Observable<any> {
    return this._HttpClient.get(`http://localhost:2167/api/HelperRequest/GetAllHelperRequest/${id}`);
  }
}
