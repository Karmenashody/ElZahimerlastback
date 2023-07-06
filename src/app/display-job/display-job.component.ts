import { Component, OnInit } from '@angular/core';
import { DashboredServiceService } from '../Services/dashbored-service.service';
import { AuthService } from '../Services/auth.service';
AuthService
@Component({
  selector: 'app-display-job',
  templateUrl: './display-job.component.html',
  styleUrls: ['./display-job.component.css']
})
export class DisplayJobComponent implements OnInit{
  Uid:any;
  constructor(private dash:DashboredServiceService,private AuthService:AuthService){}
  jobs:any
  err:any
ngOnInit(): void {
  this.Uid=this.AuthService.gettokenID();
  this.dash.getJobnotapplied(this.Uid).subscribe(
    {
      next:data=>{
            this.jobs=data
            console.log(this.jobs)
         
          },
          error: error => this.err = error
          
        }
  )
  }
  
  // this.dash.Getalljops().subscribe({
  //   next:data=>{
  //     this.jobs=data
  //     console.log(this.jobs)
  //     //  for(let artical of this.allarticals){
  //     //   artical.image='data:image/png;base64,'+ artical.image;
  //     //  }
  //   },
  //   error: error => this.err = error
    
  // })


}
