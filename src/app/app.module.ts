import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Admin-Panel/main/main.component';
import { DashBoardComponent } from './Admin-Panel/dash-board/dash-board.component';
import { RegistroComponent } from './Admin-Panel/registro/registro.component';
import { UserProfileComponent } from './user-profile/main/user-profile.component';
import { HttpClientModule} from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFComponent } from './user-profile/forms/reactive-f/reactive-f.component';
import { CatalogComponent } from './Admin-Panel/catalog/catalog.component';
import { DistributorComponent } from './Admin-Panel/distributor/distributor.component';
import { ListProductComponent } from './Admin-Panel/list-product/list-product.component';
import { HomeComponent } from './frontend/home/home.component';
import { ProductsDetailsComponent } from './Admin-Panel/products-details/products-details.component';
import { NF404Component } from './Admin-Panel/NotFound/NotFound/nf404.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CatalogComponent,
    DistributorComponent,
    ListProductComponent,
    HomeComponent,
    ProductsDetailsComponent,
    DashBoardComponent,
    RegistroComponent,
    UserProfileComponent,
    ReactiveFComponent,
    NF404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
