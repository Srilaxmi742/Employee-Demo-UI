import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../registration/registration.service';
import {LoginDto} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  empForm:FormGroup;
  constructor(private registrationService:RegistrationService,private fb: FormBuilder) { }

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

    this.registrationService.getLoginDetails(empInfo).subscribe(x=>{
      console.log(x);
    });
  }

}
