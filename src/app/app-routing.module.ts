import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './Admin-Panel/catalog/catalog.component';
import { DashBoardComponent } from './Admin-Panel/dash-board/dash-board.component';
import { DistributorComponent } from './Admin-Panel/distributor/distributor.component';
import { ListProductComponent } from './Admin-Panel/list-product/list-product.component';
import { MainComponent } from './Admin-Panel/main/main.component';
import { ProductsDetailsComponent } from './Admin-Panel/products-details/products-details.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './frontend/home/home.component';

const routes: Routes = [
  //{path: '',component: HomeComponent},
  {path: '',component: MainComponent,children:[
    {path: 'producto/:id',component: ProductsDetailsComponent},
    {path: 'list-product',component: ListProductComponent},
    {path: 'add-product',component: CatalogComponent},
  ]},
  //{path: 'producto',component: ListProductComponent},
  {path: 'detalle-producto/:id',component: ProductsDetailsComponent},
  {path: 'dash-board',component: DashBoardComponent},
  {path: 'catalog',component: CatalogComponent},
  {path: 'distributor',component: DistributorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
