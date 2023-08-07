import { Injectable } from '@angular/core';
import { Product } from './shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products:Product[] = [
    new Product(1, "Apple", "Fresh green apples from Moldova", 1),
    new Product(2, "Orange", "Fresh ornages from Spain", 2),
    new Product(3, "Bread", "Bread without gluten", 2.5),
    new Product(1, "Butter", "cream butter 87%", 3)
  ]

  constructor() { }

  getPurchasedProducts()
  {
    const productsCount: number = this.randomInt(0, 3);
    const cart: Product[] = [];

    for (let index = 0; index < productsCount; index++) {
      cart[index] = this.products[index + 1];
    }

    return cart;
  }

  private randomInt(min:number, max:number)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
}
