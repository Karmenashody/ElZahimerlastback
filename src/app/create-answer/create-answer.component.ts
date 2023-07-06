import { Component, Injectable, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateQuestionsComponent } from '../create-questions/create-questions.component';
import { Observable } from 'rxjs';
// import { AddTestComponent } from '../add-test/add-test.component';
// import { CreateQuestionsComponent } from '../create-questions/create-questions.component';


var counter=0;
// @Injectable({
//   providedIn: 'root'
// })

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.scss']
})
export class CreateAnswerComponent implements OnInit{
  //  d:any=this.cQ.ido
  // @ViewChild(CreateQuestionsComponent) CreateQuestionsComponent: CreateQuestionsComponent;

  // @Input() message!: any ;

  constructor(private fb: FormBuilder,private admin:AdminService,private toast:ToastrService,private route:ActivatedRoute,private router:Router,private builder:FormBuilder)
  {
  }
    AnswerFom:FormGroup=this.builder.group({
    questionID:this.route.snapshot.paramMap.get("id"),
    ans: new FormControl(null,Validators.required),
    score:new FormControl(null,Validators.required),
    // TestId:this.route.snapshot.paramMap.get("textid")
  });
  //  we:any;
    // testid=<any>this.AnswerFom.get('TestId')?.value;
  AddAnthor(AnswerFom:any){
    counter=counter+1;
    if(counter>3){
      this.router.navigate(["createQuestion",this.messag]);
      counter=0;
    }
    else{
    var id=<any>this.AnswerFom.get('questionID');
    console.log(id.value);
    console.log("counterrrr",counter)
    this.admin.AddAnswer(this.AnswerFom.value).subscribe({
      next: (beers) => {
      //  this.we=beers;
        // console.log("we",this.we)
        //how to equal formControl with 
        this.router.navigate(["createAnswer",id.value]);
         console.log("Answer Added Successfully");
         this.toast.info("Answer Added Successfully")

         AnswerFom.get('score').reset();     
         AnswerFom.get('ans').reset(); 
      },
      error: (e) => {
          console.log(e)
      },
     })
    }
   }
   messag:number=0;
   ngOnInit(): void {
    this.getData()
    // console.log("message",this.messag)
   }
      AddAnthorques(AnswerFom:any){
    // var testid=this.CreateQuestionsComponent?.QuestionFom.get('testId');
    // console.log("testid",this.message)
        this.router.navigate(["createQuestion",this.messag]);
   }
   getData() {
    this.admin.data.subscribe(response => {
      this.messag=response  // you will receive the data from sender component here.
    });
//   getData() {
//     this.admin.dataByEvent.subscribe(response => {
//       console.log(response);  // you will get the data here.
//     });
}
}
