import { Injectable } from '@angular/core';
import { Product } from './shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor() 
  {
    this.products[0] = new Product(1, "Butter", "cream butter 87%", 3);
    this.products[1] = new Product(2, "Bread", "Bread integral powder", 1);
    this.products[2] = new Product(3, "Cheese", "Cream cheese 10%", 5);
    this.products[3] =  new Product(4, "Milk", "Milk 3%", 3);
    this.products[4] =  new Product(5, "Yogurt", "Greek yogurt", 0.5);
  }

  getProducts(): Product[]
  {
    return this.products; 
  }
}
