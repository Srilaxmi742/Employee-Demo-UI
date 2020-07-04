import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../registration/registration.service';
import {RegisterDto} from '../registration/registration';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent implements OnInit {

  empData:RegisterDto[]=[];
  constructor(private registrationService:RegistrationService) { }

  ngOnInit() {
    this.getempData();
  }

  getempData(){
    this.registrationService.getAllEmployeeData().subscribe(data=>{
      this.empData = data.response;
      console.log(this.empData);
    });
  }


}
