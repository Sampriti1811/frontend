import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropServiceService } from '../data/prop-service.service';
import { Property } from '../property/property.model';

@Component({
  selector: 'app-updateprop',
  templateUrl: './updateprop.component.html',
  styleUrls: ['./updateprop.component.css']
})
export class UpdatepropComponent implements OnInit {
  prop:Property=new Property();
  propnew:Property=new Property();
  prop_type:any;
  offer_type:any;
  price:any;
  id:any;
  constructor(private router:Router,
              private obj:PropServiceService,
              private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=this.activateRoute.snapshot.params['id'];
    // console.log(this.id);
    //console.log(this.propnew);
    
    this.obj.getCurrentData(this.id).subscribe(
      data=>console.log(data)
    );
    //  console.log(this.propnew);
    
    // this.prop_type=this.propnew.prop_type;
    // this.offer_type=this.propnew.offer_type;
    // this.price=this.propnew.price;

  }
  propReg(){
    //alert('Registration Completed Successfully') ;
      this.obj.addProp(this.prop).subscribe(
        data=>{
          console.log(data);
        this.router.navigate(['addprop',this.prop.prop_id])}
      );
      
     }

     updateProp(id:any){
      this.obj.updateProps(id,this.prop).subscribe(
        data=>console.log(data)
      );
    }

}
