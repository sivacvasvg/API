import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { APP_CONFIG, HERO_DI_CONFIG }    from './app.config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';

import {MatButtonModule} from '@angular/material/button';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EditComponent } from './edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlphaDirective } from './alpha.directive';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AdminComponent } from './admin/admin.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { FilterPipe } from './filter.pipe';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { SingupComponent } from './newDask/singup/singup.component';
import { DashbordComponent } from './newDask/dashbord/dashbord.component';
import { DataComponent } from './data/data.component';
import { DashComponent } from './dash/dash.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
   
    UserDetailsComponent,
    EditComponent,
    AlphaDirective,
    AdminComponent,
    FilterPipe,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    Com1Component,
    Com2Component,
    SingupComponent,
    DashbordComponent,
    DataComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,FormsModule, BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,MatInputModule
    
  ],
  providers: [ { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
