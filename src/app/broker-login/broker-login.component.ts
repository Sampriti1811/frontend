import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Broker } from './broker.model';

@Component({
  selector: 'app-broker-login',
  templateUrl: './broker-login.component.html',
  styleUrls: ['./broker-login.component.css']
})
export class BrokerLoginComponent implements OnInit {

  constructor(private router:Router,
              private authservice:AuthServiceService) { }
  
  brDetails=new Broker();  
  errMessage = "Invalid Credentials";
  invalidLogin = false;

  ngOnInit(): void {
    console.log();
  }

  // handleLogin(): void {
    

  //   if (this.authservice.auth(this.password)) {
  //          this.router.navigate(['addprop',this.password])
  //          this.invalidLogin = false;
  //      } else {this.invalidLogin = true;

  
  // }
  brSub(){
    this.authservice.subBroker(this.brDetails).subscribe(
      data=> console.log(data)
    );
    this.router.navigate(['addprop',this.brDetails.br_username]);
  }
}

