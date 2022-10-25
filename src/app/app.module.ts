import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrokerLoginComponent } from './broker-login/broker-login.component';
import { LoginComponent } from './login/login.component';
import { PropertyComponent } from './property/property.component';
import { CustomerComponent } from './customer/customer.component';
import { DealComponent } from './deal/deal.component';
import { CustregComponent } from './custreg/custreg.component';
import { ViewpropComponent } from './viewprop/viewprop.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddpropComponent } from './addprop/addprop.component';
import { UpdatepropComponent } from './updateprop/updateprop.component';

@NgModule({
  declarations: [
    AppComponent,
    BrokerLoginComponent,
    LoginComponent,
    PropertyComponent,
    CustomerComponent,
    DealComponent,
    CustregComponent,
    ViewpropComponent,
    AddpropComponent,
    UpdatepropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
