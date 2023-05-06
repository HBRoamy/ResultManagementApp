import { AuthServiceService } from './../auth-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  constructor(private AuthService:AuthServiceService) {
        
  }

  loginForm = new FormGroup({
    Name: new FormControl("",[Validators.required]),
    Password: new FormControl("",[Validators.required])
  })

  invalidCreds:boolean=false;
  onSubmit(data:any){

    if(data.Name==='teacher' && data.Password==='123')
    {

      //console.warn("from login component: " + data.Name + " " + data.Password)
      return this.AuthService.canTeacherLogin(true);
      
    }
    this.invalidCreds=true;
    return this.AuthService.canTeacherLogin(false);
   // this.AuthService.canTeacherLogin(this.loginForm.value);
  }
}
