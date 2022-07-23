import { Login } from 'src/app/models/auth/login';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Admin-Panel/main/main.component';
import { LoginComponent } from './Admin-Panel/login/login.component';

const routes: Routes = [
  {path: 'main', 
  component: MainComponent },
  {path: 'login',
  component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
