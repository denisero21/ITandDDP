import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/models';

@Component({
  selector: 'app-chang-pas',
  templateUrl: './chang-pas.component.html',
  styleUrls: ['./chang-pas.component.css']
})
export class ChangPasComponent {
  login: string = '';
  password: string = '';
  repeatPassword: string = '';
  errorMessage: string = '';
  check: boolean = true;
  
  constructor(private userService: UserService, private router: Router) {}

  ToAuth(){
    this.router.navigateByUrl('auth');
  }

  ChangPas(): void{
    if(this.login !== '' && this.password !== '' && this.repeatPassword !== ''){
      this.userService.getUsers().forEach(item =>{
          if (item.login === this.login){
            if(this.password === this.repeatPassword){
              const user: User = {
                login: this.login,
                password: this.password
              };
              this.userService.updatePassword(user);
              alert('Пароль изменен')
              this.router.navigateByUrl('')
              this.check = false;
            }
            else{
              alert('Пароли не совпадают')
              this.check = false;
            }
          }
      })
      if (this.check){
        alert('Пользователь не найден')
      }
    }
    else{
      alert('Заполните все поля корректно')
    }
  }
}
