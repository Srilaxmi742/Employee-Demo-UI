import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../registration/registration.service';
import {LoginDto} from './login';
import {MatSnackBar } from '@angular/material/snack-bar';
import {Router} from "@angular/router";

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
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {

    this.empForm = this.fb.group({
      // employeeName:['',Validators.required],
      userNameOrEmailId:['',Validators.required],
      password:['',Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$%^&+=])(?=\\S+\$).{8,}\$")
      ]

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
        this.router.navigate(['/employeeList']);
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
