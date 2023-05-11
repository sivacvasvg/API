  import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
// interface UserModel{
//   userid: string,
//   name: string,//
//    password: string,
//    email: string,
//    role: string,
//   isActive: boolean
//}
export default class AthuService {
 
  constructor(private http:HttpClient) { }
  //apiurl = 'http://localhost:3000/posts';
   
  getData(){
    let url="http://localhost:3000/posts";
    return this.http.get(url);
  }
  // post () {
  //   let urll ='http://localhost:3000/posts';
  //   return this.http.post(urll,thi)
  // }
  // BookDelete (bookid:String):Observable<number>{
  //   let httpheaders=new HttpHeaders()
  //   .set('Content-type','application/Json');
  //   let options={
  //     headers:httpheaders
  //   };
  //   return this.http.delete<number>(this.bookUrl+"/"+bookid);
  // }
  
  BookDelete (bookid:String):Observable<number>{
    let url1="http://localhost:3000/posts";
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete<number>(url1+"/"+bookid);
  }
  getById(id: number) {
    return this.http.get<any>(`http://localhost:3000/posts/${id}`);
   }
    
   update(payload:any){
    
    return this.http.put(`http://localhost:3000/posts/${payload.id}`,payload);
   }
//   updateData(data: any, id: string): Observable<any> {
//     return this.http.patch(`${this.baseURL}/update/${id}`, data)
// }
    
  // UpdateUser(inputdata: any) {
   
  //   return this.http.post(this.apiurl + '/ActivateUser', inputdata);
  // }
  // GetAllRoles(){
  //   return this.http.get("https://localhost:44308/User/GetAllRole");
  // }
  // GetAllUser():Observable<UserModel[]> {
  //   return this.http.get<UserModel[]>(this.apiurl);
  // }
}
