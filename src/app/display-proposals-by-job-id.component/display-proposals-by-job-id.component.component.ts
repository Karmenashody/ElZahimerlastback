import { Component } from '@angular/core';
import { DashboredServiceService } from '../Services/dashbored-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { proposal } from '../Interfaces/proposal';
import { Hired } from '../Interfaces/Hired';
import { AuthService } from '../Services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-display-proposals-by-job-id.component',
  templateUrl: './display-proposals-by-job-id.component.component.html',
  styleUrls: ['./display-proposals-by-job-id.component.component.scss'],
})
export class DisplayProposalsByJobIdComponentComponent {

  hiring:Hired={
    helperid :'',
      patientid :'',
          requestid :0,
  }

  ProposalsToSpecificJob: proposal[] = [
    {
      price: 0,
      discription: '',
      date: new Date(),
      userId: '',
      helpRequestId: 0,
      phoneNumber:''
    },
  ];
  proposal: proposal[] = [];
  id: any;
  constructor(
    private _DashboredServiceService: DashboredServiceService,
    private route: ActivatedRoute,
    private AuthService:AuthService,
    private router:Router,
    private toast:ToastrService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.id);
    this._DashboredServiceService.DisplayProposalWithJobId(this.id).subscribe({
      next: (data) => (this.proposal = data,
        console.log(this.proposal)),
      error: (err) => console.log(err),
    });
  }
  sendToHiringTable(reqid:any,helperid:any){

    this.hiring.requestid=reqid;
    this.hiring.helperid=helperid;
    this.hiring.patientid=this.AuthService.gettokenID();
    console.log(this.hiring)
    this.toast.success("Hired Successfully!")

    this._DashboredServiceService.sendDataToHiredTable(this.hiring).subscribe({
      next:(data)=>(console.log(data),"rrrrrrr"),
      error:(err)=>(console.log(err))
    })
    this.router.navigate(['/HomePage'])
  }
}
