import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

//importar modelos

import { Usuarios } from 'src/app/models/user/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  UrlBase = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) { }


  getUsuarios(token:string | null){
    if(token == null){
      token = ''
    }
    let header = new HttpHeaders()
    .set('Content-type','application/json')
    .set('Authorization','Bearer '+ token)

    return this.httpClient.get<Usuarios[]>(this.UrlBase + '/api_rest/auth/user',{headers:header})
  }

}

