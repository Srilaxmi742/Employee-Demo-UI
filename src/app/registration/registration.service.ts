import { Injectable } from '@angular/core';
import {RegisterDto, ResponseWithError} from './registration';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from '../login/login';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getRegistration(registrationInfo: RegisterDto): Observable<ResponseWithError<RegisterDto>> {
   return this.http.post<ResponseWithError<RegisterDto>>(environment.apiBaseUri + '/register', registrationInfo);
  }

  getAllEmployeeData(): Observable<ResponseWithError<RegisterDto[]>> {
    return this.http.get<ResponseWithError<RegisterDto[]>>(environment.apiBaseUri + '/getEmps');
  }

  getLoginDetails(loginInfo: LoginDto): Observable<ResponseWithError<LoginDto>> {
    return this.http.post<ResponseWithError<LoginDto>>(environment.apiBaseUri + '/login', loginInfo);
  }

}
