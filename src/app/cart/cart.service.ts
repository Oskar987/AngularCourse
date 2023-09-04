import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { CartItem } from './models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = [];

  public get totalSum() {
    return this.cart.map(item => (item.product.price * item.quantity)).reduce((acc, current) => acc + current, 0);
  }

  public get totalQuantity() {
    return this.cart.map(item => item.quantity || 0).reduce((acc, curr) => acc + curr, 0);
  }

  getCartList() {
    return this.cart;
  }

  removeFromCart(item: Product, deleteItem: boolean = false) {
    let existingItem = this.cart.find(i => i.product.id == item.id);
    if (!deleteItem && existingItem && existingItem.quantity > 1) {
      --existingItem.quantity;
    }
    else {
      let index = this.cart.findIndex(i => i.product.id === item.id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    }
  }

  addToCart(item: Product) {
    let existingItem = this.cart.find(i => i.product.id == item.id);
    if (existingItem) {
      ++existingItem.quantity;
      return;
    }
    this.cart.push(new CartItem(item, 1));
  }
}
