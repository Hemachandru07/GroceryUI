import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddGrocery } from 'src/app/models/add-grocery.model';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css']
})
export class AddGroceryComponent implements OnInit {

  constructor(private groceryService: GroceryService,
              private router: Router,
              private toastr: ToastrService) { }

  grocery: AddGrocery = {
    groceryName: "",
    price: "",
    stock: ""
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.groceryService.addGrocery(this.grocery)
      .subscribe(
        response =>{
          this.router.navigate(["/grocery"]);
          this.toastr.success("Successfully added Grocery","Success");
        }
      );
  }

}
