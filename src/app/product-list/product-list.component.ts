import { Component, OnInit, Inject, Input } from '@angular/core';
/* import { ProductsRepository, IProduct } from './products'; */
import { ProductsHttpRepository, IProduct } from './products-http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: IProduct[] = [];

  /* constructor(@Inject(ProductsRepository) private productsRepository: ProductsRepository) { 
  } */
  constructor(private productsHttpRepository: ProductsHttpRepository){
  }

 public onChange(value){
/*       this.products = this.productsHttpRepository.getProducts().filter((element) => {
      const string = element.name + element.price + element.description;
        return string.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });  */  
     /*this.products = this.products.filter((element) => { 
       return element.name.indexOf(value.toLowerCase()) !== -1 || element.price.indexOf(value.toLowerCase()) !== -1 || element.description.indexOf(value.toLowerCase()) !== -1
      });*/
 }

  public onClickUp(filter){
   if(filter){
    this.products = this.products.sort((a, b) => {
      return a.price - b.price;
   }) 
   }
  else {
    this.products = this.products.sort((a, b) => {
      return b.price - a.price;
   })
  }  
 } 

  ngOnInit() {
     /*    this.products = this.productsRepository.getProducts(); */
      this.productsHttpRepository.getProducts().subscribe(products => this.products = products);  
    }

  getName = (product: any) => product.name;

}
