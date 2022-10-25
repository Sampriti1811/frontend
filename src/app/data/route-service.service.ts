import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteServiceService {

  constructor(private authicationservice:AuthServiceService,
    private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(this.authicationservice.isUserLoggedIn()){
    return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
