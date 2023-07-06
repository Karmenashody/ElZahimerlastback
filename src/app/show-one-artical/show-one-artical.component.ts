import { Component } from '@angular/core';
import { DashboredServiceService } from '../Services/dashbored-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { allarticals } from '../Interfaces/allarticals';
import { Artical } from '../Interfaces/Artical';

@Component({
  selector: 'app-show-one-artical',
  templateUrl: './show-one-artical.component.html',
  styleUrls: ['./show-one-artical.component.scss']
})
export class ShowOneArticalComponent {
  constructor(private dash:DashboredServiceService,private route:ActivatedRoute,private router:Router){}
  err!:string;
  qId:any;
  // artical:allarticals={
  //   id:0, 
  //   tiltle :'', 
  //   paragraph:'',
  //   date:new Date()
  // };
  artical:any
  ngOnInit(): void {
    this.qId=this.route.snapshot.paramMap.get("id");
    this.dash.ShowOneArtical(this.qId).subscribe({
      next: data => {
        this.artical = data;
     
        this.artical.image='data:image/png;base64,'+ this.artical.image
        console.log(this.artical);
      

      },
      error: error => this.err = error
    })
  }
}
