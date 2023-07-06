import { Component } from '@angular/core';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private admin:AdminService){}

  listOfAds:any;
  hideDiv= false;
  hideDiv2= false;


  messagewelcome:any;

  ngOnInit(): void {

    // homepage();
    // myFunction()
    //ads
    // const divElement = document.getElementById('myDiv') as HTMLDivElement;
    this.admin.getschedules(5).subscribe({
      next:response=>this.listOfAds=response
    })
    //welcome
    this.admin.getscheduleswelcome(.3).subscribe({
      next:response=>this.messagewelcome=response
    })
  }

}
