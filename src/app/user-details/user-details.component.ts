import { Component,AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import AthuService from '../athu.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
val:any;
  constructor() {
    // this.service.getData().subscribe((res)=>{
    //   console.log(res);
    //   this.val=res;
    // })
  }
  ngOnInit(): void {
    console.log("OnInit")
  }
  ngOnChanges(): void {
    console.log('OnChange')
  }
ngDoCheck(): void {
  console.log(" DoCheck",)
  
} 
ngAfterContentInit(): void {
  console.log("AfterContentInit")
}
ngAfterContentChecked(): void {
  console.log("AftercontenChecked")
}
ngAfterViewInit(): void {
  console.log("AfterrviewInit")
}
ngAfterViewChecked(): void {
  console.log("AfterrViewChecked")
}
ngOnDestroy(): void {
  console.log("OnDestroy")
}
}
