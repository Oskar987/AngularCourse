import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() products!: Product[] | null;

  constructor(private cartService: CartService) {
  }

  onAddToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
