import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {AlertModule} from "ngx-bootstrap/alert";
import { DoctorsComponent } from './components/doctors/doctors.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ExampleInterceptorInterceptor} from "./services/example-interceptor.interceptor";
import {CommonModule} from "@angular/common";
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DoctorCreateComponent } from './components/doctor-create/doctor-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    DoctorDetailsComponent,
    DoctorCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AlertModule.forRoot(),
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
