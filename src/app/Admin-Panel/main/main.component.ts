import { MainService } from './../../services/Admin/Main/main.service';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';

import { TokenI } from 'src/app/models/auth/Login/token';

import { LoginAlgorithm } from '../login/algoritmos-login/algoritm';
import { UserI } from 'src/app/models/auth/user/userI';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../../../assets/css/bootstrap.min.css',
  '../../../assets/plugins/notifications/css/lobibox.min.css', '../../../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css',
   '../../../assets/plugins/simplebar/css/simplebar.css', '../../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css',
   '../../../assets/plugins/metismenu/css/metisMenu.min.css', '../../../assets/css/pace.min.css', 
  '../../../assets/css/app.css', '../../../assets/css/icons.css', '../../../assets/css/dark-theme.css', '../../../assets/css/semi-dark.css',
   '../../../assets/css/header-colors.css']
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  BaseUrl = 'http://localhost:8000'
  
  profile_img : any = ''

  private algorithm = new LoginAlgorithm();

  IsAutenticated: boolean = false;
  token! : TokenI;

  // user datas
  user_data! : UserI;

  datos$!: Subscription;
  constructor(
    private mainService: MainService,
    private router: Router
  ) { 

  }

  ngOnInit(){
    let access = sessionStorage.getItem('token')

    this.token = {
      access : this.algorithm.deCrypt(access),
    }

    this.datos$ =  this.mainService.getUserProfile(this.token).subscribe(user => {
      console.log(user); // prueba
      this.IsAutenticated = true;

      if (user.profile == null){
        this.profile_img = null;
      } else {
        this.profile_img = this.BaseUrl + user.profile;
      }
      

      this.user_data = {
        id: user.id,
        email: user.email,
        username: user.username,
        nombres: user.nombres,
        apellido_paterno: user.apellido_paterno,
        apellido_materno: user.apellido_materno,
        celular: user.celular,
        documento_identidad: user.documento_identidad,
        kallpa_punto: user.kallpa_punto,
        fecha_nac: user.fecha_nac,
        profile: user.profile,
        es_validado: user.es_validado,
        id_rol: user.id_rol
      };

    }, error => {
      console.log(error);
      if (this.IsAutenticated) {
        this.IsAutenticated = false;
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/login']);
      }

    })

  }

 hola(){
  console.log('hola')
 }

  ngAfterViewInit(): void {
  } ;

  ngOnDestroy(): void {
    this.datos$.unsubscribe();
  }
}
