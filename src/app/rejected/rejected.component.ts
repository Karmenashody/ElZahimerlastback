import { Component, Inject, OnInit } from '@angular/core';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.scss']
})
export class RejectedComponent implements OnInit{

  // constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
  // }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
