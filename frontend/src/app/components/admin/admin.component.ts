import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { ServiceAgentService } from 'src/app/services/service-agent.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private serviceAgent: ServiceAgentService, private toast: ToastrService, private router: Router) { }
  customerArray: any = []
  ngOnInit(): void {
    this.serviceAgent.getCustomers().subscribe((res: any) => {
      console.log({ res })
      this.customerArray = res.items
    })
  }
  navigate() {
    this.router.navigate(['/addCustomer']);
  }

  navigateToEdit(id: any) {
    this.router.navigate([`/edit/${id}`])

  }

  delete(id: any) {
    this.serviceAgent.deleteCustomers(id).subscribe((res: any) => {
      if (res.success === 1) {
        this.toast.success('successfully deleted', 'success')
        this.ngOnInit()

      }
    })
  }
  view(id: any) {
    this.serviceAgent.viewCustomers(id).subscribe((res: any) => {
      if (res.success === 1) {
      this.ngOnInit()
      }
    })
  }
}
