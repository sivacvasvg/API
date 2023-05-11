import { Component,Inject, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONFIG, AppConfig } from './app.config';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title: string;
  apiEndpoint!:string ;
 
constructor(
    @Inject(APP_CONFIG) config: AppConfig,private http: HttpClient
  ) {
    this.title = config.title;
    this.apiEndpoint= config.apiEndpoint;
  
  }
  //:FormGroup ;
  form:FormGroup=new FormGroup({
    fname: new FormControl("",Validators.required),
    lname: new FormControl("",Validators.required)
  })
  newSubmit() {
    if (this.form.valid) {
      this.http.post("http://localhost:3000/comments/",this.form.value).subscribe();
    }
  }
  
  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        console.log(data);
      });
  }
 
  date:Date=new Date();
}
