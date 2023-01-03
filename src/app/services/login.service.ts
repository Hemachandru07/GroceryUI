import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerLogin } from '../models/customer-login.model';
import { CustomerRegister } from '../models/customer-register.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  customerRegister(customer: CustomerRegister): Observable<Customer>{
    return this.http.post<Customer>(this.apiBaseUrl + "account/register",customer);
  }

  tokenAuth(customer: CustomerLogin):Observable<Token>{
    return this.http.post<Token>(this.apiBaseUrl+ "account/login", customer);
  }
}
