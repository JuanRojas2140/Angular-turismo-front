import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  products: any;

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe((res: any) =>{
      console.log(res);
      this.products = res;
    })
  }

}
