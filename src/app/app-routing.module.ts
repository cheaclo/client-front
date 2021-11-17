import { AccountComponent } from './components/account/account.component';
import { ProductsByTitleComponent } from './components/products-by-title/products-by-title.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ProductsByShopComponent } from './components/products-by-shop/products-by-shop.component';
import { ProductsByTypeComponent } from './components/products-by-type/products-by-type.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FavouriteComponent } from './components/favourite/favourite.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'sign-in', component: SingInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'products-by-type', component: ProductsByTypeComponent },
  { path: 'products-by-shop', component: ProductsByShopComponent },
  { path: 'products-by-title', component: ProductsByTitleComponent},
  { path: 'shops', component: ShopsComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'account', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
