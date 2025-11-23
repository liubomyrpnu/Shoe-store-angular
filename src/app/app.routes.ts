import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProductsComponent } from './components/products/products';
import { CartComponent } from './components/cart/cart';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent }
];