import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// importando modelos
import { Login } from 'src/app/models/auth/login';
import { LoginRequest } from 'src/app/models/auth/Login/login-request';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  UrlBase = 'http://localhost:8000';

  constructor(private hpttpClient: HttpClient) { }

  async session_init(usuario : Login) {
    let header = new HttpHeaders()
    .set('Content-Type', 'application/json')
    
    return  this.hpttpClient.post<LoginRequest>(this.UrlBase + '/api_rest/auth/login', usuario, {headers: header});
  }

}
