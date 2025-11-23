import { Component, AfterViewInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { initScrollAnimations } from './anim';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements AfterViewInit {
  products: any[] = [
    { name: 'Nike Street Runner', price: 3200, image: '/assets/home/prod1.jpg' },
    { name: 'Adidas Urban', price: 2800, image: '/assets/home/prod2.jpg' },
    { name: 'Puma Blaze', price: 3100, image: '/assets/home/prod3.jpg' },
    { name: 'New Balance 530', price: 3500, image: '/assets/home/prod4.jpg' }
  ];

  constructor(private cartService: CartService) {}

  ngAfterViewInit() {
    initScrollAnimations();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} додано в кошик!`);
  }
}
