import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { userSchema } from '../users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user:userSchema={}
constructor(private route:ActivatedRoute,private api:ApiService){}

ngOnInit(): void {
  this.route.params.subscribe((res:any)=>{
    const {id} =res
    console.log(id);
    this.existinguser(id)
   
  })
}

existinguser(id:any){
  this.api.getexistinguser(id).subscribe({
    next:(res:userSchema)=>{
     
      this.user=res
      
    },
    error:(err:any)=>{
      console.log(err);
      alert("cannot perform the action now..please try after some time")
      
    }
  })
  
}

updateUser(){
  this.api.updateuser(this.user.id,this.user).subscribe({
next:(res:any)=>{
  console.log(res);
  alert("user details updated successfully")
  
},
error:(err:any)=>{
  console.log(err);
  alert("cannot perform the action now")
  
}
  })
}

cancelUpdate(userId:any){
  this.existinguser(userId)
}


}
