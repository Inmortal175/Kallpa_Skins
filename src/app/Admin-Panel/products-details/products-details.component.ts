import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/Productos/producto.service';
import { Producto } from '../models/products/Producto';
import { ProductoImagen } from '../models/products/ProductoImagen';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css', '../../../assets/plugins/simplebar/css/simplebar.css', '../../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css',
  '../../../assets/plugins/metismenu/css/metisMenu.min.css','../../../assets/css/pace.min.css',
  '../../../assets/css/bootstrap.min.css','../../../assets/css/app.css', '../../../assets/css/icons.css', '../../../assets/css/dark-theme.css']
})
export class ProductsDetailsComponent implements OnInit {
  product_details!: Producto;
  product_imagen!:ProductoImagen;

  constructor(private productService: ProductoService,private router: ActivatedRoute) { 

  }

  ngOnInit(): void {

    this.router.params.subscribe( url => {
      const id_producto: number = parseInt(url['id']);
      this.productService.getProductById(id_producto).subscribe(data =>{
        this.product_details = data
        this.productService.getProductImagesById(id_producto).subscribe(image =>{
          this.product_imagen=image
        })
      })
    });

    
    
  }

  

}
