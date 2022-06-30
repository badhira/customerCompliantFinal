import { Component, OnInit } from '@angular/core';
import { ServiceAgentService } from 'src/app/services/service-agent.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private serviceAgent:ServiceAgentService) { }
customerArray:any=[]
  ngOnInit(): void {
this.serviceAgent.getCustomers().subscribe((res:any)=>{
  console.log({res})
  this.customerArray=res.items
})
  }

}
