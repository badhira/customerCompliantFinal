import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 

import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{ToastrModule} from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ServiceAgentComponent } from './components/service-agent/service-agent.component';
import { AddServiceAgentComponent } from './components/add-service-agent/add-service-agent.component';
import { EditServiceAgentComponent } from './components/edit-service-agent/edit-service-agent.component';
import { ViewServiceAgentComponent } from './components/view-service-agent/view-service-agent.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AuthService } from './services/auth.service';


import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    AdminComponent,
    CustomerComponent,
    ServiceAgentComponent,
    AddServiceAgentComponent,
    EditServiceAgentComponent,
    ViewServiceAgentComponent,
    PageNotFoundComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
