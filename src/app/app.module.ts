import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterComponent } from './filter/filter.component';
import { ProductsRepository } from './product-list/products';
import { ProductsHttpRepository } from './product-list/products-http';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    FilterComponent,
    FormComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  /* providers: [ProductsRepository], */
  providers: [ProductsHttpRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
