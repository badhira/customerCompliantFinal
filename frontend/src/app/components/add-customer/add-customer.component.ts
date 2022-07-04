import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceAgentService } from 'src/app/services/service-agent.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private serviceaAgent:ServiceAgentService,private toast:ToastrService,private router:Router,private route:ActivatedRoute) { }
data={ 
name:'',
email:'',
mobileNo:'',
productId:'',
productType:'',
compliant:'',
invoiceUrl:''

}
id:any

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log('id is',this.id)
    if(this.id){
      this.serviceaAgent.getCustomersById(this.id).subscribe((res:any)=>{
        console.log({res})
        this.data=res.item
      })
    }
   
  }
  onSubmit(){
    if(this.id){
   this.serviceaAgent.editCustomers(this.id,this.data).subscribe((res:any)=>{
if(res.success==1){
  this.router.navigate(['/'])
}
})
    }else{
      this.serviceaAgent.postCustomers(this.data).subscribe((res:any)=>{
        console.log({ res })
        this.toast.success('successfully added','success');
        if(res.success==1){
          this.router.navigate(['/'])
        }
      
      })
    }

  }

}
