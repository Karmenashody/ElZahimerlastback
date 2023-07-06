import { Component } from '@angular/core';
import { DashboredServiceService } from '../Services/dashbored-service.service';
import { DisplayTestNameWithID } from '../Interfaces/DisplayTestNameWithID';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-display-test',
  templateUrl: './display-test.component.html',
  styleUrls: ['./display-test.component.scss'],
})
export class DisplayTestComponent {
  exam: DisplayTestNameWithID[] = [
    {
      id: 0,
      examName: '',
    },
  ];
  constructor(
    private _DashboredServiceService: DashboredServiceService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._DashboredServiceService.DisplayTestWithNameAndId().subscribe({
      next: (data) => (this.exam = data),
      error: (err) => console.log(err),
    });
  }
}
