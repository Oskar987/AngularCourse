import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';
import { FirstComponent } from './first/first.component';
import { ConstantService } from './core/services/constants.service';
import { GENERATED_STRING, GeneratorFactory } from './core/services/generator.factory';
import { GeneratorService } from './core/services/generator.service';
import { APP_INITIALIZER } from '@angular/core';
import { LocalStorageService } from './core/services/local-storage.service';
import { ApplyStylesDirective } from './shared/directives/apply-styles.directive';

const appConfig: ConstantService = {
  App: 'TaskManager',
  Ver: '1.0',
  API_URL: 'http://example.com/api'
}


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    SharedModule
  ],
  providers: [
    {
      provide: ConstantService, useValue: appConfig
    },
    GeneratorService,
    {
      provide: GENERATED_STRING,
      useFactory: (generatorService: GeneratorService) => GeneratorFactory(10, generatorService),
      deps: [GeneratorService],
    },
    {
      provide: LocalStorageService,
      useValue: new LocalStorageService(),
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
