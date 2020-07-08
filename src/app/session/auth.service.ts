import { Injectable } from '@angular/core';
import {LoginDto} from '../login/login';
import {Observable} from 'rxjs';
import {ResponseWithError} from '../registration/registration';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getLoginDetails(loginInfo: LoginDto): Observable<ResponseWithError<LoginDto>> {
    return this.http.post<ResponseWithError<LoginDto>>('http://localhost:9991/emp/login', loginInfo);
  }



}
