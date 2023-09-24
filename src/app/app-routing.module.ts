import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsComponent} from "./components/doctors/doctors.component";
import {DoctorDetailsComponent} from "./components/doctor-details/doctor-details.component";
import {DoctorCreateComponent} from "./components/doctor-create/doctor-create.component";

const routes: Routes = [
  {path:'', component:DoctorsComponent},
  {path:'doctor/details/:id', component:DoctorDetailsComponent},
  {path:'doctor/create', component:DoctorCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
