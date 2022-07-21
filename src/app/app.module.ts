import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Admin-Panel/main/main.component';
import { DashBoardComponent } from './Admin-Panel/dash-board/dash-board.component';
import { LoginComponent } from './Admin-Panel/login/login.component';
import { RegistroComponent } from './Admin-Panel/registro/registro.component';
import { PassComponent } from './Admin-Panel/pass/pass.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashBoardComponent,
    LoginComponent,
    RegistroComponent,
    PassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
