import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterDto} from './registration';
import {RegistrationService} from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  employeeForm:FormGroup;
  employeeInfo:RegisterDto;
  constructor(private registrationService:RegistrationService,private fb: FormBuilder) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      id:['',Validators.required],
      employeeName:['',Validators.required],
      emailId:['',Validators.required],
      password:['',Validators.required]

    });
  }

  onSubmit(data: FormGroup){
    let employeeDetails = new RegisterDto();

    employeeDetails.id = this.employeeForm.controls['id'].value;
    employeeDetails.empFullName = this.employeeForm.controls['employeeName'].value;
    employeeDetails.emailId = this.employeeForm.controls['emailId'].value;
    employeeDetails.password = this.employeeForm.controls['password'].value;
    console.log(employeeDetails);

    this.registrationService.getRegistration(employeeDetails).subscribe(x=>{
      console.log(x);
    });
  }

}
