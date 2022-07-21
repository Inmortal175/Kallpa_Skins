import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Admin-Panel/login/login.component';
import { MainComponent } from './Admin-Panel/main/main.component';
import { PassComponent } from './Admin-Panel/pass/pass.component';

const routes: Routes = [
  {path: 'main',  component: MainComponent },
  {path: 'login', component:  LoginComponent },
  {path: `pass`,  component:  PassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
