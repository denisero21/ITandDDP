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


  constructor(private productsService: ProductsService, private userService: UserService) {
    this.getCart();
    this.getTotalCost();
  }

  getCart(): void{
    this.cart = [];
    if(this.productsService.cart !== undefined){
      this.productsService.cart?.forEach(item =>{
        this.cart.push(item);
      })
    }
    else{
      alert('Вы не вошли в аккаунт')
    }
  }

  removeFromCart(item: Product): void{
    this.productsService.removeFromCart(item);
    this.getCart();
    this.getTotalCost()
  }

  getTotalCost(): number{
    return this.totalCost = this.productsService.getTotalCost();
  }

  takeOrder(): void{
    if(this.location !== '' && this.time !== '' && this.note !==''){
      if(this.totalCost !== 0){
        if(this.userService.getUser() !== undefined){
          const order: Order = {
            user: this.userService.getUser()!,
            location: this.location,
            time: this.time,
            note: this.note,
            cost: this.getTotalCost()
          }
          this.productsService.takeOrder(order);
          console.log(order)
          alert("Заказ принят!\nАдрес: " + this.location + "\nВремя подачи: " + this.time + "\nСтоимость: " + this.getTotalCost() + " BYN");
          this.location = '';
          this.time = '';
          this.note = '';
          this.productsService.cart = [];
          this.getCart()
          this.getTotalCost()
        }
        else{
          alert('Вы не вошли в аккаунт')
        }
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
