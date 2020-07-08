import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {EmployeeDataComponent} from './employee-data/employee-data.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './session/auth.guard';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'employeeList',
    component:EmployeeDataComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'employeeList',
    component:EmployeeDataComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
