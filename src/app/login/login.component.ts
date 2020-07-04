import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../registration/registration.service';
import {LoginDto} from './login';
import {MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  empForm:FormGroup;
  constructor(private registrationService:RegistrationService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.empForm = this.fb.group({
      // employeeName:['',Validators.required],
      userNameOrEmailId:['',Validators.required],
      password:['',Validators.required]

    });
  }

  onSubmit(data:FormGroup){

    let empInfo = new LoginDto();

    // empInfo.userName = this.empForm.controls['employeeName'].value;
    empInfo.userNameOrEmailId = this.empForm.controls['userNameOrEmailId'].value;
    empInfo.password = this.empForm.controls['password'].value;

    this.registrationService.getLoginDetails(empInfo).subscribe(data=>{
      console.log(data);
      if (!data.error) {
        this.openSnackBar('Login Success !');
      } else if (data.error) {
        this.openSnackBar(data.errorMsg);
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }

}
