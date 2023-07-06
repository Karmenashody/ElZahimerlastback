import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashboredServiceService } from '../Services/dashbored-service.service';
import { RequestHelp } from '../Interfaces/RequestHelp';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.css'],
})
export class AddProposalComponent implements OnInit {
  id: any = this._AuthService.gettokenID();
  formdata: FormGroup = new FormGroup({
    userId: new FormControl(this.id), //3
    discription: new FormControl(null), /// nedd 20-25
    date: new FormControl('2023-06-10T15:46:54.719Z'), //23-3-2023
  });
  request: RequestHelp = { discription: '', date: new Date(), userId: '' };
  constructor(
    private _DashboredServiceService: DashboredServiceService,
    private _AuthService: AuthService,
    private _Router: Router
  ) {}
  ngOnInit(): void {
    //this.getHelperRequest();
  }
  submitTheRequest(obj: any) {
    console.log('aaaaa');
    console.log(obj);
    this.request.userId = this.id;
    this.request = obj;
    this._DashboredServiceService.AddJob(this.request).subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
    });
    this._Router.navigate(['/HomePage']);
  }

  // helperRequests: any[] = [];
  // getHelperRequest() {
  //   this._DashboredServiceService.getHelperRequest().subscribe({
  //     next: (data) => (this.helperRequests = data),
  //     error: (err) => console.log(err),
  //   });
  //}
}
