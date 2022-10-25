import { Component, OnInit } from '@angular/core';
import { PropServiceService } from '../data/prop-service.service';
import { Property } from './viewprop.model';

@Component({
  selector: 'app-viewprop',
  templateUrl: './viewprop.component.html',
  styleUrls: ['./viewprop.component.css']
})
export class ViewpropComponent implements OnInit {

  propDetail:Property|any;

  constructor(private propServ:PropServiceService) { }

  ngOnInit(): void {
    this.propServ.getProp(this.propDetail).subscribe(
      data=>this.propDetail=data
    );
  }

}
