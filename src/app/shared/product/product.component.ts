import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {

  @Input() product!: Product;
  @Output() addProductToCart = new EventEmitter<Product>();

  onAddToCart() {
    this.addProductToCart.emit(new Product(this.product.id, this.product.name, this.product.description, this.product.price, this.product.isAvailable));
    console.log(`product ${this.product.name} successfully added to cart!`);
  }
}
