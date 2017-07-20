import { Component, OnInit, Inject } from '@angular/core';
import { ProductsRepository, IProduct } from './products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 public products: IProduct[] = [];

  constructor(@Inject(ProductsRepository) private productsRepository: ProductsRepository) { 
  }

 public onChange(value){
   this.products = this.productsRepository.getProducts().filter((element) => {
      const string = element.name + element.price + element.description;
        return string.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
     /*this.products = this.products.filter((element) => { 
       return element.name.indexOf(value.toLowerCase()) !== -1 || element.price.indexOf(value.toLowerCase()) !== -1 || element.description.indexOf(value.toLowerCase()) !== -1
      });*/
 }

 public onClickUp(){
   this.products = this.products.sort((a, b) => {
      return a.price - b.price;
   }) 
 }

  ngOnInit() {
    this.products = this.productsRepository.getProducts();
  }

  getName = (product: any) => product.name;

}
