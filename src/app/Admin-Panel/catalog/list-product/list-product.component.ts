import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductosService } from 'src/app/services/product/productos.service';
import { Producto } from '../../models/products/Producto';
import { ProductoImagen } from '../../models/products/ProductoImagen';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css', '../../../../assets/plugins/simplebar/css/simplebar.css', '../../../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css',
  '../../../../assets/plugins/metismenu/css/metisMenu.min.css','../../../../assets/css/pace.min.css',
  '../../../../assets/css/bootstrap.min.css','../../../../assets/css/app.css', '../../../../assets/css/icons.css', '../../../../assets/css/dark-theme.css']
})
export class ListProductComponent implements OnInit {

  baseUrl = "http://127.0.0.1:8000";

  producto!: Producto[];
  product_imagen!:ProductoImagen[];
  product_image = '';
  
  constructor(private productService : ProductosService) { }

  ngOnInit():void {
    this.productService.getProducts().subscribe(data =>{
      this.producto=data
      
    })

    this.productService.getProductImages().subscribe(image =>{
      this.product_imagen=image
      console.log(this.product_imagen)
    })
    
    
  }


  

}
