import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/models/customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[]
})
export class CustomerComponent implements OnInit {
  customers: customer[]=[];
  customer:customer | undefined;
  name: string | undefined;
  email:string | undefined;
  mobile:number | undefined;
  productId:number | undefined;
  productType:string | undefined;
  compliant:string | undefined;
  invoice:string | undefined;
  status:string | undefined;


  constructor() { }

  ngOnInit(): void {
  //   this.customerService.getCustomers()
  //   .subscribe((customers: customer[])=>this.customers=customers);

  }


}