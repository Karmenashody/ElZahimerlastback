import { Component } from '@angular/core';
import { Jobs } from '../Interfaces/Jobs';
import { DashboredServiceService } from '../Services/dashbored-service.service';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-my-job',
  templateUrl: './my-job.component.html',
  styleUrls: ['./my-job.component.scss'],
})
export class MyJobComponent {
  myjob: Jobs[] = [{ id: 0, discription: '', date: new Date(), userId: '' }];
  id: any = this._AuthService.gettokenID();
  constructor(
    private _DashboredServiceService: DashboredServiceService,
    private _AuthService: AuthService
  ) {}
  ngOnInit(): void {
    console.log(this.id);
    this._DashboredServiceService.patientSeeHisOwnJobs(this.id).subscribe({
      next: (data) => (this.myjob = data,
        console.log(this.myjob))
    ,
      error: (err) => console.log(err),
    });
  }
}
