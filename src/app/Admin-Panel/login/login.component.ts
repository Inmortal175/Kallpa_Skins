import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from 'src/app/models/auth/login';

// servicios
import { LoginService } from 'src/app/services/auth/Login/login.service';

// importando algoritmos de login
import { LoginAlgorithm } from './algoritmos-login/algoritm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../../assets/plugins/simplebar/css/simplebar.css', 
  '../../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css', 
  '../../../assets/plugins/metismenu/css/metisMenu.min.css' , '../../../assets/css/pace.min.css' ,
   '../../../assets/css/bootstrap.min.css', '../../../assets/css/app.css', '../../../assets/css/icons.css' ]})

export class LoginComponent implements OnInit, AfterViewInit {
  

  public form_login! : FormGroup;

  private Auth! : Login 

  private loginAlgoritm  = new LoginAlgorithm() // clase importada de algoritmos
   
  constructor(
    private formbuilder : FormBuilder, private loginService : LoginService,
    private router : Router,
    private renderer: Renderer2
    ) {
    
  }

  ngOnInit(): void {

    this.form_login = this.formbuilder.group({
      email : ["", [Validators.required, Validators.email]],
      password : ["", [Validators.required, Validators.minLength(8)]],
      save_session : ["", ]
    });

    this.load(); // funcion de carga de formulario reactivo
  }

  async send(){
    // carga los datos en el modelo Login
    this.Auth = {
      email : this.form_login.value.email,
      password : this.form_login.value.password
    } // datos cargados desde el formulario reactivo

    if (this.form_login.value.save_session){
      sessionStorage.setItem('SpCT', this.loginAlgoritm.enCrypt(this.Auth.password));
      sessionStorage.setItem('SmCT', this.loginAlgoritm.enCrypt(this.Auth.email));
      sessionStorage.setItem('UidSesion', this.form_login.value.save_session);
    } else{
      sessionStorage.removeItem('SpCT');
      sessionStorage.removeItem('SmCT');
      sessionStorage.removeItem('UidSesion');
    }

    (await this.loginService.session_init(this.Auth)).subscribe(data => {
      sessionStorage.setItem('token', this.loginAlgoritm.enCrypt(data.access));
      this.router.navigate(['/main']);
    })

    
  }

  load(){
    const email = sessionStorage.getItem('SmCT');
    const password = sessionStorage.getItem('SpCT');
    const session = sessionStorage.getItem('UidSesion');

    const data = {
      email: this.loginAlgoritm.deCrypt(email),
      password: this.loginAlgoritm.deCrypt(password),
      save_session: session
    }
    this.form_login.patchValue(data); // metodo para colocar datos dentro del formulario reactivo
  }

  //logica para toogleEYE
  @ViewChild('ToogleEYE', { static: false}) eye_toogle! : ElementRef
  @ViewChild('eye', { static: false}) eye! : ElementRef
  @ViewChild('password', { static: true}) password! : ElementRef

  eye_active = false;

  // funcion para mostrar o ocultar la contraseña
  ToogleEye(){
    const ojo = this.eye.nativeElement
    const a_link =  this.eye_toogle.nativeElement
    const contraseña = this.password.nativeElement

    a_link.addEventListener('click', () => {
      // console.log(this.eye_active)
      if (this.eye_active ==  false){
        this.renderer.addClass(ojo,'bx-show')
        this.renderer.removeClass(ojo,'bx-hide')
        this.renderer.removeAttribute(contraseña, 'type', 'password')
        this.renderer.setAttribute(contraseña, 'type', 'text')
        this.eye_active = true;
      } else{
        this.renderer.addClass(ojo,'bx-hide')
        this.renderer.removeClass(ojo,'bx-show')
        this.renderer.removeAttribute(contraseña, 'type', 'text')
        this.renderer.setAttribute(contraseña, 'type', 'password')
        this.eye_active = false;
      }
    })
  }

  ngAfterViewInit() {
    this.ToogleEye()
  }

  

}
