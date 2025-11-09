import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './products.html'
})
export class ProductsComponent {
  products = [
    {
      name: 'Nike Shox TL',
      description: 'Легкі бігові кросівки з амортизацією Zoom Air.',
      price: 3200,
      image: 'assets/images/nike-shox-tl.jpg'
    },
    {
      name: 'Nike Air Max 95 "Big Bubble"',
      description: 'Комфортні кросівки для щоденного носіння.',
      price: 4100,
      image: 'assets/images/nike-air-max-95.jpg'
    },
    {
      name: 'Nike V5 RNR N7',
      description: 'Модні кросівки з яскравим дизайном.',
      price: 2900,
      image: 'assets/images/nike-v5-rnr.jpg'
    },
    {
      name: 'New Balance 574',
      price: 4100,
      image: 'assets/images/nb574.jpg',
      description: 'Класичні кросівки, що поєднують стиль і комфорт.'
    },
    {
      name: 'Reebok Premier Road Control W',
      price: 3500,
      image: 'assets/images/reebok-premier-road-control-w.jpg',
      description: 'Легендарний дизайн і натуральна шкіра.'
    },
    {
      name: 'New Balance 1000',
      price: 2800,
      image: 'assets/images/new-balance-1000.jpg',
      description: 'Ікона міського стилю — завжди в моді.'
    },
    {
      name: 'New Balance 550',
      price: 4600,
      image: 'assets/images/new-balance-550.jpg',
      description: 'Ідеальні для бігу на довгі дистанції.'
    },
    {
      name: 'Nike Air Max Goadome',
      price: 3300,
      image: 'assets/images/air-max-goadome.jpg',
      description: 'Символ скейт-культури, що ніколи не старіє.'
    },
    {
      name: 'Fresh Foam X Hierro Mid Gore-Tex',
      price: 9900,
      image: 'assets/images/fresh-foam-x-hierro-mid-gore-tex.jpg',
      description: 'Нерівна місцевість, сміття та волога — це унікальні виклики для взуття, які потребують спеціалізованої конструкції.'
    }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} додано в кошик!`);
  }
}

    