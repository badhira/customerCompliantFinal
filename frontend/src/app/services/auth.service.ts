import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(user:any){
    return this.http.post("http://localhost:3000/adminLogin",user)
    .subscribe((data)=>{
      console.log('success')
    })
  }
  constructor(private http:HttpClient) { }
}
