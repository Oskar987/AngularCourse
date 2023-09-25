import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, "Butter", "cream butter 87%", 3, true),
    new Product(2, "Bread", "Bread integral powder", 1, true),
    new Product(3, "Cheese", "Cream cheese 10%", 5, false),
    new Product(4, "Milk", "Milk 3%", 3, false),
    new Product(5, "Yogurt", "Greek yogurt", 0.5, true)
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  onAddToCart(id: number) {
    console.log(`The item ${id} is added to cart!`);
  }
}
