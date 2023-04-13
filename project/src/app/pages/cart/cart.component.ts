import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/models';
import { Order } from 'src/app/models/models';
import { User } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Product[] = []; 
  totalCost: number = 0;

  location: string = '';
  time: string = '';
  note: string = '';

  user: User | undefined = this.userService.getUser()

  constructor(private productsService: ProductsService, private userService: UserService) {}

  getCart(): void{
    this.cart = [];
    this.productsService.cart?.forEach(item =>{
      this.cart.push(item)
    })
  }

  removeFromCart(item: Product): void{
    this.productsService.removeFromCart(item);
    this.getCart();
  }

  getTotalCost(): number{
    return this.totalCost = this.productsService.getTotalCost();
  }

  takeOrder(): void{
    if(this.location !== '' && this.time !== '' && this.note !==''){
      if(this.totalCost !== 0){
        const order: Order = {
          user: this.user!,
          location: this.location,
          time: this.time,
          note: this.note,
          cost: this.getTotalCost()
        }
        this.productsService.takeOrder(order);
      }
      else{
        alert('В вашей корзине нет товаров')
      }
    }
    else{
      alert('Заполните все поля корректно')
    }
  }

}
