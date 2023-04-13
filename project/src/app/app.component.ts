import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  public user?: User;

  constructor(
    private router: Router, 
    private http: HttpClient, 
    private userService: UserService, 
    ) {
      this.user = this.userService.getUser();
      console.log(this.user)
    }

  ToCart(){
    this.router.navigateByUrl('cart');
  }

  ToAbout(){
    this.router.navigateByUrl('about');
  }

  ToAuth(){
    this.router.navigateByUrl('auth');
  }

  ToContacts(){
    this.router.navigateByUrl('contacts');
  }

  ToProducts(){
    this.router.navigateByUrl('products');
  }

  LogOut(){
    this.userService.logout()
    this.user = this.userService.getUser()
    this.router.navigateByUrl('')
  }

}
