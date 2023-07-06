import { AbstractControl } from "@angular/forms";

export function confirmpassword(controlname:AbstractControl)
{
  const password=controlname.get('password');
  const confirmpassword=controlname.get('confirmpassword');

    if(password?.pristine || confirmpassword?.pristine){
        return null;
    }
    else{
        return password && confirmpassword && password.value!=confirmpassword.value
        ? {mismatch:true}
        : null;
    }

  }
