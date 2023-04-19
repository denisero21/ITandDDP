import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
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

  

  constructor(private router: Router, private userService: UserService, private containerRef: AppComponent) {}

  Login(): void{
    if(this.login !== '' && this.password !== ''){
      this.userService.getUsers().forEach(element => {
          if (element.username === this.login){
            if (element.password === this.password){
              this.userService.setUser(element)
              alert('Успешная авторизация');
              this.router.navigateByUrl('')
              this.check = false;
              this.containerRef.setUser(element);
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
