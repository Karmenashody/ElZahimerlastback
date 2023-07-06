import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmpassword } from '../Validations/confirmPassword';
// import { forbiddinNameVal } from '../Validations/usernameVal';
import { style } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { BeforeRegisterComponent } from '../before-register/before-register.component';
// import { FreelancerValueService } from '../Services/freelancer-value.service';
import { AuthService } from '../Services/auth.service';
import { RoleService } from '../Services/role.service';
// import { FreelancerGuard } from '../freelancer.guard';

@Component({
  template:`<app-before-register style="display:none;"  (nameProPass)="funcf($event)"></app-before-register>
  <h1>{{marwa}} </h1>`,
 selector: 'app-helper-register', 
 templateUrl: './helper-register.component.html',
 styleUrls: ['./helper-register.component.css']
})
export class HelperRegisterComponent implements OnInit{
  [x: string]: any;

  errors:string='';
constructor(private Role:RoleService,public _AuthServices:AuthService
  ,public _route:Router,private toastr: ToastrService,private builder:FormBuilder){}
  selectedFile!: File;

// registerform:FormGroup=new FormGroup({
//   username:new FormControl(null,[Validators.pattern('^[A-Z][a-z0-9]*$'),Validators.required,forbiddinNameVal(/Admin/ || /admin/ || /adminstrator/ || /Adminstrator/)]),
//   email:new FormControl(null,[Validators.email,Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
//   password:new FormControl(null,[Validators.pattern('^[a-zA-Z0-9]{2,8}$'),Validators.required]),
//   confirmpassword:new FormControl(null,Validators.required)
// },{validators:[confirmpassword]});

registerformh=this.builder.group({
  username:new FormControl(null,[Validators.pattern('^[A-Za-z0-9]*$'),Validators.required]),
  email:new FormControl(null,[Validators.email,Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
  password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  gender:new FormControl(0),
  pricePerHour:new FormControl(null),
  country:new FormControl(null),
  city:new FormControl(null),
  image:new FormControl(null),
  phoneNumber:new FormControl(null),
  nationalId:new FormControl(null),
  isPatient:new FormControl(false),
  isHelper:new FormControl(true)
});
ngOnInit(): void {
}
funcf($event:any){
  // this.marwa=$event;
}

// usermodel=new User('','','','');
public RegisterInvalid = false;

submitRegister(data:FormGroup){
  const formData =new FormData();
  formData.append('username',data.get('username')?.value);
  formData.append('gender',data.get('gender')?.value);
  formData.append('country',data.get('country')?.value);
  formData.append('city',data.get('city')?.value);
  formData.append('phoneNumber',data.get('phoneNumber')?.value);
  formData.append('email',data.get('email')?.value);
  formData.append('password',data.get('password')?.value);
  formData.append('nationalId',data.get('nationalId')?.value);
  formData.append('pricePerHour',data.get('pricePerHour')?.value);
  formData.append('isPatient',data.get('isPatient')?.value);
  formData.append('isHelper',data.get('isHelper')?.value);

  
  formData.append('image', this.selectedFile,this.selectedFile.name);
  
  this._AuthServices.RegisterHelper(formData).subscribe({
    next: (beers) => {
      this.toastr.success("Successfully Register")
      this._route.navigate(['/Login']);
      console.log(" Successuflly Register")
    },
    error: (e) => {
      console.log(e)
    this.RegisterInvalid = true;
    this.toastr.error("This username is Reserved !")
  },
    // error(err){
    //   // console.log("dddddd",err)
    //   // this.RegisterInvalid = true;
    //   this.ToastrService.error("This username is Reserved !")
    // }
  });
  //  localStorage.setItem(this.usermodel.username,JSON.stringify(this.usermodel));
  //  alert("Data Saved Successuflly");
  }
  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
    console.log(this.selectedFile)
    const dataTransfer = new ClipboardEvent('').clipboardData || new DataTransfer();
    dataTransfer.items.add(new File(['my-file'], 'new-file-name'));
    const inputElement: HTMLInputElement = document.getElementById('formFile') as HTMLInputElement

     inputElement.files = dataTransfer.files;
  }

}
