import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/models';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public products: Product[] = [];

  constructor(private productsService: ProductsService, private router: Router) {}

  toCart(item: Product){
    this.productsService.addToCart(item);
  }

  ngOnInit() {
    this.productsService.products.get$().subscribe((items: any) => {
      this.products = items;
    });
  }

  ToAbout(){
    this.router.navigateByUrl('about');
  }

  ToContacts(){
    this.router.navigateByUrl('contacts');
  }

  ToProducts(){
    this.router.navigateByUrl('products');
  }

}
