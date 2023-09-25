import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AlertModule} from "ngx-bootstrap/alert";
import { DoctorsComponent } from './components/doctors/doctors.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DoctorCreateComponent } from './components/doctor-create/doctor-create.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import {CustomHttpInterceptorInterceptor} from "./services/custom-http-interceptor.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorDetailsComponent,
    DoctorCreateComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        AlertModule.forRoot(),
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
