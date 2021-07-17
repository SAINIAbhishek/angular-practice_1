import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable({ providedIn: 'root' })
export class UserFrontService {

  get loggedUser(): User {
    return this._loggedUser;
  }

  set loggedUser(value: User) {
    this._loggedUser = value;
  }

  private _loggedUser: User | null = null;

  constructor() {}

  public loggedIn(user: User) {
    this._loggedUser = user;
  }

  public logout() {
    this._loggedUser = null;
  }

}
