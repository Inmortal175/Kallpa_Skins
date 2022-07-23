import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Admin-Panel/main/main.component';
import { DashBoardComponent } from './Admin-Panel/dash-board/dash-board.component';
import { CatalogComponent } from './Admin-Panel/catalog/catalog.component';
import { DistributorComponent } from './Admin-Panel/distributor/distributor.component';
import { ListProductComponent } from './Admin-Panel/list-product/list-product.component';
import { HomeComponent } from './frontend/home/home.component';
import { ProductsDetailsComponent } from './Admin-Panel/products-details/products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashBoardComponent,
    CatalogComponent,
    DistributorComponent,
    ListProductComponent,
    HomeComponent,
    ProductsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
