import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
user={
  uname:'',
  password:''
}

  constructor(private _auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
loginUser()
{
this._auth.loginUser(this.user)
.subscribe(res=>{
  localStorage.setItem('token',res.token)
  this.router.navigate(['customers'])
})
  

}
}
