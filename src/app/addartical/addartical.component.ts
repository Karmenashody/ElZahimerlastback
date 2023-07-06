import { Component } from '@angular/core';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addartical',
  templateUrl: './addartical.component.html',
  styleUrls: ['./addartical.component.scss']
})
export class AddarticalComponent {
  constructor(private admin: AdminService,private toast:ToastrService, private route: Router, private builder: FormBuilder) { }
  selectedFile!: File;

  formda = this.builder.group({
    tiltle: new FormControl(null),
    paragraph: new FormControl(null),
    image:new FormControl(null)
  })


  submitTheArtical(formda:FormGroup) {
    const formData =new FormData();

    formData.append('tiltle',formda.get('tiltle')?.value);
    formData.append('paragraph',formda.get('paragraph')?.value);
    formData.append('image', this.selectedFile,this.selectedFile.name);
    console.log(formda)
    console.log("vvvvvvv")
    this.admin.AddArtical(formData).subscribe({
      next: (beers) => {
        this.toast.success("Data Successuflly subimted")
        console.log("Data Successuflly subimted")
        this.route.navigate(['/HomePage'])
      },
      error: (e) => {
        console.log(e)
        // this.toast.error("error")
      },
    })

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
