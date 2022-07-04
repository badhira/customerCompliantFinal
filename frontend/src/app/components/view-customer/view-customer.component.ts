import { Component, OnInit } from '@angular/core';
import { ServiceAgentService } from 'src/app/services/service-agent.service';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  constructor(private serviceAgent:ServiceAgentService) { }
  customerArray:any=[]
  ngOnInit(): void {
  this.serviceAgent.getCustomers().subscribe((res:any)=>{
  console.log({res})
  this.customerArray=res.items
})
  }
 

}
