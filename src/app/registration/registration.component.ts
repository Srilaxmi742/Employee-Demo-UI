import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterDto} from './registration';
import {RegistrationService} from './registration.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  employeeForm: FormGroup;
  employeeInfo: RegisterDto;
  constructor(private registrationService: RegistrationService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
     // id:['',Validators.required],
      employeeName:['',Validators.required],
      emailId:['',Validators.required],
      password:['',Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$%^&+=])(?=\\S+\$).{8,}\$')
      ]

    });
  }

  onSubmit(data: FormGroup) {
    let employeeDetails = new RegisterDto();

   // employeeDetails.id = this.employeeForm.controls['id'].value;
    employeeDetails.empFullName = this.employeeForm.controls['employeeName'].value;
    employeeDetails.emailId = this.employeeForm.controls['emailId'].value;
    employeeDetails.password = this.employeeForm.controls['password'].value;
    console.log(employeeDetails);

    this.registrationService.getRegistration(employeeDetails).subscribe(x=>{
      console.log(x);
      if (!x.error) {
        this.openSnackBar('Employee Registered Successfully !');
      } else {
        this.openSnackBar(x.errorMsg);
      }
    });
  }


  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000
    });
  }
}
