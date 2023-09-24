import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { FirstComponent } from './first/first.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    FirstComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
