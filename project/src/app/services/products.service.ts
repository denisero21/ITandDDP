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
  private productPath = '/src/api/db.json/products'
  public cart = this.userService.getCart()
  public totalCost: number = 0;
  public order?: Order;


  constructor(private http: HttpClient, private userService: UserService) { }

  // getItems(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productPath);
  // }

  public readonly products = {
    get$: (): Observable<Product[]> => {
      return this.http.get<Product[]>(this.productPath)
    }
  }

  getItems() {
    return this.products
  }

  addToCart(product: Product): void{
    this.userService.currentUser?.cart.push(product);
    this.getTotalCost()
    this.userService.setCart(this.cart!)
  }

  removeFromCart(product: Product): void{
    const index = this.cart!.indexOf(product);
    if(index !== -1){
      this.userService.currentUser?.cart.splice(index, 1);
    }
    this.getTotalCost()
  }

  getCart(){}

  getTotalCost(): number{
    this.totalCost = 0;
    this.userService.currentUser?.cart.forEach(item =>{
      this.totalCost += item.price;
    })
    return this.totalCost;
  }

  takeOrder(order: Order): Order{
    return this.order = order;
  }

}
