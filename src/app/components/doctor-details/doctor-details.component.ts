import {Component, OnInit} from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Doctor} from "../../data/doctor";

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doctor: Doctor = new Doctor();
  formGroup: FormGroup;

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      doctorId: this.doctor.doctorId,
      name: [this.doctor.name, Validators.required],
      specialization: [this.doctor.specialization, Validators.required],
      username: [this.doctor.username, Validators.required]
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.doctorService.getDoctorById(id).subscribe(
      (doctor: any) => {
        this.doctor = doctor;
        this.formGroup.patchValue(doctor);
      },
      error => {
        alert(error.error);
        this.router.navigate(['']);
      }
    );
  }

  onUpdate() {
    this.doctorService.updateDoctor(this.formGroup.value).subscribe({
    next: ()=> this.router.navigate(['']),
    error: (error)=> alert(error.error)
    }
    );
  }

}
