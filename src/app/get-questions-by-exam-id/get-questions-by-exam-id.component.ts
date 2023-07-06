import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboredServiceService } from '../Services/dashbored-service.service';
import { question } from '../Interfaces/question';
import { answer } from '../Interfaces/answer';
import { AnswerUser } from '../Interfaces/AnswerUser';
import { AuthService } from '../Services/auth.service';
import { QandAnswerUserDto } from '../Interfaces/QandAnswerUserDto';
@Component({
  selector: 'app-get-questions-by-exam-id',
  templateUrl: './get-questions-by-exam-id.component.html',
  styleUrls: ['./get-questions-by-exam-id.component.scss'],
})
export class GetQuestionsByExamIdComponent {
  constructor(
    public _route:Router,
    private _ActivatedRoute: ActivatedRoute,
    private _DashboredServiceService: DashboredServiceService,
    private _Authservice: AuthService
  ) {}
  testName:any;
  score:any;
  min:any;
  max:any;
  avg:any;
  id: any;
  QANS: question[] = [
    {
      testId: 0,
      question: '',
      qId: 0,
      answers: [
        {
          ans: '',
          score: 0,
          answerId: 0,
        },
      ],
    },
  ];
  UserAnswer: AnswerUser = {
    userId: '',
    ExamId: 0,
    QandAnswerUserDto: [],
  };
  qq: QandAnswerUserDto[] = [];

  ngOnInit(): void {
    console.log('fffff');
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.getTestName()

    console.log(this.id);
    
    this._DashboredServiceService.DisplayQuestionByExamId(this.id).subscribe({
      // (this.QANS = data)
      next: (data) => {
        this.QANS = data;
        console.log('yyyyyyyy', data.length,this.QANS);
        this.UserAnswer.QandAnswerUserDto.length = data.length;
        this.UserAnswer.QandAnswerUserDto = Array(data.length).fill({
          qId: ' ',
          AnswerUser: 0,
        });
      },
      error: (err) => console.log(err),
    });
    this.UserAnswer.ExamId = this.QANS[0].testId;
    this.UserAnswer.userId = this._Authservice.gettokenID();
  }
  ChooseTheAnswer(ind: number, event: any) {
    var qestis = event.srcElement.name;
    var ansUser = event.srcElement.value;
    console.log(qestis, ansUser);
    this.UserAnswer.QandAnswerUserDto[ind] = {
      qId: qestis,
      AnswerUser: ansUser,
    };
    console.log(this.UserAnswer.QandAnswerUserDto[ind]);
  }


  finalResult()
  {
    //good
    if(this.score>=this.avg&&this.score<=this.max)
    {
      this._route.navigate(['/GoodResult'])
    }
    //bad
    else if(this.score<=this.avg&&this.score>=this.min)
    {
      this._route.navigate(['/BadResult'])

    }
    //danger
    else if(this.score<this.min)
    {
      this._route.navigate(['/DangerResult'])

    }
  }
  Submitthedata() {
    (this.UserAnswer.ExamId = this.QANS[0].testId),
      (this.UserAnswer.userId = this._Authservice.gettokenID()),
      console.log(this.UserAnswer);
      this._Authservice.calscore(this.UserAnswer).subscribe({
        
        next: (data) => {
        this.avg=data.avg;
        this.min=data.min;
        this.max=data.max;
        this.score=data.score;
          console.log('yyyyyyyy', data);
          this.finalResult();
        },
        error: (err) => console.log(err),
      });
      
  }
  getTestName()
  {
    this._DashboredServiceService.getTestObject(this.id).subscribe({
      next: (data) => {
          this.testName=data.title;
        },
        error: (err) => console.log(err),
      
    })
  }
}
