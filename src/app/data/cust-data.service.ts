import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../customer/customer.model';

export class customer{
  constructor(
    public cust_name:string,
    public cust_age: string,
    public cust_password:string,
    public cust_gender:string,
    public cust_email:string,
    public cust_phno:number,
    public aadhar_no:string
  ){}}

@Injectable({
  providedIn: 'root'
})
export class CustDataService{

  constructor(private httpClient:HttpClient) { }

  regCust(obj:customer){
    return this.httpClient.post('http://localhost:8071/addcustomer',obj);
  }
  
  subCust(obj1:any){
    return this.httpClient.get<Customer>('http://localhost:8071/view',obj1);
  }
}
