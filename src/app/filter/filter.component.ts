import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public search: string = 'Search';
  public filter: boolean = true;

  public myInput = new FormControl();

  @Output() public onchange : EventEmitter<{}> = new EventEmitter();
  @Output() public toggleprices : EventEmitter<{}>= new EventEmitter();

  constructor() { 
    this.myInput.valueChanges.subscribe((value) => {this.onchange.emit(value)});
   }

  public onClick(button) {
    this.toggleprices.emit(button);
  } 

  public toggleText(): void {
    this.filter = !this.filter;
  }

  ngOnInit() {
  }

}
