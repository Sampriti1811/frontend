import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustDataService } from '../data/cust-data.service';

@Component({
  selector: 'app-custreg',
  templateUrl: './custreg.component.html',
  styleUrls: ['./custreg.component.css']
})
export class CustregComponent implements OnInit {

  cust:Customer=new Customer();
  constructor(private router:Router,
              private obj:CustDataService) { }

  
  ngOnInit(): void {
  }
  custReg(){
  //alert('Registration Completed Successfully') ;
    this.obj.regCust(this.cust).subscribe(
      data=>{
        console.log(data);
      this.router.navigate(['custlogin'])}
    );
    
   }

  

}
