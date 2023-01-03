import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/models/grocery.model';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

  constructor(private groceryService: GroceryService) { }

  grocery: Grocery[] = [];

  ngOnInit(): void {
    debugger
    this.groceryService.getAllGrocery()
    .subscribe(
      response =>{
        this.grocery = response;
      }
    );
  }

}
