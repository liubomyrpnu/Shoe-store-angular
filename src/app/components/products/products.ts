import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
products = [
  { id: 1, name: 'Nike Air Max', price: 3500, image: 'https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/9f4238f3-a405-470c-ac6b-5f8526d5bd85/NIKE+AIR+MAX+95+OG.png' },
  { id: 2, name: 'Adidas Superstar', price: 3200, image: 'https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/5643ea9848e94c1da869fd176bd19128_9366/IH8659_01_standard.WebP' },
  { id: 3, name: 'Puma - 180', price: 2800, image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/389267/33/sv01/fnd/UKR/w/1000/h/1000/fmt/png' }
];

  addToCart(product: any) {
    alert(`${product.name} додано до кошика!`);
  }
}
