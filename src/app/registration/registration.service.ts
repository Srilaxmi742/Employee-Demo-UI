import { Injectable } from '@angular/core';
import {RegisterDto, ResponseWithError} from './registration';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getRegistration(registrationInfo:RegisterDto):Observable<ResponseWithError<RegisterDto>>{
   return this.http.post<ResponseWithError<RegisterDto>>('http://localhost:9991/emp/register',registrationInfo);
  }

  getAllEmployeeData():Observable<ResponseWithError<RegisterDto[]>>{
    return this.http.get<ResponseWithError<RegisterDto[]>>('http://localhost:9991/emp/getEmps');
  }

  getLoginDetails(loginInfo:LoginDto):Observable<ResponseWithError<LoginDto>>{
    return this.http.post<ResponseWithError<LoginDto>>('http://localhost:9991/emp/login',loginInfo);
  }

}
