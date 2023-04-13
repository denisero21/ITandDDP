import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  login: string = '';
  password: string = '';
  check: boolean = true;

  constructor(private router: Router, private userService: UserService) {}

  Login(): void{
    if(this.login !== '' && this.password !== ''){
      this.userService.getUsers().forEach(element => {
          if (element.login === this.login){
            if (element.password === this.password){
              this.userService.setUser(element)
              alert('Успешная авторизация')
              this.router.navigateByUrl('')
              this.check = false;
            }
            else{
              alert('Неверный пароль')
              this.check = false;
            }
          }
      });
      if (this.check){
        alert('Неверный логин')
    }
    }
    else{
      alert('Заполните все поля корректно')
    }
  }

  ToReg(){
    this.router.navigateByUrl('reg')
  }

  ToChangPas(){
    this.router.navigateByUrl('change-pas')
  }
}
