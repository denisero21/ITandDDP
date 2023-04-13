import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/models';
import { Order } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productPath = './api/db.json/products'
  public cart: Product[] = [];
  public totalCost: number = 0;
  public order?: Order;


  constructor(private http: HttpClient) { }

  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productPath);
  }

  addToCart(product: Product): void{
    this.cart.push(product);
    this.getTotalCost()
  }

  removeFromCart(product: Product): void{
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
    this.getTotalCost()
  }

  getCart(): Product[]{
    return this.cart;
  }

  getTotalCost(): number{
    this.totalCost = 0;
    this.cart.forEach(item =>{
      this.totalCost += item.price;
    })
    return this.totalCost;
  }

  takeOrder(order: Order): Order{
    return this.order = order;
  }

}
