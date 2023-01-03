import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Grocery } from 'src/app/models/grocery.model';
import { UpdateGrocery } from 'src/app/models/update-grocery.model';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-edit-grocery',
  templateUrl: './edit-grocery.component.html',
  styleUrls: ['./edit-grocery.component.css']
})
export class EditGroceryComponent implements OnInit {

  constructor(private grocerService: GroceryService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) { }

  grocery!: Grocery;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const id = params.get("id");

        if(id){
          this.grocerService.getGroceryById(id)
          .subscribe(
            response =>{
              this.grocery = response;
            }
          );
        }
      }
    )
  }

  onSubmit(){
    debugger
    const newGrocery: UpdateGrocery = {
      groceryID: this.grocery.groceryID,
      groceryName: this.grocery.groceryName,
      price: this.grocery.price,
      stock: this.grocery.stock
    }

    this.grocerService.editGrocery(newGrocery)
    .subscribe(
      response =>{
        this.toastr.success("Successfully edited Grocery","Success");
      }
      );

      this.router.navigate(["/grocery"]);
  }

  onDelete(){
    this.grocerService.deleteGrocery(this.grocery.groceryID)
      .subscribe(
        response =>{
          this.router.navigate(["/grocery"]);
            this.toastr.warning("Successfully deleted Grocery", "Warning",);
        }
      );
  }

}
