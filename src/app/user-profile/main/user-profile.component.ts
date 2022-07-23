import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { Usuarios } from 'src/app/models/user/usuarios';
import { UsuariosService } from 'src/app/services/user/usuarios.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css',
              '../../../assets/plugins/simplebar/css/simplebar.css',
              '../../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css',
              '../../../assets/plugins/metismenu/css/metisMenu.min.css',
              '../../../assets/css/pace.min.css',
              '../../../assets/css/bootstrap.min.css',
              '../../../assets/css/app.css',
              '../../../assets/css/icons.css',
              '../../../assets/css/dark-theme.css',
              '../../../assets/css/semi-dark.css',
              '../../../assets/css/header-colors.css',]
})
export class UserProfileComponent implements OnInit {
  

  UrlBase = 'http://localhost:8000'

  usuario!:Usuarios[];
  public formData!: FormGroup;

  constructor(private usuarioService:UsuariosService, private formBuilder:FormBuilder) {

   }

  ngOnInit(): void {
    let token = sessionStorage.getItem('token')
    this.usuarioService.getUsuarios(token).subscribe(data => {
      console.log(data)
    })
    
  }

  initForm():void{
    this.formData= this.formBuilder.group({
      nombres:['',[Validators.required,Validators.minLength(3)]],
      apellidosP:['',[Validators.required,Validators.minLength(3)]],
      apellidosM:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required, Validators.email]],
      dirección:[''],
      fechaNacimiento:[''],
      celular:['',Validators.minLength(9)]
    })}

    send():any{
      console.log(this.formData.value)
    }

}

// export class ProfileEditorComponent {
//   profileForm = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//     address: new FormGroup({
//       street: new FormControl(''),
//       city: new FormControl(''),
//       state: new FormControl(''),
//       zip: new FormControl('')
//     })
//   });
// }

// this.formData = new FormGroup({
//   firstName: new FormControl()
// });
