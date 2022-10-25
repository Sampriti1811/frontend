import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Broker } from './broker-login/broker.model';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient:HttpClient) { }
  auth(password:any){
    if(password==='123'){
      sessionStorage.setItem("brloginauth",password);
      return true;
    }
    else{
      return false;
    }
  }
  authname(username:any){
    if(username==='Sam'){
      sessionStorage.setItem("userloginauth",username);
      return true;
    }else{
      return false;
    }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("userloginauthenticate");
    return !(user === null);
  }
  // deleteTodos(username: string,id:any) {
  //   return this.http.delete<Cust[]>(`http://localhost:8080/users/${username}/todos/${id}`);
  // }

  subBroker(obj1:any){
    return this.httpClient.get<Broker>('http://localhost:8071/viewbrokers',obj1);
  }
  logout(){
    sessionStorage.removeItem("token");
  }
}
