import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ShopSearchComponent } from './components/home/shop-search/shop-search.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductsByTypeComponent } from './components/products-by-type/products-by-type.component';
import { TypesComponent } from './components/home/types/types.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductComponent } from './components/product/product.component';
import { DoublePipe } from './pipes/double.pipe';
import { CategoryNamePipe } from './pipes/category-name.pipe';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductsByShopComponent } from './components/products-by-shop/products-by-shop.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ProductsByTitleComponent } from './components/products-by-title/products-by-title.component';
import { CartComponent } from './components/cart/cart.component';
import { StoredProductComponent } from './components/stored-product/stored-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShopSearchComponent,
    FooterComponent,
    SearchComponent,
    SingInComponent,
    SignUpComponent,
    ProductsByTypeComponent,
    TypesComponent,
    CategoriesComponent,
    ProductComponent,
    DoublePipe,
    CategoryNamePipe,
    ProductsListComponent,
    ProductsByShopComponent,
    ShopsComponent,
    ProductsByTitleComponent,
    CartComponent,
    StoredProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
