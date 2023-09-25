import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {

  @Input() cartItems!: CartItem[];
  @Input() totalSum!: number;
  @Input() totalQuantity!: number;
  @Input() isEmptyCart!: boolean;
  // обычно в нижнем регистре
  @Output() QuantityDecrease = new EventEmitter<CartItem>();
  @Output() QuantityIncrease = new EventEmitter<CartItem>();
  @Output() DeleteItem = new EventEmitter<CartItem>();

  sortItems = ['product.price', 'quantity', 'product.name'];
  selectedSortItem = this.sortItems[0];
  isAscending = true;

  onQuantityIncrease(item: CartItem) {
    this.QuantityIncrease.emit(item);
  }

  onQuantityDecrease(item: CartItem) {
    this.QuantityDecrease.emit(item);
  }

  onDeleteItem(item: CartItem) {
    this.DeleteItem.emit(item);
  }

  trackByItems(index: number, item: CartItem) {
    return item.product.name;
  }
}
