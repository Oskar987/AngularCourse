import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  // Я бы организовал один инпут и передал объект продукта целиком. Реккомендую так сделать.
  @Input() id: number = 0;
  @Input() price: number = 0;
  @Input() description: string = '';
  @Input() name: string = '';

  onAddToCart(id: number) {
    console.log(`The item ${id} is added to cart!`);
  }
}
