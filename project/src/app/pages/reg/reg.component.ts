import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/models';
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

  constructor(private userService: UserService, private router: Router) {}

  ToAuth(){
    this.router.navigateByUrl('auth');
  }

  Reg(): void {
    if(this.login !== '' && this.password !== '' && this.repeatPassword !== ''){
      if(this.password === this.repeatPassword){
        const user: User = {
          login: this.login,
          password: this.password
        };
        this.userService.createUser(user);
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
