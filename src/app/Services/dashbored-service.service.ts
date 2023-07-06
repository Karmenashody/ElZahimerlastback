import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestHelp } from '../Interfaces/RequestHelp';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
//foooooor PATIENT
@Injectable({
  providedIn: 'root',
})
export class DashboredServiceService {
  constructor(private _HttpClient: HttpClient) {}
  //patient add job
  AddJob(request: any): Observable<any> {
    return this._HttpClient.post(
      `http://localhost:5218/api/HelperRequest/AddHelperRequest`,
      request
    );
  }

  // get job by user token/owner
  getHelpRequestByUserToken(id: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:5218/api/HelperRequest/GetAllHelperRequestByUserID/${id}`
    );
  }
  getProposal(): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:5218/api/HelperProposal/GetAllHelperProposel`
    );
  }
  getProposalByJob(id: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:5218/api/HelperProposal/GetAllHelperProposel/${id}`
    );
  }

  DeleteProposal(id: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:5218/api/HelperProposal/DeleteHelperProposel?id=${id}`
    );
  }
  patientSeeHisOwnJobs(id: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:5218/api/HelperRequest/GetAllHelperRequestByUserID/${id}`
    );
  }
  DeleteJob(id: any): Observable<any> {
    return this._HttpClient.delete(
      `http://localhost:5218/api/HelperRequest/DeleteHelperRequest?id=${id}`
    );
  }
  DisplayTestWithNameAndId(): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:5218/api/Test/DisplayTestsWithName`
    );
  }
  DisplayProposalWithJobId(jobid: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:5218/api/HelperProposal/getallProposalByJobId?jobId=${jobid} `
    );
  }

  ShowaDetailsrticals(form: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:5218/api/Artical/GetAllArticals`
    );
  }
  ShowOneArtical(id: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:5218/api/Artical/GetByTitle/${id}`
    );
  }
  DisplayQuestionByExamId(testid: any): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:5218/api/Test/GetAllQuestions?testId=${testid}`
    );
  }

  Getalljops(): Observable<any> {
    return this._HttpClient.get(
      `http://localhost:5218/api/HelperRequest/GetAllHelperRequest`
    );
  }

  GetIDbyJob(id:any): Observable<any>{
    return this._HttpClient.get(
      `http://localhost:5218/api/HelperRequest/GetJobById/${id}`
    );
  }
  getJobnotapplied(helperID:any): Observable<any>{
    return this._HttpClient.get(
      ` http://localhost:5218/api/HelperRequest/getTheJobToUserThatNotApplyiedfor?HelperId=${helperID}`
    );
  }
  applyForJob(proposal:any): Observable<any>{
    return this._HttpClient.post(
      `http://localhost:5218/api/HelperProposal/ApplyForJob`,proposal
    );
  }

  getTestObject(id:any):Observable<any>
  {
    return this._HttpClient.get(
      `http://localhost:5218/api/Test/GetTestById?id=${id}`
    );
  }
  sendDataToHiredTable(hired:any): Observable<any>{
    return this._HttpClient.post(
      `http://localhost:5218/api/HelperProposal/HireTheHelper`,hired
    );
  }
  
}
