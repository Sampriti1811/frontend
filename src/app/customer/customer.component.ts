import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustDataService } from '../data/cust-data.service';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{


  constructor(private router:Router,
              private custSer:CustDataService){ }
  custDetails=new Customer();
  errMessage = "Invalid Credentials";
  invalidLogin = false;

  ngOnInit(): void {
  }
  // custLogin(): void {
  //   if (this.username === "Sami"  && this.password === '1234' ) {
  //          this.router.navigate(['viewprop',this.username])
  //          this.invalidLogin = false;
  //      } else {this.invalidLogin = true;

  
  // }
  custSub(){
    this.custSer.subCust(this.custDetails).subscribe(
      data=> console.log(data)
    );
    this.router.navigate(['viewprop',this.custDetails.cust_name]);
  }


}

