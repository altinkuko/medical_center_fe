import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router) {
  }
  goLogin() {
    this.router.navigate(['/login']);
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  isLoggedIn(){
    return sessionStorage.getItem('auth') != null;
  }
}
