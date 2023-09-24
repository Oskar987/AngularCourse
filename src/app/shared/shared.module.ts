import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ApplyStylesDirective } from './directives/apply-styles.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    HighlightDirective,
    ApplyStylesDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductComponent, 
    HighlightDirective,
    ApplyStylesDirective,
    OrderByPipe,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
