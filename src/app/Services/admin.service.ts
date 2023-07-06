import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import {question} from '../Interfaces/question'
import { RequestHelp } from '../Interfaces/RequestHelp';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { pendUser } from '../Interfaces/pendUser';
import { Artical } from '../Interfaces/Artical';
import { User } from '../Interfaces/User';
import { AuthService } from './auth.service';

const x=0;

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // x=0;
  // private messageSource$ = new Subject<string>();
  // message$ = this.messageSource$.asObservable();
  // private data = 'Hello from service!';

  private dataSource: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  data: Observable<number> = this.dataSource.asObservable();
  
  // dataByEvent: EventEmitter<string> = new EventEmitter<string>();

  // response: any = {};
  // private messageResponse = new BehaviorSubject(this.response);
  // currentResponse = this.messageResponse.asObservable();

  constructor(private http:HttpClient,private auth:AuthService) { }
  AddTest(test: any): Observable<any> {
    return this.http.post(`http://localhost:5218/api/Test/AddTest`,test);
  }
  getAllTests():Observable<any>{
    return this.http.get(`http://localhost:5218/api/Test/GetAllTests`);
  }
  getTestByID(id:any):Observable<any>{
    return this.http.get(`http://localhost:5218/api/Test/GetTestById?id=${id}`,id);
  }

  deleteTest(id:any):Observable<any>{
    return this.http.delete(`http://localhost:5218/api/Test/DeleteTest?id=${id}`,id);
  }
  AddQuestion(question:any):Observable<any>{
    return this.http.post(`http://localhost:5218/api/Test/AddQuestion`,question);
  }
  AddAnswer(answer:any):Observable<any>{
    return this.http.post(`http://localhost:5218/api/Test/Addanswer`,answer);
  }
  getAllQuestions(testId:any):Observable<any>{
    return this.http.get(`http://localhost:5218/api/Test/GetAllQuestions?testId=${testId}`,testId);
  }
  GetPendPatients(status:any):Observable<any>{
    return this.http.get(`http://localhost:5218/api/Admin/GetPendingPatients?status=${status}`,status);
  }
  GetPendHelpers():Observable<any>{
    return this.http.get(`http://localhost:5218/api/Admin/GetPendingHelpers`);
  }
  PendHelpers(pendUser:any):Observable<any>{
    return this.http.put(`http://localhost:5218/api/Admin/ApproveHelper`,pendUser);
  }
  PendPatients(pendUser:pendUser):Observable<any>{
    return this.http.put(`http://localhost:5218/api/Admin/ApprovePatient`,pendUser);
  }
  AddArtical(artical:any): Observable<any> { 
    return this.http.post(`http://localhost:5218/api/Artical/AddArtical`,artical ); 
  }

  //eman && reeem
  sendData(data: number) {
    this.dataSource.next(data);
  }

  //shahd && eman
  public Getuserobject(userId:string):Observable<User>{
    return this.http.get<User>(`http://localhost:5218/api/Chat/GetUserName?userId=${this.auth.gettokenID()}`);
  }
  getPatient(userId:string):Observable<User>{
    return this.http.get<User>(`http://localhost:5218/api/Admin/GetPatientDetalis?userId=${userId}`);
  }

  gethelper(userId:string):Observable<User>{
    return this.http.get<User>(`http://localhost:5218/api/Admin/GetHelperDetalis?userId=${userId}`);
  }

  //promo

  listOfAds=[
    "Be physically active every day",
    "Stay mentally active",
    "Spend time with others",
    "Sleep well",
    "Eat a healthy diet",
    "Manage chronic health problems"
  ]
  welcomeMessage=[
    "Welcome to the Alzheimer's Caregivers Network. We are an independent not-for-profit 501(c)(3) organization that works to positively impact the lives of those caring for people with Alzheimer's disease.",
    "'We re committed to financial transparency, and we will work hard to ensure your donation will be used to bring the most help to as many Alzheimer's caregivers as possible."
  ]
  
  getschedules(intervtime :number):Observable<string> {
    return new Observable<string>((observer)=>{
      let counter=0;
      let timeads= setInterval(()=>{
        observer.next(this.listOfAds[counter]);
        counter++;
        if(counter==this.listOfAds.length){
          counter=0;
        }
      },intervtime*4000)
    })
  }
  getscheduleswelcome(intervtime :number):Observable<string> {
    return new Observable<string>((observer)=>{
      let counter=0;
      let timeads= setInterval(()=>{
        observer.next(this.welcomeMessage[counter]);
        counter++;
        if(counter==this.welcomeMessage.length){
          counter=1;
        }
      },intervtime*4000)
    })
  }



}
