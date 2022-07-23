import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './Admin-Panel/catalog/catalog.component';
import { DistributorComponent } from './Admin-Panel/distributor/distributor.component';
import { ListProductComponent } from './Admin-Panel/list-product/list-product.component';
import { LoginComponent } from './Admin-Panel/login/login.component';
import { MainComponent } from './Admin-Panel/main/main.component';
import { NF404Component } from './Admin-Panel/NotFound/NotFound/nf404.component';
import { ProductsDetailsComponent } from './Admin-Panel/products-details/products-details.component';
import { RegistroComponent } from './Admin-Panel/registro/registro.component';

const routes: Routes = [
  {path: 'login',
  component: LoginComponent},
  {
    path: 'main',
    component: MainComponent,
    children:[
      {
        path: 'producto/:id',
        component: ProductsDetailsComponent
      },
      {
        path: 'list-product',
        component: ListProductComponent
      },
      {
        path: 'add-product',
        component: CatalogComponent
      },
  ]},
  {
    path: 'distributor',
    component: DistributorComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'registro',  
    component:  RegistroComponent
  },
  {
    path: "**",
    component: NF404Component,
    pathMatch: "full"
  },
  {
    path: 'main', 
  component: MainComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
