import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpropComponent } from './addprop/addprop.component';
import { BrokerLoginComponent } from './broker-login/broker-login.component';
import { CustomerComponent } from './customer/customer.component';
import { CustregComponent } from './custreg/custreg.component';
import { DealComponent } from './deal/deal.component';
import { LoginComponent } from './login/login.component';
import { PropertyComponent } from './property/property.component';
import { UpdatepropComponent } from './updateprop/updateprop.component';
import { ViewpropComponent } from './viewprop/viewprop.component';

const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'brlogin',component:BrokerLoginComponent},
    {path:'addprop/:password',component:PropertyComponent},
    {path:'custlogin',component:CustomerComponent},
    {path:'custreg',component:CustregComponent},
    {path:'viewprop/:username',component:ViewpropComponent},
    {path:'deal',component:DealComponent},
    {path:'addproperty',component:AddpropComponent},
    {path:'updateproperty/:id',component:UpdatepropComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
