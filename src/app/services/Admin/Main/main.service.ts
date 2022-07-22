import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TokenI } from 'src/app/models/auth/Login/token';
import { UserI } from 'src/app/models/auth/user/userI';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private BaseUrl = 'http://localhost:8000'

  constructor(
    private http: HttpClient
  ) { }

  getUserProfile(token: TokenI) {
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Authorization', 'Bearer ' + token.access)

    return this.http.get<UserI>(this.BaseUrl + '/api_rest/auth/user', { headers: headers })
  }
}
