import { Component, Injectable } from '@angular/core';
import { Http } from "@angular/http";

import "rxjs/add/operator/map";

  export interface IProduct{
    imageURl: string;
    name: string;
    price: number;
  }

@Injectable()
export class ProductsHttpRepository {
    public products = [];

    constructor(private http: Http){
    }

    getProducts(){
        return this.http.get('https://shining-torch-4509.firebaseio.com/products.json')
						.map(res => {
            	            let json = res.json();
                            return Object.keys(json).map(function (key) { return json[key]; 
                            });
                        });
    }
}