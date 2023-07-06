import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-resgister',
  templateUrl: './view-resgister.component.html',
  styleUrls: ['./view-resgister.component.scss']
})
export class ViewResgisterComponent implements OnInit {
  constructor(private dash:AdminService,private route:ActivatedRoute,private router:Router){}
  userId:any;
  User:any
  err:any

  // preclinical,
  // mild_cognitive_impairment ,
  // mild_dementia,
  // moderate_dementia,
  // severe_dementia
ngOnInit(): void {
  this.userId=this.route.snapshot.paramMap.get("id");
  this.dash.getPatient(this.userId).subscribe({
    next: data => {
      this.User = data;   
      this.User.user.image='data:image/png;base64,'+ this.User.user.image;
      if(this.User.relative==0){
        this.User.relative='Son'
      }
      else if(this.User.relative==1){
        this.User.relative='Daughter'
      }
      else if(this.User.relative==2){
        this.User.relative='Sibling'
      }
      else if(this.User.relative==3){
        this.User.relative='Descendants'
      }
      else if(this.User.relative==4){
        this.User.relative='Friend'
      }else{
        this.User.relative='Other'
      }


      if(this.User.diseaselevel==0){
        this.User.diseaselevel='preclinical'
      }
      else if(this.User.diseaselevel==1){
        this.User.diseaselevel='mild_cognitive_impairment'
      }
      else if(this.User.diseaselevel==2){
        this.User.diseaselevel='mild_dementia'
      }
      else if(this.User.diseaselevel==3){
        this.User.diseaselevel='moderate_dementia'
      }
      else if(this.User.diseaselevel==4){
        this.User.diseaselevel='severe_dementiasevere_dementia'
      }
      console.log(this.User);    

    },
    error: error => this.err = error
  })
}
}
