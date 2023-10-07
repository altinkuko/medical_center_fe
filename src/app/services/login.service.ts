import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private BASEURL = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  doLogin(username:string, password:string){
    return this.http.post(this.BASEURL + '/login', {username, password});
  }

  isLoggedIn(){
    return this.http.get(this.BASEURL + '/isLoggedIn');
  }
}
