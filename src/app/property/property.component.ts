import { Component, OnInit } from '@angular/core';
import { PropServiceService } from '../data/prop-service.service';
import { Property } from './property.model';
import { ActivatedRoute, Router } from '@angular/router';

export class Property1{
    
  prop_id:string ;
  prop_type: string;
  offer_type:string;
  city:string;
  price:string;
}
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  //prop:Property1;
  auth: any;
  message: string | undefined;
  id:any;
  prop:Property|any;

  constructor(private data:PropServiceService,
              private router:ActivatedRoute,
              private route:Router) { }

  ngOnInit(): void {
    this.getProps();
    console.log(this.router.snapshot.params['password']);
    //this.id=this.router.snapshot.params['password'];
   // this.id=this.prop;
    this.data.getCurrentData(this.router.snapshot.params['password']).subscribe(
      result=>{
        console.log(result)
      }
    )
  }

  editbutton(id:any){
    this.route.navigate(['updateproperty',id]);
  }

  getProps(){
    this.data.getProp(this.prop).subscribe(
      propData=>{
        console.log(propData);
        this.prop=propData;
      }
    )
  }

  deleteProp(id: any) {
    console.log(`Delete PROP. ${id}`);
    this.data.deleteProps(id).subscribe(
         response => {
        console.log(response);
        //this.message = `Delete of ${id} successful!!`;
        // Since after delete message display the record deleted is still displayed
        // we need to call the refresh function once again, if the performance is not hit
       this.getProps();
      }
      )

      this.getProps();

// }  refreshTodos() {
//     throw new Error('Method not implemented.');
//   }
//}
    }
    }