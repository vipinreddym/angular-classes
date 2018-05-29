import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GrowthComponent } from './services/growthConsulting/growthConsulting.component';
import { ServicesComponent } from './services/services.component';
import { HomePageComponent } from './home/home.component';
import { NewLearning } from './new/new.component';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './app.service';
import {  HttpModule } from '@angular/http';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';



const router : Routes = [
  { path : 'home' , component : HomePageComponent},
  { path : '' , redirectTo:'/home' , pathMatch:'full' },
  { path : 'services' , component : ServicesComponent , children :[
    { path : '' , redirectTo: '/services/growth-consulting' , pathMatch:'full'},
    { path : 'growth-consulting' , component : GrowthComponent }
  ] },
  { path : 'new' , component : NewLearning },
  { path : 'register' , component : RegistrationComponent },
  { path : 'login' , component : LoginComponent },
  { path : 'profile' , component : ProfileComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GrowthComponent,
    ServicesComponent,
    HomePageComponent,
    NewLearning,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
