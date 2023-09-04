import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    ProductComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductComponent]
})
export class SharedModule { }
