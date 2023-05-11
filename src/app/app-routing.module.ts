import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CanGuard } from './can.guard';
import { EditComponent } from './edit/edit.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashbordComponent } from './newDask/dashbord/dashbord.component';
import { DataComponent } from './data/data.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
 { path:'',component:SignupComponent},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'user',component:UserComponent},
  { path:'user-details',component:UserDetailsComponent,},
  
  { path:'edit/:id',component:EditComponent,canActivate:[CanGuard]},
  { path:'admin',component:AdminComponent,},
  {path:'newDask/singup ',component:SignupComponent},
  { path:'newDask/dashbord',component:DashbordComponent},
  //{ path:'**',redirectTo:'newDask/singup'},
  //  { path:'data',component:DataComponent},
  //  { path:'dash',component:DashComponent},
   { path:'**', redirectTo:'admin'}
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
