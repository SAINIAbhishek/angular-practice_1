import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {UserFrontService} from "../services/user-front.service";

@Injectable({providedIn: 'root'})
export class LoginGuardService implements CanActivate {

  constructor(private _userFrontService: UserFrontService,
              private _router: Router) {}

  canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot): boolean {

    if (!!this._userFrontService.loggedUser) {
      return true;
    } else {
      this._router.navigate(['/home']);
      return false;
    }

  }

}
