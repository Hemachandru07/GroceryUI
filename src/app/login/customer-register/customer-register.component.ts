import { Component, OnInit } from '@angular/core';
import { CustomerRegister } from 'src/app/models/customer-register.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  customer : CustomerRegister = {
    customerName : "",
    customerEmail	: "",
    mobileNumber	: "",
    address	: "",
    password	: "",
    cPassword: ""
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loginService.customerRegister(this.customer)
    .subscribe(
      response =>{
        alert("success");
      }
    );
  }

}
