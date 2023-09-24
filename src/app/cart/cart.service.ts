import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { CartItem } from './models/cart-item.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cartProducts: CartItem[] = [];

  public get totalSum() {
    return this.cartProducts.map(item => (item.product.price * item.quantity)).reduce((acc, current) => acc + current, 0);
  }
  
  public get totalQuantity() {
    return this.cartProducts.map(item => item.quantity || 0).reduce((acc, curr) => acc + curr, 0);
  }

  getCartList() {
    return this.cartProducts;
  }

  removeProduct(item: Product, deleteItem: boolean = false) {
    let existingItem = this.cartProducts.find(i => i.product.id == item.id);
    if (!deleteItem && existingItem && existingItem.quantity > 1) {
      this.decreaseQuantity(existingItem);
    }
    else {
      this.cartProducts = this.cartProducts.filter(el=>el.product!== item);
    }
  }

  addProduct(item: Product) {
    let existingItem = this.cartProducts.find(i => i.product.id == item.id);
    if (existingItem) {
      this.increaseQuantity(existingItem);
      return;
    }
    this.cartProducts.push(new CartItem(item, 1));
  }

  private changeQuantity(index: number, newQuantity: number){
    if(newQuantity <= 0){
      this.cartProducts = this.cartProducts.filter((_, i) => i !== index);
    }
    else{
      this.cartProducts = this.cartProducts.map((product, i) => (i === index ? { ...product, quantity: newQuantity } : product));
    }
  }

  increaseQuantity(item: CartItem, amount: number = 1){
    const existingProductIndex = this.cartProducts.findIndex(p => p.product.id === item.product.id);

    if (existingProductIndex !== -1) {
      this.changeQuantity(existingProductIndex, this.cartProducts[existingProductIndex].quantity + amount);
    }
  }

  decreaseQuantity(item: CartItem, amount: number = 1){
    const existingProductIndex = this.cartProducts.findIndex(p => p.product.id === item.product.id);

    if(existingProductIndex!== -1){
      this.changeQuantity(existingProductIndex, this.cartProducts[existingProductIndex].quantity - amount);

    }
  }

  removeAllProducts(){
    this.cartProducts = [];
  }

  isEmptyCart(): boolean{
    return this.cartProducts.length === 0;
  }
}
