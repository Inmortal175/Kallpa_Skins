import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Admin-Panel/main/main.component';
import { DashBoardComponent } from './Admin-Panel/dash-board/dash-board.component';
import { LoginComponent } from './Admin-Panel/login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndicatorsModule } from './shared';
import { AddProductComponent } from './componentes/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashBoardComponent,
    AddProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    IndicatorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
