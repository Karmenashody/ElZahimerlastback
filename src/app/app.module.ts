import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboredHelperComponent } from './dashbored-helper/dashbored-helper.component';
import { AddProposalComponent } from './add-proposal/add-proposal.component';
import { DisplayJobComponent } from './display-job/display-job.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule } from '@angular/forms';
import { AddTestComponent } from './add-test/add-test.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BeforeRegisterComponent } from './before-register/before-register.component';
import { ToastrModule } from 'ngx-toastr';
import { HelperRegisterComponent } from './helper-register/helper-register.component';
import { FormHelperComponent } from './form-helper/form-helper.component';
import { FormPatientComponent } from './form-patient/form-patient.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { PendingUsersComponent } from './pending-users/pending-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddarticalComponent } from './addartical/addartical.component';
import { RejectedComponent } from './rejected/rejected.component';
// import { PendingComponent } from './pending/pending.component';
// import { MatDialogModule } from '@angular/material/dialog';
import { RegisterpatientComponent } from './registerpatient/registerpatient.component';
import { ShowarticalsComponent } from './showarticals/showarticals.component';
import { ShowOneArticalComponent } from './show-one-artical/show-one-artical.component';
import { CreateAnswerComponent } from './create-answer/create-answer.component';
import { GamesComponent } from './games/games.component';
import { GamesAgainComponent } from './games-again/games-again.component';
import { EndtestComponent } from './endtest/endtest.component';
import { PenddingComponent } from './pendding/pendding.component';
import { DisplayProposalsByJobIdComponentComponent } from './display-proposals-by-job-id.component/display-proposals-by-job-id.component.component';
import { DisplayTestComponent } from './display-test/display-test.component';
import { GetQuestionsByExamIdComponent } from './get-questions-by-exam-id/get-questions-by-exam-id.component';
import { MyJobComponent } from './my-job/my-job.component';
import { ChatComponent } from './chat/chat.component';
import { GoodResultComponent } from './good-result/good-result.component';
import { BadResultComponent } from './bad-result/bad-result.component';
import { DangerResultComponent } from './danger-result/danger-result.component';
import { ApplyForJobComponent } from 'src/apply-for-job/apply-for-job.component';
import { ViewResgisterComponent } from 'src/view-resgister/view-resgister.component';
import { ViewResgisterhelperComponent } from 'src/view-resgisterhelper/view-resgisterhelper.component';
@NgModule({

  declarations: [
    AppComponent,
    DashboredHelperComponent,
    AddProposalComponent,
    DisplayJobComponent,
    AddTestComponent,
    HeaderComponent,
    HomePageComponent,
    PageNotFoundComponent,
    LoginComponent,
    BeforeRegisterComponent,
    FooterComponent,
    HelperRegisterComponent,
    FormHelperComponent,
    FormPatientComponent,
    CreateQuestionsComponent,
    PendingUsersComponent,
    AddarticalComponent,
    RejectedComponent,
    // PendingComponent,
    RegisterpatientComponent,
    ShowarticalsComponent,
    ShowOneArticalComponent,
    CreateAnswerComponent,
    GamesComponent,
    GamesAgainComponent,
    EndtestComponent,
    PenddingComponent,
    DisplayProposalsByJobIdComponentComponent,
    DisplayTestComponent,
    GetQuestionsByExamIdComponent,
    MyJobComponent,
    ChatComponent,
    GoodResultComponent,
    BadResultComponent,
    DangerResultComponent,
    ApplyForJobComponent,
    ViewResgisterComponent,
    ViewResgisterhelperComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    // MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// reem w eman last isa
