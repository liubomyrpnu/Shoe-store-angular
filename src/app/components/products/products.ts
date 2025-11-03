import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent {
  products = [
  { name: 'Кросівки Nike', price: 3500, image: 'assets/images/nike-shox-tl.jpg' },
  { name: 'Кросівки Nike', price: 3200, image: 'assets/images/nike-air-max-95.jpg' },
];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
