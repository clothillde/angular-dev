import { Component, OnInit, Inject } from '@angular/core';
import { ProductsRepository, IProduct } from './products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 public products: IProduct[] = [];
 public filterUp: boolean = true;

  constructor(productsRepository: ProductsRepository) { 
    this.products = productsRepository.getProducts();
  }

 public onChange(value){
   this.products = this.products.filter((element) => {
      const string = element.name + element.price + element.description;
        return string.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
     /*this.products = this.products.filter((element) => { 
       return element.name.indexOf(value.toLowerCase()) !== -1 || element.price.indexOf(value.toLowerCase()) !== -1 || element.description.indexOf(value.toLowerCase()) !== -1
      });*/
 }

 public toggleText(): void {
    this.filterUp = !this.filterUp;
 }

  ngOnInit() {
  }

}
