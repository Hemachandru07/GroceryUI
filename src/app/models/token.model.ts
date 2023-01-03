import { Customer } from "./customer.model";

export interface Token{
    customer: Customer;
    token: string;
}
