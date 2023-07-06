import { Component ,OnInit} from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { pendUser } from '../Interfaces/pendUser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pending-users',
  templateUrl: './pending-users.component.html',
  styleUrls: ['./pending-users.component.css']
})
export class PendingUsersComponent implements OnInit{
  constructor(private admin:AdminService,private toastr:ToastrService,public route:Router)
  {}
  patients:any[]=[]
  helpers:any[]=[]
  ngOnInit(): void {
    this.admin.GetPendPatients(0).subscribe((res)=>{
      this.patients=res;
      console.log(res)
      this.admin.GetPendHelpers().subscribe((data)=>{
        this.helpers=data
        console.log(data)
      })
  })
}
pending:pendUser={
  userId:'',
  status:2
}
ConfirmPatients(userId:any)
{
  this.pending.status=2;
  this.pending.userId=userId;
  this.admin.PendPatients(this.pending).subscribe({
    next: (beers) => {
      this.toastr.success("Successuflly confirmed")
      // this.route.navigate(['/PendingUsers']);
      this.ngOnInit();

      console.log("Successuflly confirmed")
    },
    error(err) {
      console.log("dddddd",err)
      // this.RegisterInvalid = true;
    }
  })

}
RejectPatients(userId:any){
  this.pending.status=1;
  this.pending.userId=userId;
  this.admin.PendPatients(this.pending).subscribe({
    next: (beers) => {
      this.toastr.success("Successuflly rejected")
      this.ngOnInit();

      console.log("Successuflly rejected")
    },
    error(err) {
      console.log("dddddd",err)
      // this.RegisterInvalid = true;
    }
  })
}



ConfirmHelpers(userId:any)
{
  this.pending.status=2;
  this.pending.userId=userId;
  this.admin.PendHelpers(this.pending).subscribe({
    next: (beers) => {
      this.toastr.success("Successuflly confirmed")
      // this.route.navigate(['/PendingUsers']);
      this.ngOnInit();

      console.log("Successuflly confirmed")
    },
    error(err) {
      console.log("dddddd",err)
      // this.RegisterInvalid = true;
    }
  })

}
RejectHelpers(userId:any){
  this.pending.status=1;
  this.pending.userId=userId;
  this.admin.PendHelpers(this.pending).subscribe({
    next: (beers) => {
      this.toastr.success("Successuflly rejected")
      this.ngOnInit();

      console.log("Successuflly rejected")
    },
    error(err) {
      console.log("dddddd",err)
      // this.RegisterInvalid = true;
    }
  })
}
ViewPatient(id:string){
  this.route.navigate(["view",id]);
}

ViewHelper(id:string){
  this.route.navigate(["viewHelper",id]);
}
}
