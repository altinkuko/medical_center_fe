import {CanActivateFn, Router} from '@angular/router';
import {LoginService} from "./login.service";
import {inject} from "@angular/core";
import {catchError, map, of} from "rxjs";

export const authGuard: CanActivateFn = () => {
    const loginService : LoginService = inject(LoginService);
    const router : Router = inject(Router);
    return loginService.isLoggedIn().pipe(
      map(value => {
        if (!value) {
          router.navigate(['/login']);
          return false;
        }
        else
          return true
      }),
      catchError(()=> {
        alert("Can not authenticate");
        router.navigate(['/login']);
        return of(false);
      })
    );
};
