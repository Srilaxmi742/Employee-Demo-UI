import { Injectable } from '@angular/core';
import {LoginDto} from '../login/login';
import {Observable} from 'rxjs';
import {ResponseWithError} from '../registration/registration';
import {HttpClient} from '@angular/common/http';
import {LoginResToken} from './session';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getLoginDetails(loginInfo: LoginDto): Observable<ResponseWithError<LoginResToken>> {
    return this.http.post<ResponseWithError<LoginResToken>>(environment.apiBaseUri + '/login', loginInfo);
  }

  loggedin(){
    return !!sessionStorage.getItem('token');
  }

}
