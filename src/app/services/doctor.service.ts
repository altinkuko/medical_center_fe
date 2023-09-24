import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Doctor} from "../data/doctor";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }
  private BASEURL = 'http://localhost:8080'
  getAllDoctors(){
    return this.http.get(this.BASEURL + '/doctor/all');
  }
  getDoctorById(id:number){
    return this.http.get(this.BASEURL + `/doctor/`+id);
  }
  updateDoctor(doctor:Doctor){
    return this.http.put(this.BASEURL + '/doctor/update', doctor);
  }
  createDoctor(doctor:Doctor){
    return this.http.post(this.BASEURL + '/doctor/create', doctor);
  }
  deleteDoctor(id:number){
    let param = new HttpParams()
      .append('id', id);
    return this.http.delete(this.BASEURL + '/doctor/delete', {params:param});
  }
}
