import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
              private router: Router,
              private loginService:LoginService) {
  }

  username:string = '';
  password:string = '';

  onLogin(){
    this.loginService.doLogin(this.username, this.password).subscribe({
      next: (res)=> {
        console.log(res);
        this.createSession();
        this.router.navigate(['']);
      },
      error: ()=> alert("Invalid username or password")
    })
  }

  createSession(){
    sessionStorage.setItem('auth', 'Basic ' + window.btoa(this.username + ':' + this.password))
  }

}
