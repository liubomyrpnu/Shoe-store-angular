import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  addToCart(product: any) {
    this.items.push(product);
    alert(`${product.name} додано до кошика!`);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}
