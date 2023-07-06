import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit{
  constructor(private admin:AdminService,private toast:ToastrService,private route:Router,private builder:FormBuilder){}
  
  ExamFom:FormGroup=this.builder.group({
    title:new FormControl(null,Validators.required),
    minDegree:new FormControl(null,[Validators.required]),
    middleDegree:new FormControl(null,[Validators.required]),
    maxDegree:new FormControl(new Date(),[Validators.required]),
  });
// @Input() w=0;

ngOnInit(): void {

}

submitexam(ExamFom:any){
  console.log(ExamFom.value)
  this.admin.AddTest(ExamFom.value).subscribe({ 
    next: (id) => {
      this.route.navigate(["createQuestion",id]);
      this.toast.success("Add Quiz Successfully")
      console.log("Data Successuflly subimted")
    },
    error: (e) => {
        console.log(e)
      this.toast.error("Please Enter complete data !")
    },
  })  
 }

}

