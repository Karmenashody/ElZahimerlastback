import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../Services/role.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../Services/auth.service';
import { registerPatient } from '../Interfaces/registerPatient';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-registerpatient',
  templateUrl: './registerpatient.component.html',
  styleUrls: ['./registerpatient.component.scss']
})
export class RegisterpatientComponent {
  errors: string = '';
  public RegisterInvalid = false;

  constructor(private Role: RoleService, public _AuthServices: AuthService
    , public _route: Router, private toast: ToastrService, private builder: FormBuilder) { }

  registerform = this.builder.group({
    bithDate: new FormControl('02/02/2023', [Validators.required]),
    relative: new FormControl(1, [Validators.required]),
    diseaselevel: new FormControl(0, [Validators.required]),
    deseasDiscription: new FormControl("ahshshsh", [Validators.required]),
    gender: new FormControl(0, [Validators.required]),
    username: new FormControl("Eman", [Validators.pattern('^[A-Za-z0-9]*$')]),
    country: new FormControl("Cairo", [Validators.required]),
    city: new FormControl("Ainshams", [Validators.required]),
    image: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('01206703565', [Validators.required]),
    nationalId: new FormControl('77575757', [Validators.required]),
    isPatient: new FormControl(true, [Validators.required]),
    isHelper: new FormControl(false, [Validators.required]),
    email: new FormControl('emahamza@gmail.com', [Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });
  selectedFile!: File;
  //   regitp: registerPatient = {
  //   bithDate: new Date(),
  //   relative: 0,
  //   diseaselevel: 0,
  //   deseasDiscription: '',
  //   username: '',
  //   gender: 0,
  //   country: '',
  //   city: '',
  //   image: '',
  //   phoneNumber: '',
  //   nationalId: '',
  //   isHelper: false,
  //   isPatient: true,
  //   email: '',
  //   password: ''
  // }
  ngOnInit(): void {

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  onUpload(data:any) {

    // console.log("urruruurur", data.value)

     
    // this.regitp.bithDate = this.registerform.get('bithDate')?.value;
    const formData:FormData =new FormData();
    formData.append('username',data.get('username')?.value);
    formData.append('bithDate',data.get('bithDate')?.value);
    formData.append('relative',data.get('relative')?.value);
    formData.append('diseaselevel',data.get('diseaselevel')?.value);
    formData.append('deseasDiscription',data.get('deseasDiscription')?.value);
    formData.append('gender',data.get('gender')?.value);
    formData.append('country',data.get('country')?.value);
    formData.append('city',data.get('city')?.value);
    formData.append('phoneNumber',data.get('phoneNumber')?.value);
    formData.append('email',data.get('email')?.value);
    formData.append('password',data.get('password')?.value);
    formData.append('nationalId',data.get('nationalId')?.value);
    formData.append('image', this.selectedFile,this.selectedFile.name);
    formData.append('isPatient',data.get('isPatient')?.value);
    // const jsonData: string = JSON.stringify(formData)


    this._AuthServices.RegisterPatient(formData).subscribe({
      next: (beers) => {
        this.toast.success("Successfully Register")
        this._route.navigate(['/Login']);
        console.log(" Successuflly Register")
      },
      error: (e) => {
        console.log(e)
      this.RegisterInvalid = true;
      this.toast.error("This username is Reserved !")
    },
    });
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
