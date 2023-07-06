import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboredServiceService } from 'src/app/Services/dashbored-service.service';
import {lastproposal} from '../app/Interfaces/lastproposal'
import { AuthService } from 'src/app/Services/auth.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-apply-for-job',
  templateUrl: './apply-for-job.component.html',
  styleUrls: ['./apply-for-job.component.scss']
})
export class ApplyForJobComponent implements OnInit{
  Uid:string='';
  RequestId:number=0;
  constructor(private dash:DashboredServiceService,private route:ActivatedRoute, private builder: FormBuilder,private AuthService
:AuthService ,private toast:ToastrService,private router: Router){}
  jobId:any
  job:any
  err:any
  // formdata: FormGroup = new FormGroup({
  //   price: new FormControl(null), //3
  //   discription: new FormControl(null), /// nedd 20-25
  //   date: new FormControl(new Date), //23-3-2023
  // });
  
  formda = this.builder.group({
    price: new FormControl(null),
    discription : new FormControl(null),
    date:new FormControl(new Date),
    phoneNumber:new FormControl(null)
  })
  proposal:lastproposal={ price:0,
    discription: '',
    date: new Date,
    userId: '',
    phoneNumber:'',
    helpRequestId :0}
    submitTheArtical(formda:FormGroup) {
    const formData =new FormData();

    formData.append('price',formda.get('price')?.value);
    formData.append('discription',formda.get('discription')?.value);
    formData.append('phoneNumber',formda.get('phoneNumber')?.value);
    this.proposal.date=new Date;
    this.proposal.price=formda.get('price')?.value;
    this.proposal.discription=formda.get('discription')?.value;
    this.proposal.phoneNumber=formda.get('phoneNumber')?.value;
    this.proposal.userId=this.Uid;
    this.proposal.helpRequestId=this.RequestId;
    console.log(this.proposal);

    console.log(formda)
    console.log("vvvvvvv")
    this.dash.applyForJob(this.proposal).subscribe({
      next: (data) => {
        this.toast.success("Proposal Successuflly subimted")
        console.log("Data Successuflly subimted",data);
        this.router.navigate(['/HomePage'])
      },
      error: (e) => {
        console.log(e)
        // this.toast.error("error")
      },
    })

  
    
  }

 ngOnInit(): void {
  this.jobId=this.route.snapshot.paramMap.get("id");
  console.log(this.jobId)
  this.RequestId=this.jobId;
  this.Uid=this.AuthService.gettokenID();
 this.dash.GetIDbyJob(this.jobId).subscribe({
  next: data => {
    this.job = data;
    console.log(this.job)
  },
  error: error => this.err = error
})
 }
}
