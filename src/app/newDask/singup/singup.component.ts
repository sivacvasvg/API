import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import AthuService from 'src/app/athu.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  constructor(private service:AthuService,private http:HttpClient) {}

  form:FormGroup=new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.pattern('')]),
  })
  singup() {
    if(this.form.valid) {
      this.http.post('http://localhost:3000/profile',this,this.form.value).subscribe();
    }
  }
}
