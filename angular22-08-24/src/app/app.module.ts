import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsexampleComponent } from './formsexample/formsexample.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { BooksComponent } from './books/books.component';
import { ServerComponent } from './server/server.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductmenuComponent } from './productmenu/productmenu.component';
import { AdminComponent } from './admin/admin.component';
import { AddproductComponent } from './addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    FormsexampleComponent,
    DynamicformComponent,
    BooksComponent,
    ServerComponent,
    ProductpageComponent,
    ProductmenuComponent,
    AdminComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
