import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../../data/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private userService:UserService) {
    this.form = this.formBuilder.group({
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      password: this.user.password
    });
  }

  user = new User();
  form:FormGroup;

  register(){
    return this.userService.register(this.form.value).subscribe({
      next: ()=> this.router.navigate(['/login']),
      error: (err)=> alert(err.error)
    });
  }

}
