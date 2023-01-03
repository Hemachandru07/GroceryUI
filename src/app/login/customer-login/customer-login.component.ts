import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLogin } from 'src/app/models/customer-login.model';
import { Token } from 'src/app/models/token.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) { }

  customer: CustomerLogin ={
    customerEmail: "",
    password: "",
    cPassword: ""
  }

  ngOnInit(): void {
  }

  onSubmit(password: string){
    this.customer.cPassword = password;
    this.loginService.tokenAuth(this.customer)
    .subscribe((response: any) =>{
      console.log(response.token);
      localStorage.setItem("token", response.token);
      this.router.navigate(["/grocery"]);
    });
  }

}
