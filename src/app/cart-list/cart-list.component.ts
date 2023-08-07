import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/Product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  products: Product[] = [];

  constructor(private cartService: CartService) {
  }

  trackByItems(id: number, product: Product): number {
    return product.id;
  }

  ngOnInit(): void {
    this.products = this.cartService.getPurchasedProducts();
  }
}
