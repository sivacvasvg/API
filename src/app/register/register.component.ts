import { Component } from '@angular/core';
import {FormGroup, FormControl,  Validators,FormArray,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { BuiltinType } from '@angular/compiler';
import { AlphaDirective } from '../alpha.directive';
//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _http:HttpClient,private route:Router, ) {}
 
  inputvalue = "";
  inputvalue1 = "";
  inputvalue2 = "";
  states = [
    { abbrev: 'None'},
    { abbrev: 'Tamil Nadu'},
    { abbrev: 'Kerala'},
    { abbrev: 'Pakisthan'},
    { abbrev: 'New York'},
    { abbrev: 'Landon'},
  ];
  citys = [
    { abbrev: 'None'},
    { abbrev: 'Chennai'},
    { abbrev: 'Thirunelveli'},
    { abbrev: 'Coimbatore'},
    { abbrev: 'Tenkasi'},
    { abbrev: 'Surandai'},
  ];
  unamePattern = "^[0-9_-]{8,15}$";
  forms:FormGroup= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email, ]),
    password: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(2)]),
    fname: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z_-]*$/)]),
    lname: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z_-]*$/)]),
    fathername: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z_-]*$/)]),
    mobile: new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(10),Validators.min(1000000000), Validators.max(999999999999)]),
    address: new FormControl('',[Validators.required,]),
    //checkbox: new FormControl('',[Validators.required]),
    //state: new FormControl('',[Validators.required]),
   // city: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required]),
    pincode: new FormControl('',[Validators.required]),
    state: new FormControl(this.states[1]),
    city: new FormControl(this.citys[1]),
    food: new FormControl(),
    
     });
     
     singin() {
      if(this.forms.value){
        //console.log(this.forms.valid);
        this._http.post<any>('http://localhost:3000/posts',this.forms.value).subscribe(
         res=>{
          alert('Registeration successfully');
          this.route.navigate(['login'])
         }
        );
        
         
      } 
      if(this.forms.invalid) {
   alert('Please fill the all')
      }
      // if(this.forms.valid) {
      //   this._http.post<any>('http://localhost:3000/user',this.forms.value).subscribe()
      // }
     }
     res1:any;

     checking() {
      this._http.get('http://localhost:3000/user').subscribe(res => {this.res1=res});
      console.log(this.res1)
     }
    
}
