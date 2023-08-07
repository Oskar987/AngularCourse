import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name: string = "";
  description: string = "";
  price: number = 0;
  category: Category = Category.None;
  isAvailable: boolean = true;
}

enum Category {
  Drinks,
  Food,
  Clothes,
  None
}
