import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { outputAst } from '@angular/compiler';
import { RoleService } from '../Services/role.service';
import { RegisterpatientComponent } from '../registerpatient/registerpatient.component';
@Component({
  selector: 'app-before-register',
  templateUrl: './before-register.component.html',
  styleUrls: ['./before-register.component.scss']
})
export class BeforeRegisterComponent implements OnInit {
  constructor(private role:RoleService,public _route:Router,private toast:ToastrService,private builder:FormBuilder){}

  dataform=this.builder.group({
    IsPatient:new FormControl(null),
    IsHelper:new FormControl(null),
});

namePro:any;
// if(namePro='feelancer'){
//   namePro=true;
// }

//to pass data to profileData component 
@Output() nameProP = new EventEmitter <string>();

par():string{
  return this.namePro;

}

setUser(){
  console.log(this.namePro);
  this.nameProP.emit(this.namePro)
}

// ******************************************
ngOnInit(): void {  
}

HelperRole(dataform:FormGroup){
  this.role.IsHelper=true;
  console.log( this.role.IsHelper)
  this._route.navigate(['/HelperRegister']);
}
PatientRole(dataform:FormGroup){
  this.role.IsHelper=false;
  console.log( this.role.IsHelper);
  this._route.navigate(['/RegisterPatient']);
}
  // *********************************************************
}