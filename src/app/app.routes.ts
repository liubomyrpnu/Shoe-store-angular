import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductsComponent } from './components/products/products';
import { Cart } from './components/cart/cart';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: Cart },
];
