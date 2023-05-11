import { Component,OnChanges,OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import AthuService from '../athu.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {
  val:any;
  forms:any=    {
    email: "",
    password: "",
    fname: "",
    lname: "",
    fathername: "",
    mobile:'' ,
    address: "",
    date: "",
    pincode: '',
    state: {
      abbrev: ""
    },
    city: {
      abbrev: ""
    },
    food: "",
   
  }


  constructor(private _http:HttpClient,private router:Router,private service:AthuService,  private route: ActivatedRoute,) {
    // this.service.getData().subscribe((res)=>{
    //   console.log(res);
    //   this.val=res;
    // })
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
  
  getById(id: number) {
    this.service.getById(id).subscribe((data) => {
      this.forms = data;
    });
  }
  update() {
    this.service.update(this.forms)
    .subscribe({
      next:(data) => {
        this.router.navigate(["user"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.service.getData().subscribe((res)=>{
    //   console.log(res);
    //   this.val=res;
    // })
  }
  // states = [
  //   { abbrev: 'None'},
  //   { abbrev: 'Tamil Nadu'},
  //   { abbrev: 'Kerala'},
  //   { abbrev: 'Pakisthan'},
  //   { abbrev: 'New York'},
  //   { abbrev: 'Landon'},
  // ];
  // citys = [
  //   { abbrev: 'None'},
  //   { abbrev: 'Chennai'},
  //   { abbrev: 'Thirunelveli'},
  //   { abbrev: 'Coimbatore'},
  //   { abbrev: 'Tenkasi'},
  //   { abbrev: 'Surandai'},
  // ];
  // forms:FormGroup= new FormGroup({
  //   email:new FormControl('',[Validators.required,Validators.email]),
  //   password: new FormControl('',[Validators.required]),
  //   fname: new FormControl('',[Validators.required]),
  //   lname: new FormControl('',[Validators.required]),
  //   fathername: new FormControl('',[Validators.required]),
  //   mobile: new FormControl('',[Validators.required]),
  //   address: new FormControl('',[Validators.required]),
  //   //checkbox: new FormControl('',[Validators.required]),
  //   //state: new FormControl('',[Validators.required]),
  //  // city: new FormControl('',[Validators.required]),
  //   date: new FormControl('',[Validators.required]),
  //   pincode: new FormControl('',[Validators.required]),
  //   state: new FormControl(this.states[0]),
  //   city: new FormControl(this.citys[0]),
  //   food: new FormControl(),
  //    });
  //    //singin() {
      //if(this.forms.value.fname==this.val.fname){
        //console.log(this.forms.value);
        // this._http.post<any>('http://localhost:3000/posts'+,this.forms.value)
        // .subscribe(
        //  ress=>{
        //   alert('Update Successfully');
        //   this.route.navigate(['user'])
        //  }
        //);
        
         
    //  } 
      //if(this.forms) {
        //alert('Cannot found')
      //}
      // if(this.forms.valid) {
      //   this._http.post<any>('http://localhost:3000/user',this.forms.value).subscribe()
      // }
    // }
}
