import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryComponent } from './grocery/grocery/grocery.component';
import { EditGroceryComponent } from './grocery/edit-grocery/edit-grocery.component';
import { FormsModule } from '@angular/forms';
import { AddGroceryComponent } from './grocery/add-grocery/add-grocery.component';
import { HomeComponent } from './login/home/home.component';
import { CustomerRegisterComponent } from './login/customer-register/customer-register.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomInterceptor } from './services/custom.interceptor';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';



@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent,
    EditGroceryComponent,
    AddGroceryComponent,
    HomeComponent,
    CustomerRegisterComponent,
    CustomerLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 3000,positionClass: 'toast-top-right', preventDuplicates: true})
  ],
   providers: [{
    provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
