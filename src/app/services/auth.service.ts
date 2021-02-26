import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url: String = "http://localhost:3000/api/auth/"

  constructor(
    private _http: HttpClient
  ) { }

  signIn(data: Object): Observable<any> {
    return this._http.post(this.api_url + "sign-in",data)
  }

  login(data: Object): Observable<any> {
    return this._http.post(this.api_url + "login",data)
  }

  verify(): Boolean {
    return !!localStorage.getItem('user')
  }
}
