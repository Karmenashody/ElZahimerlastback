import { Component } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';
import { RejectedComponent } from './rejected/rejected.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-app';
  // constructor(private  dialogRef : MatDialog){}
  // openDialog(){
  //   this.dialogRef.open(RejectedComponent,{
  //     data : {
  //       name : 'Samuel'
  //     }
  //   });
  // }
}
