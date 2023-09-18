import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { GENERATED_STRING } from '../core/services/generator.factory';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantService } from '../core/services/constants.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ApplyStylesDirective } from '../shared/directives/apply-styles.directive';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {

  @Input() name?: string;
  @Input() description?: string;
  @Input() price?: number;
  @Input() category?: Category;
  @Input() isAvailable?: boolean;

  public gString!: string;
  constructor(@Inject(GENERATED_STRING) public generatedString: string,
             public configOptionsService: ConfigOptionsService,
             public constant: ConstantService,
             private localStorageService: LocalStorageService )  {}

  ngOnInit(): void {
    this.gString = this.generatedString
    this.configOptionsService.setConfigProperty("id", 123214);
    this.configOptionsService.setConfigProperty("login", "hordiienkoA");
    this.configOptionsService.setConfigProperty("email", "gord8652@gmail.com");
  }

  onSaveData() {
    this.localStorageService.setItem('myKey', 'myValue');
    console.log("Data was saved");
  }

  onLoadData() {
    const data = this.localStorageService.getItem('myKey');
    if (data) {
      console.log(data);
    } else {
      console.log('Data not found.');
    }
  }

  onClearData() {
    this.localStorageService.clear();
    console.log("The local storage was cleared");
  }
}

enum Category {
  Drinks,
  Food,
  Clothes,
  None
}