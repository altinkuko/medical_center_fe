import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../data/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = 'http://localhost:8080'
  constructor(private http:HttpClient) { }

  register(user:User){
    return this.http.post(this.BASE_URL + '/user/create', user);
  }
}
