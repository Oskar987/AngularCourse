import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplyStyles]'
})
export class ApplyStylesDirective {

  @Input() fontSize = '18px';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick(){
    this.renderer.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
  }
}
