import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  constructor(private http:HttpClient,private router:Router) {}

  form:FormGroup=new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,]),
  })
  sin() {
    //if() {
      this.http.post('http://localhost:3000/comments',this.form.value).subscribe( res => {
        alert("Success");
        this.router.navigate(['dash'])
      });
//}
  }
}
