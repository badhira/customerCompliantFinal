import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAgentService {

  constructor(private http:HttpClient) { }

 getCustomers(){
  return this.http.get<any>('http://localhost:5000/customer')
 }
 postCustomers(data:any){
  return this.http.post<any>('http://localhost:5000/customer',data)
 }
 getCustomersById(id:any){
  return this.http.get<any>(`http://localhost:5000/customer/${id}`)
 }
 editCustomers(id:any,data:any){
  return this.http.put<any>(`http://localhost:5000/customer/${id}`,data);
 }
 deleteCustomers(id:any){
  return this.http.delete<any>(`http://localhost:5000/customer/${id}`);
 }
 viewCustomers(id:any){
  return this.http.get<any>(`http://localhost:5000/customer/${id}`);
 }
}
