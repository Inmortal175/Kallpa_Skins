import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

import { Registro } from 'src/models/auth/registros/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  UrlBase="http://localhost:8000";


  constructor(private httpClient:HttpClient) { }
  session_init(usuario : Registro) {
    let header = new HttpHeaders()
    .set ("content-Type", "applicatioon/json") 

    return this.httpClient.post<Registro>(this.UrlBase + "/api_rest/auth/registrar/cliente", usuario , {headers:header})

  }
}
