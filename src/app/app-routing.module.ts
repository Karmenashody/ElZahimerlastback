import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboredHelperComponent } from './dashbored-helper/dashbored-helper.component';
import { AddProposalComponent } from './add-proposal/add-proposal.component';
import { DisplayJobComponent } from './display-job/display-job.component';
import { AddTestComponent } from './add-test/add-test.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { BeforeRegisterComponent } from './before-register/before-register.component';
import { HelperRegisterComponent } from './helper-register/helper-register.component';
import { patientOrHelperGuard } from './patient-or-helper.guard';
import { FormPatientComponent } from './form-patient/form-patient.component';
import { FormHelperComponent } from './form-helper/form-helper.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { PendingUsersComponent } from './pending-users/pending-users.component';
import { AddarticalComponent } from './addartical/addartical.component';
import { RegisterpatientComponent } from './registerpatient/registerpatient.component';
import { ShowarticalsComponent } from './showarticals/showarticals.component';
import { ShowOneArticalComponent } from './show-one-artical/show-one-artical.component';
import { adminGuard } from './admin.guard';
import { CreateAnswerComponent } from './create-answer/create-answer.component';
import { GamesComponent } from './games/games.component';
import { GamesAgainComponent } from './games-again/games-again.component';
import { EndtestComponent } from './endtest/endtest.component';
import { PenddingComponent } from './pendding/pendding.component';
import { RejectedComponent } from './rejected/rejected.component';
import { MyJobComponent } from './my-job/my-job.component';
import { DisplayProposalsByJobIdComponentComponent } from './display-proposals-by-job-id.component/display-proposals-by-job-id.component.component';
import { DisplayTestComponent } from './display-test/display-test.component';
import { GetQuestionsByExamIdComponent } from './get-questions-by-exam-id/get-questions-by-exam-id.component';
import { ChatComponent } from './chat/chat.component';
import { GoodResultComponent } from './good-result/good-result.component';
import { BadResultComponent } from './bad-result/bad-result.component';
import { DangerResultComponent } from './danger-result/danger-result.component';
import { ApplyForJobComponent } from 'src/apply-for-job/apply-for-job.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewResgisterComponent } from 'src/view-resgister/view-resgister.component';
import { ViewResgisterhelperComponent } from 'src/view-resgisterhelper/view-resgisterhelper.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'header', component: HeaderComponent },
  {path: 'helper-dashbored',canActivate: [AuthGuard, patientOrHelperGuard],component: DashboredHelperComponent},
  {path: 'addproposal',canActivate: [AuthGuard, patientOrHelperGuard],component: AddProposalComponent},
  {path: 'displayJob',canActivate: [AuthGuard, patientOrHelperGuard],component: DisplayJobComponent},
  {path: 'addTest',canActivate: [AuthGuard, patientOrHelperGuard],component: AddTestComponent},
  { path: 'HomePage', component: HomePageComponent },
  { path: 'BeforeRegister', component: BeforeRegisterComponent },
  { path: 'HelperRegister', component: HelperRegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'RegisterPatient', component: RegisterpatientComponent },
  {path: 'FormPatient',canActivate: [AuthGuard, patientOrHelperGuard],component: FormPatientComponent},
  {path: 'FormHelper',canActivate: [AuthGuard, patientOrHelperGuard],component: FormHelperComponent},
  {path: 'createQuestion/:id',canActivate: [AuthGuard, patientOrHelperGuard],component: CreateQuestionsComponent},
  {path: 'PendingUsers',canActivate: [adminGuard],component: PendingUsersComponent},
  {path: 'addArtical',canActivate: [adminGuard],component: AddarticalComponent},
  {path: 'showAllAricals', component: ShowarticalsComponent },
  {path: 'showOneArtical/:id', component: ShowOneArticalComponent },
  {path: 'createAnswer/:id',canActivate: [AuthGuard, adminGuard],component: CreateAnswerComponent},
  {path: 'Games',canActivate: [AuthGuard, patientOrHelperGuard],component: GamesComponent},
  {path: 'GoodResult',canActivate: [AuthGuard, patientOrHelperGuard],component: GoodResultComponent},
  {path: 'BadResult',canActivate: [AuthGuard, patientOrHelperGuard],component: BadResultComponent},
  {path: 'DangerResult',canActivate: [AuthGuard, patientOrHelperGuard],component: DangerResultComponent},

  // {path:'GamesAg',canActivate:[AuthGuard,patientOrHelperGuard],component:GamesAgainComponent},
  { path: 'end', canActivate: [AuthGuard], component: EndtestComponent },
  { path: 'append', component: PenddingComponent },
  { path: 'reject', component: RejectedComponent },
  {
    path: 'MyJob',
    canActivate: [AuthGuard, patientOrHelperGuard],
    component: MyJobComponent,
  },
  {
    path: 'DisplayProposalsByJobID/:id',
    // canActivate: [AuthGuard, patientOrHelperGuard],
    component: DisplayProposalsByJobIdComponentComponent,
  },
  {
    path: 'DisplayTest',
    canActivate: [AuthGuard, patientOrHelperGuard],
    component: DisplayTestComponent,
  },
  {
    path: 'DisplayQuestionByExamId/:id',
    canActivate: [AuthGuard, patientOrHelperGuard],
    component: GetQuestionsByExamIdComponent,
  },
  {path:'chat',component:ChatComponent},
  {path:'DisplayJobs',canActivate: [AuthGuard,patientOrHelperGuard],component:DisplayJobComponent},
  {path:'applyJob/:id',canActivate: [AuthGuard,patientOrHelperGuard],component:ApplyForJobComponent},
  {path:'view/:id',canActivate: [AuthGuard],component:ViewResgisterComponent},
  {path:'viewHelper/:id',canActivate: [AuthGuard],component:ViewResgisterhelperComponent },

  // {path:'showDetailsatricals',component:ShowAllarticalsComponent},

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
