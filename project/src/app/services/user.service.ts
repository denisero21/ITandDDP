import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/models';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  public currentUser?: User;
  private check: boolean = true;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    this.currentUser = {
      login: 'a', 
      password: '123',
      cart: []
    }
    this.users.push(this.currentUser)
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(): User | undefined{
    return this.currentUser;
  }


  createUser(user: User): void {
    this.getUsers().forEach(item =>{
      if(user.login === item.login){
        this.check = false
        alert('Пользователь с таким логином уже существует')
      }
    });
    if(this.check){
      this.users.push(user);
      this.currentUser = user;
      alert('Пользователь зарегестрирован')
      this.router.navigateByUrl('')
      console.log(user)
    }
  }

  updatePassword(user: User): void {
    this.users.forEach(item => {
      if (item.login === user.login){
        item.password = user.password;
      }
    });
  }

  setUser(user: User): void{
    this.currentUser = user
  }

  getCart(): Product[] | undefined{
    return this.currentUser?.cart
  }

  setCart(cart: Product[]): void{
    this.currentUser?.cart.splice(0, this.currentUser.cart.length)
    cart.forEach(item =>{
      this.currentUser?.cart.push(item)
    })
  }

  logout(): void{
    this.currentUser = undefined;
    alert('Вы вышли из аккаунта')
  }
}
