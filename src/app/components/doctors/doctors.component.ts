import {Component, OnInit} from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Doctor} from "../../data/doctor";
import {Router} from "@angular/router";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit{
  constructor(private doctorService: DoctorService,
              private router: Router) {
  }

  doctors: Doctor[] = [];

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(){
    this.doctorService.getAllDoctors().subscribe(
      (res: any) => {
        this.doctors = res;
        console.log(this.doctors);
      },
      (error) => alert(error.error)
    );
  }

  openDetails(doctorId: number) {
    this.router.navigate(['/doctor/details', doctorId]);
  }

  createDoctor() {
    this.router.navigate(['/doctor/create']);
  }

  deleteDoctor(doctorId: number) {
    this.doctorService.deleteDoctor(doctorId).subscribe({
      next: (res:any)=> {
        alert(res.message);
        this.getDoctors();
      },
      error: (err)=> {
        console.log(err);
        alert(err.error);
      }
    })
  }
}
