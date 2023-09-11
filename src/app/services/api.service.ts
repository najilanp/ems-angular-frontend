import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userSchema } from '../modules/users/users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url:string="http://localhost:3000"

  constructor(private http:HttpClient){}
  //get admin details
adminDetails(){
  //api call to http://localhost:3000/users/1
  return this.http.get(`${this.base_url}/users/1`)
}

//getallusers
getallUsers(){
    //api call to http://localhost:3000/users
    return this.http.get(`${this.base_url}/users`)
}

//adduser
addUser(user:userSchema){
   //api call to http://localhost:3000/users
   return this.http.post(`${this.base_url}/users`,user)
}
//getexisting user
getexistinguser(id:any){
    //api call to http://localhost:3000/users/id
    return this.http.get(`${this.base_url}/users/${id}`)
}
//updateuser
updateuser(id:any, data:userSchema){
     //api call to http://localhost:3000/users/id
    return this.http.put(`${this.base_url}/users/${id}`,data)
}
//deleteuser
deleteuser(id:any){
  //api call to http://localhost:3000/users/id
  return this.http.delete(`${this.base_url}/users/${id}`)
}
//updateadmin
updateAdmin(adminBody:userSchema){

  //api call to http://localhost:3000/users/1
  return this.http.put(`${this.base_url}/users/1`,adminBody)
}

}
