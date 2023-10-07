import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {catchError, map, Observable, of} from 'rxjs';
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class LoggGuardGuard {
  constructor(private router:Router,
              private loginService:LoginService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.loginService.isLoggedIn().pipe(
      map((value:boolean) => {
        if (!value) {
          this.router.navigate(['/login']);
          return false;
        }
        else
          return true
      }),
      catchError(()=> {
        alert("Can not authenticate");
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }

}
