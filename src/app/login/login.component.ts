import { Component } from '@angular/core';
import {FormGroup, FormControl,  Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private _http:HttpClient,private route:Router) {}
  userDatas:any;
 form:FormGroup= new FormGroup({
email:new FormControl('',[Validators.required,Validators.email]),
password: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(2)])
 });
 id1!:any;
 login() {
  if(this.form.valid){
    //console.log(this.form.value);
    this._http.get<any>('http://localhost:3000/posts')
    .subscribe((res)=>{
      const user = res.find((a:any)=>{
          return a.email== this.form.value.email && a.password==this.form.value.password;


      }
     
      
      )
      if(user){
        this.id1=user.id;
        alert('You are successfully login');
        this.route.navigate(['user-details/id1']);
      } else{
        alert('User not found')
        
      }
      console.log();
      this.userDatas=res;
    }, 
    err=>{
      alert('Something went wrong')
    }
    )

  }
 }
 
}
