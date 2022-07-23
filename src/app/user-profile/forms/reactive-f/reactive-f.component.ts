import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-f',
  templateUrl: './reactive-f.component.html',
  styleUrls: ['./reactive-f.component.css']
})
export class ReactiveFComponent implements OnInit {

  public formDatos!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formDatos = this.initForm()
   }
  

  send() : any{
    console.log(this.formDatos.value);}


  onsubmit():void{
    console.log('Form->');
  }
  
  initForm():FormGroup{
    return this.formBuilder.group({
      nombres:['',[Validators.required,Validators.minLength(3)]],
      apellidosP:['',[Validators.required]],
      apellidosM:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      dirección:['',Validators.required],
      fechaNacimiento:['',Validators.required],
      celular:['']
    })
  }


}

