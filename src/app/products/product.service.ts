import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor() {
    this.products[0] = new Product(1, "Butter", "cream butter 87%", 3, true);
    this.products[1] = new Product(2, "Bread", "Bread integral powder", 1, true);
    this.products[2] = new Product(3, "Cheese", "Cream cheese 10%", 5, false);
    this.products[3] = new Product(4, "Milk", "Milk 3%", 3, false);
    this.products[4] = new Product(5, "Yogurt", "Greek yogurt", 0.5, true);
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  onAddToCart(id: number) {
    console.log(`The item ${id} is added to cart!`);
  }
}
