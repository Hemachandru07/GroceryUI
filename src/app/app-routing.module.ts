import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGroceryComponent } from './grocery/add-grocery/add-grocery.component';
import { EditGroceryComponent } from './grocery/edit-grocery/edit-grocery.component';
import { GroceryComponent } from './grocery/grocery/grocery.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './login/customer-register/customer-register.component';
import { HomeComponent } from './login/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "grocery",
    component: GroceryComponent
  },
  {
    path: "grocery/edit/:id",
    component: EditGroceryComponent
  },
  {
    path: "grocery/add",
    component: AddGroceryComponent
  },
  {
    path: "customer/register",
    component: CustomerRegisterComponent
  },
  {
    path: "customer/login",
    component: CustomerLoginComponent
  },
  {
    path: "admin/login",
    component: AdminLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
