import {Component, OnInit} from '@angular/core';
import {DoctorService} from "../../services/doctor.service";
import {Router} from "@angular/router";
import {Doctor} from "../../data/doctor";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctor-create.component.html',
  styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit{
  createForm:FormGroup;
  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private formBuilder:FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      doctorId:null,
      name:[null, Validators.required],
      specialization:[null, Validators.required],
      username:[null, Validators.required]
    })
  }
  ngOnInit(): void {
  }

  onCreate() {
    this.doctorService.createDoctor(this.createForm.value).subscribe({
      next: ()=> this.router.navigate(['']),
      error: (error)=> alert(error.error)
    })
  }
}
