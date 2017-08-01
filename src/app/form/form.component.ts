import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public productForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.productForm = fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      product: ['', Validators.required],
      productscount: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log("name: "+ this.productForm.value.name + 
                " surname: " + this.productForm.value.surname + 
                " email: " + this.productForm.value.email + 
                " address: " + this.productForm.value.product + 
                " productscount: " + this.productForm.value.productscount);
  }

}
