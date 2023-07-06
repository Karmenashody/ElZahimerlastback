import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-resgisterhelper',
  templateUrl: './view-resgisterhelper.component.html',
  styleUrls: ['./view-resgisterhelper.component.scss']
})
export class ViewResgisterhelperComponent {
  constructor(private dash:AdminService,private route:ActivatedRoute,private router:Router){}
  userId:any;
  User:any
  err:any

  
ngOnInit(): void {
  this.userId=this.route.snapshot.paramMap.get("id");
  this.dash.gethelper(this.userId).subscribe({
    next: data => {
      this.User = data;   
      this.User.user.image='data:image/png;base64,'+ this.User.user.image;
      // if(this.User.relative==0){
      //   this.User.relative='Son'
      // }
      // else if(this.User.relative==1){
      //   this.User.relative='Daughter'
      // }
      // else if(this.User.relative==2){
      //   this.User.relative='Sibling'
      // }
      // else if(this.User.relative==3){
      //   this.User.relative='Descendants'
      // }
      // else if(this.User.relative==4){
      //   this.User.relative='Friend'
      // }else{
      //   this.User.relative='Other'
      // }
      console.log(this.User);    

    },
    error: error => this.err = error
  })
}
}
