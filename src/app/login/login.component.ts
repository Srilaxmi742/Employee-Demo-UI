import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../registration/registration.service';
import {LoginDto} from './login';
import {MatSnackBar } from '@angular/material/snack-bar';
import {Router} from "@angular/router";
import {AuthService} from "../session/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  empForm: FormGroup;
  constructor(private registrationService: RegistrationService,
              private authService: AuthService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {

    this.empForm = this.fb.group({
      // employeeName:['',Validators.required],
      userNameOrEmailId:['',Validators.required],
      password:['',Validators.required]

    });
  }

  onSubmit(data: FormGroup){

    let loginDto = new LoginDto();

    // empInfo.userName = this.empForm.controls['employeeName'].value;
    loginDto.userNameOrEmailId = this.empForm.controls['userNameOrEmailId'].value;
    loginDto.password = this.empForm.controls['password'].value;

    this.authService.getLoginDetails(loginDto).subscribe(data=>{
      console.log(data);
      if (!data.error) {
        sessionStorage.setItem('userId', data.response.userId);
        sessionStorage.setItem('token', data.response.token);

        console.log(sessionStorage.getItem('token'));
        this.router.navigate(['/employeeList']);

       // sessionStorage.setItem('roleList', JSON.stringify(list));
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
