import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard {
  constructor(private authservice: AuthService, private router: Router) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> {
  //     return this.authservice.isLoggedIn       
  //       .take(1)                               
  //       .map((isLoggedIn: boolean) => {        
  //         if (!isLoggedIn){
  //           this.router.navigate(['/login']);
  //           return false;
  //         }
  //         return true;
  //       });
  //   }

}
