import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { ShopSearchComponent } from './components/home/shop-search/shop-search.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductsByTypeComponent } from './components/products-by-type/products-by-type.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriesComponent,
    ShopSearchComponent,
    FooterComponent,
    SearchComponent,
    SingInComponent,
    SignUpComponent,
    ProductsByTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
