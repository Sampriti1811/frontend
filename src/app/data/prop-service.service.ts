import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Property } from '../viewprop/viewprop.model';

@Injectable({
  providedIn: 'root'
})
export class PropServiceService {

  constructor(private http:HttpClient) { }

  getProp(obj1:any){
    return this.http.get<Property>('http://localhost:8071/property/viewproperty');
  }

  addProp(obj:any){
    return this.http.post('http://localhost:8071/property/addproperty',obj);
  }
  deleteProps(id:any)
  {
    return this.http.delete(`http://localhost:8071/property/deleteproperty/${id}`);
  }
  updateProps(prop: Property,id:any){
    return this.http.put(`http://localhost:8071/property/edit/${id}`, prop);
  }
  getCurrentData(id:any)
  {
    return this.http.get<Property>(`http://localhost:8071/property/edit/${id}`);
  }
}
