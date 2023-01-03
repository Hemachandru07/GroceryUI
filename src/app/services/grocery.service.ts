import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AddGrocery } from "../models/add-grocery.model";
import { Grocery } from "../models/grocery.model";
import { UpdateGrocery } from "../models/update-grocery.model";

@Injectable({providedIn: "root"})
export class GroceryService{

    apiBaseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient){}

    getAllGrocery(): Observable<Grocery[]>{
        return this.http.get<Grocery[]>(this.apiBaseUrl +"grocery");
    }

    getGroceryById(id:string):Observable<Grocery>{
        return this.http.get<Grocery>(this.apiBaseUrl +"grocery/" +id);
    }

    editGrocery(updateGrocery: UpdateGrocery): Observable<Grocery>{
        return this.http.put<Grocery>(this.apiBaseUrl + "grocery", updateGrocery);
    }

    deleteGrocery(id: string): Observable<Grocery>{
        return this.http.delete<Grocery>(this.apiBaseUrl + "grocery",
            {params: new HttpParams().set("id", id)});
    }

    addGrocery(addGrocery: AddGrocery):Observable<Grocery>{
        return this.http.post<Grocery>(this.apiBaseUrl + "grocery",addGrocery);
    }

}
