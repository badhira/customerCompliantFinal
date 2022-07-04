import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddServiceAgentComponent } from './components/add-service-agent/add-service-agent.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { EditServiceAgentComponent } from './components/edit-service-agent/edit-service-agent.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ServiceAgentComponent } from './components/service-agent/service-agent.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { ViewServiceAgentComponent } from './components/view-service-agent/view-service-agent.component';


const routes: Routes = [{path:'',redirectTo:'/admin',pathMatch:'full'},
{ path:'admin',component:AdminComponent},
  {path:'addCustomer',component:AddCustomerComponent},
  {path:'edit/:id',component:AddCustomerComponent},
  {path:'viewCustomer/:customerId',component:ViewCustomerComponent},
  {path:'addServiceAgent',component:AddServiceAgentComponent},
  {path:'editServiceAgent/:agentId',component:EditServiceAgentComponent},
  {path:'viewServiceAgent/:agentId',component:ViewServiceAgentComponent},
  {path:'customer',component:CustomerComponent},
  {path:'serviceAgent',component:ServiceAgentComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'**',component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
