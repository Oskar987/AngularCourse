import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ApplyStylesDirective } from './directives/apply-styles.directive';

@NgModule({
  declarations: [
    ProductComponent,
    HighlightDirective,
    ApplyStylesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent, 
    HighlightDirective,
    ApplyStylesDirective]
})
export class SharedModule { }
