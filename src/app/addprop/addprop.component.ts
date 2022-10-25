import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropServiceService } from '../data/prop-service.service';
import { Property } from '../property/property.model';

@Component({
  selector: 'app-addprop',
  templateUrl: './addprop.component.html',
  styleUrls: ['./addprop.component.css']
})
export class AddpropComponent implements OnInit {
 
  id:any;
  prop:Property=new Property();
  constructor(private router:Router,
              private obj:PropServiceService,
              private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    //this.id=this.activateroute.snapshot.params['id'];
  }
  propReg(){
    //alert('Registration Completed Successfully') ;
      this.obj.addProp(this.prop).subscribe(
        data=>{
          console.log(data);
        this.router.navigate(['addprop',this.prop.prop_id])}
      );
      
     }

}
