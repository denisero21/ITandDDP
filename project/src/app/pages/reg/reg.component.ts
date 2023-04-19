import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Product, User } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  login: string = '';
  password: string = '';
  repeatPassword: string = '';

  constructor(private userService: UserService, private router: Router, private containerRef: AppComponent) {}

  ToAuth(){
    this.router.navigateByUrl('auth');
  }

  Reg(): void {
    if(this.login !== '' && this.password !== '' && this.repeatPassword !== ''){
      if(this.password === this.repeatPassword){
        const user: User = {
          username: this.login,
          password: this.password,
          cart: [],
        };
        this.userService.createUser(user);
        this.containerRef.setUser(user);
      }
      else{
        alert('Пароли не совпадают')
      }
    }
    else{
      alert('Заполните все поля корректно')
    }
  }
}
