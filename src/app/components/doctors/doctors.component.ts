import {Component, OnInit} from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Doctor} from "../../data/doctor";
import {Router} from "@angular/router";
import {Messages} from "../../static-data/messages";

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
      },
      (error) => {
        if (typeof error.error == 'string' || error.error instanceof String){
          alert(error.error);
        } else {
          alert(Messages.WRONG)
        }
      }
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
        alert(err.error);
      }
    })
  }
}
