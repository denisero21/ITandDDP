import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/models';
import { Order } from '../models/models';
import { UserService } from './user.service';
import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productPath = "/assets/db.json";
  public cart: Product[] = [];
  public totalCost: number = 0;
  public order?: Order;


  constructor(private http: HttpClient, private userService: UserService) { }

  public readonly products = {
    get$: (): Observable<Product[]> => {
      return this.http.get<Product[]>(this.productPath)
    }
  }

  getItems() {
    return this.products
  }

  addToCart(product: Product): void{
    this.cart.push(product);
    this.getTotalCost();
    this.userService.setCart(this.cart);
    alert('Товар добавлен в корзину');
  }

  removeFromCart(product: Product): void{
    const index = this.cart.indexOf(product);
    if(index !== -1){
      this.cart.splice(index, 1);
    }
    this.userService.setCart(this.cart);
    this.getTotalCost();
    alert('Товар удален из корзины');
  }

  getTotalCost(): number{
    this.totalCost = 0;
    this.cart.forEach(item =>{
      this.totalCost += item.price;
    })
    return this.totalCost;
  }

  takeOrder(order: Order): Order{
    this.userService.setCart(this.cart);
    return this.order = order;
  }

  getCart(): Product[]{
    return this.cart;
  }
}
