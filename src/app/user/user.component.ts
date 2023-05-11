import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import AthuService from '../athu.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { EditComponent } from '../edit/edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user', 
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {





@ViewChild('content',{static:false}) el!: ElementRef;
constructor( private service:AthuService,private router:Router,private dialog: MatDialog) {
  this.service.getData().subscribe((res)=>{
    // console.log(res);
     this.val=res;
   }) 

 }
  val: any;
  updateuser(code: any) {
    this.OpenDialog('1000ms', '600ms', code);
  }
   
  OpenDialog(enteranimation: any, exitanimation: any, code: string) {
    const popup = this.dialog.open(EditComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '30%',
      data: {
        usercode: code
      }
    });
    popup.afterClosed().subscribe(res => {
    // this.LoadUser();
    });
  }
  //@Input() myDatas:any;
sort(){
  this.val.sort((a: { id: number; }, b: { id: number; }) => {  
    return a.id >= b.id
      ? 1
      : -1
  })
}
reverce(){
  this.val.sort((a: { id: number; }, b: { id: number; }) => {  
    return a.id <= b.id
      ? 1
      : -1
  })
}
sort1(){
  this.val.sort(function (a: { fname:string;  }, b: { fname: string; }) {
  if (a.fname < b.fname) {
    return -1;
  }
  if (a.fname > b.fname) {
    return 1;
  }
  return 0;
});
}
sort2() {
  this.val.sort(function (a: { fname:string;  }, b: { fname: string; }) {
    if (a.fname > b.fname) {
      return -1;
    }
    if (a.fname < b.fname) {
      return 1;
    }
    return 0;
  });
}
//isChecked!:boolean;
readioSelected:any;
showcontent:boolean=false;
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.val.filter = filterValue.trim().toLowerCase();

  // if (this.dataSource.paginator) {
  //   this.dataSource.paginator.firstPage();
  // }
}
term!: string;
searchText!: string;
  ngOnInit(): void {
  
    // let sortedCompany = this.val.sort((a: number, b: number) =>{ return a-b} )
    // console.log(JSON.stringify(sortedCompany));
//     let sortedCompany = this.val.sort((a: { id: number; }, b: { id: number; }) => (a.id > b.id) ? -1 : 1);
// console.log(JSON.stringify(sortedCompany));
// console.log(this.val.sort())
//var val: any[] =[];
//val.sort((a,b) => a.id.rendered.localeCompare(b.id.rendered));
// val.sort((a, b) => (a.color > b.color) ? 1 : -1)
  }
  // sort() {
  //   this.val.sort((a: { id: number; }, b: { id: number; }) => {
  //     return a.id - b.id;
  //   });
    
 // }
  makePDF(){
    let pdf =new jsPDF('l','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("demo.pdf");
      }
    })
    pdf.save();
  }
  /*constructor( private http:HttpClient) { }
  
 ;
  myFunction() {
    this.http.get('http://localhost:3000/posts')
    .subscribe((res)=>{
      console.log(res);
      this.val=res
    })
  } */
  
  //
 
  /*public convertToPDF()
{
html2canvas(document.body).then(canvas => {
// Few necessary setting options
 
 const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
var width = pdf.internal.pageSize.getWidth();
var height = canvas.height * width / canvas.width;
pdf.addImage(contentDataURL, 'pdf', 0, 0, width, height)
pdf.save('output.pdf'); // Generated PDF
});
}*/
 
// BookDelete(bookid:string){
//   this.bookservice.BookDelete(bookid)
//   .subscribe(book=>{
//     this.getsoftBooks();
//   })
// }
BookDelete(bookid:string){
  this.service.BookDelete(bookid)
  .subscribe(
  //   book=>{
  //   this.getsoftBooks();
  // }
  )
}
// BooktoEdit() {
// this.router.navigate(['edit/:id']);
// }
// }
// FunctionUpdate(userid: any) {

//   let popup= this.dialog.open(EditComponent,{
//      width:'400px',
//      // height:'400px',
//      exitAnimationDuration:'1000ms',
//      enterAnimationDuration:'1000ms',
//      data:{
//        userid:userid
//      }
//    })
//    popup.afterClosed().subscribe(item=>{
// this.GetAllUser();
//    });

//  }

}