import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserFrontService} from "../../services/user-front.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _userFrontService: UserFrontService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  get loggedUser(): User {
    return this._userFrontService.loggedUser;
  }

  public logout(event: Event) {
    event.preventDefault();
    this._userFrontService.logout();
    this._router.navigate(['/home']);
  }

}
