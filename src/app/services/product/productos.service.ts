import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../Admin-Panel/models/products/Producto';
import { ProductoImagen } from '../../Admin-Panel/models/products/ProductoImagen';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  BaseUrl = 'http://127.0.0.1:8000'
  constructor(private httpClient: HttpClient) { }
  getProducts(){
    let header = new HttpHeaders().set('Content-type','aplication/json')

    return this.httpClient.get<Producto[]>(this.BaseUrl + '/api/admin/producto/',{headers: header})
  }
 
  getProductImages(){
    let header = new HttpHeaders().set('Content-type','aplication/json')
    
    return this.httpClient.get<ProductoImagen[]>(this.BaseUrl + '/api/admin/presentacion_Producto/',{headers: header})
  }

  getProductImagesById(id:number){
    let header = new HttpHeaders().set('Content-type','aplication/json')
    
    return this.httpClient.get<ProductoImagen>(this.BaseUrl + '/api/admin/presentacion_Producto/'+id+'/',{headers: header})
  }

  getProductById(id:number){

    let header = new HttpHeaders().set('Content-type','aplication/json')
    return this.httpClient.get<Producto>(this.BaseUrl + '/api/admin/producto/'+id+'/',{headers: header})
  }
}
