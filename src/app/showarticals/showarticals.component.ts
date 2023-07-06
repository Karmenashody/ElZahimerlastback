import { Component, OnInit } from '@angular/core';
import {allarticals} from '../Interfaces/allarticals'
import { DashboredServiceService } from '../Services/dashbored-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-showarticals',
  templateUrl: './showarticals.component.html',
  styleUrls: ['./showarticals.component.scss']
})
export class ShowarticalsComponent implements OnInit{
  constructor(private dash:DashboredServiceService,private route:ActivatedRoute,private router:Router){}
  err!:string;
  qId:any;
  // allarticals:allarticals[]=[{
  //   id:0,
  //   tiltle :" ", 
  //   paragraph:" ",
  //   date:new Date("02/02/2023"),
  // }]
  // ngOnInit(): void {
  //   console.log( this.allarticals)
  //   // this.qId=this.route.snapshot.paramMap.get("id");
  //   this.dash.ShowaDetailsrticals(this.allarticals).subscribe({
  //     next:data=>this.allarticals=data,
  //     error:error=>this.err=error
      
  //   })
  // }
  allarticals:any;
  ngOnInit(): void {
    console.log( this.allarticals)
    // this.qId=this.route.snapshot.paramMap.get("id");
    this.dash.ShowaDetailsrticals(this.allarticals).subscribe({
      next:data=>{
        this.allarticals=data
         for(let artical of this.allarticals){
          artical.image='data:image/png;base64,'+ artical.image;
         }
      }
    })

  }
  NavigateToallarticals(id:any){
    this.router.navigate(["showOneArtical",id]);
  }
}
