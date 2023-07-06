import { Component, Inject, Input, OnInit } from '@angular/core';
import {question} from '../Interfaces/question'
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-create-questions',
  templateUrl: `./create-questions.component.html`,
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit{

  QuestionFom:FormGroup=this.builder.group({
    testId:new FormControl(this.route.snapshot.paramMap.get("id") ),
    // testId:new FormControl({ value: this.route.snapshot.paramMap.get("id"), disabled: true }),
    question:new FormControl(null,Validators.required),
    // id:new FormControl(null,Validators.required),
  });
  // @Input() item = this.QuestionFom.get('testId')?.value;
  constructor(private fb: FormBuilder,private admin:AdminService,private toast:ToastrService,private route:ActivatedRoute,private router:Router,private builder:FormBuilder,@Inject(DOCUMENT) document: Document)
  {
    // this.QuestionFom = this.fb.group({
    //   answers: this.fb.array([
    //     this.createAnswer(),
    //     this.createAnswer(),
    //     this.createAnswer(),

    //   ])
    // });
  }
  message:any=this.route.snapshot.paramMap.get("id");
  ngOnInit(): void {
    // console.log("eetetet",this.testid)
    this.sendNewData(this.message);
  }
// id from CreateExam Component
// // *********************** save ************************************************************
save(QuestionFom:FormGroup){
  console.log("***************************************")
  this.admin.AddQuestion(this.QuestionFom.value).subscribe({
    next: (r) => {
      var idrage3=r;

      console.log("ddddrage3",idrage3);

      //how to equal formControl with
      //  this.QuestionFom.get('testId')==this.ido;
    //  var textid=this.route.snapshot.paramMap.get("id")
      //  var id=this.ido;
      // console.log("sssss",id);
      this.router.navigate(['createAnswer', r]);
      this.toast.success("Add Question Successfully")
       console.log("Question Added Successfully")
    },
    error: (e) => {
        console.log(e)
    },
   })

  //  this.admin.sendMessage(this.message);
  //  console.log("dddd",this.message)

  ///////testid//////////المشكله//////////////////////
 }
 sendNewData(data: number) {
  this.admin.sendData(data);
}
// sendNewData(data: string) {
//   this.admin.sendDataByEvent(data);
// }


//*********************** End ************************************************************

end(QuestionFom:FormGroup){
  console.log("***************************************")
  this.router.navigate(["end"]);
  // this.toast.success("Add Question Successuflly")
}
}
