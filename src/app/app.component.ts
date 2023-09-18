import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from './shared/models/Product';
import { CartItem } from './cart/models/cart-item.model';
import { ProductService } from './products/product.service';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  product!: Product;
  cartItems!: CartItem[];

  @ViewChild('appTitle', { static: false, read: ElementRef }) appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(
    public productService: ProductService,
    public cartService: CartService) {

  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartList();
  }

  ngAfterViewInit() {
    if (this.appTitle) {
      this.appTitle.nativeElement.textContent = "Shop";
    }
  }

  onQuantityIncrease(item: CartItem) {
    console.log(item);
    this.cartService.addProduct(item.product);
  }

  onQuantityDecrease(item: CartItem) {
    this.cartService.removeProduct(item.product);
  }

  onDeleteItemFromCart(item: CartItem) {
    this.cartService.removeProduct(item.product, true);
  }
}
