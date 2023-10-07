import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsComponent} from "./components/doctors/doctors.component";
import {DoctorDetailsComponent} from "./components/doctor-details/doctor-details.component";
import {DoctorCreateComponent} from "./components/doctor-create/doctor-create.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {RegisterComponent} from "./components/register/register.component";
import {authGuard} from "./services/auth-guard.guard";
import {LoggGuardGuard} from "./services/logg-guard.guard";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'doctors', component:DoctorsComponent, canActivate:[LoggGuardGuard]},
  {path:'doctor/details/:id', component:DoctorDetailsComponent},
  {path:'doctor/create', component:DoctorCreateComponent, canActivate:[authGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
