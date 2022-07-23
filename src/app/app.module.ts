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
import { DistributorComponent } from './Admin-Panel/distributor/distributor.component';
import { ListProductComponent } from './Admin-Panel/catalog/list-product/list-product.component';
import { ProductsDetailsComponent } from './Admin-Panel/catalog/products-details/products-details.component';
import { RegistroComponent } from './Admin-Panel/registro/registro.component';
import { NF404Component } from './Admin-Panel/NotFound/NotFound/nf404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './Admin-Panel/catalog/add-product/add-product.component';
import { UserProfileComponent } from './Admin-Panel/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    DistributorComponent,
    ListProductComponent,
    ProductsDetailsComponent,
    DashBoardComponent,
    RegistroComponent,
    NF404Component,
    AddProductComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    IndicatorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
