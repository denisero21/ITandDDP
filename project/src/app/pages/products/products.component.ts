import { Component } from '@angular/core';
import { Product } from 'src/app/models/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = []
  
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.products.get$().subscribe((items: any) => {
        this.products = items;
    });
  }

  toCart(item: Product){
    this.productsService.addToCart(item);
  }

}
