import { Injectable } from '@angular/core';
import {RegisterDto, ResponseWithError} from './registration';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getRegistration(registrationInfo:RegisterDto):Observable<ResponseWithError<RegisterDto>>{
   return this.http.post<ResponseWithError<RegisterDto>>('http://localhost:8080/emp/register',registrationInfo);
  }
}
