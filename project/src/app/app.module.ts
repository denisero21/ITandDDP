import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegComponent } from './pages/reg/reg.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProductsComponent } from './pages/products/products.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorsInterceptor } from './cors.interceptor';
import { ChangPasComponent } from './pages/chang-pas/chang-pas.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthComponent,
    RegComponent,
    CartComponent,
    ContactsComponent,
    ProductsComponent,
    ChangPasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
