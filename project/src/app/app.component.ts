import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'project';
  public user?: User;
  public users!: User[];
  public check: boolean = false;

  constructor(
    private router: Router, 
    private http: HttpClient, 
    private userService: UserService, 
    ) {}

  ngOnInit(){
    this.user = this.userService.getUser();
    this.users = this.userService.getUsers();
  }

  checkAPI(): void{
    this.check = !this.check;
  }

  public setUser(user: User): void {
    this.user = user;
  }

  ToHome(){
    this.router.navigateByUrl('')
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
  }

}
