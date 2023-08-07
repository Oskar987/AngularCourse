import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() id: number = 0;
  @Input() price: number = 0;
  @Input() description: string = '';
  @Input() name: string = '';

  onAddToCart(id: number) {
    console.log(`The item ${id} is added to cart!`);
  }
}
