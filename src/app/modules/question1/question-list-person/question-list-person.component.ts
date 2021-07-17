import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {first} from "rxjs/operators";
import {User} from "../../../models/user";
import {DefUsers} from "../../../models/static/users";

@Component({
  selector: 'app-question-list-person',
  templateUrl: './question-list-person.component.html',
  styleUrls: ['./question-list-person.component.scss']
})
export class QuestionListPersonComponent implements OnInit {

  set selectedUser(value: User) {
    this._selectedUser = value;
  }

  get isFormValid(): boolean {
    return this._isFormValid;
  }

  set isFormValid(value: boolean) {
    this._isFormValid = value;
  }

  get showModal(): boolean {
    return this._showModal;
  }

  set showModal(value: boolean) {
    this._showModal = value;
  }

  get selectedUser(): User {
    return this._selectedUser;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  get users(): Array<User> {
    return this._users;
  }

  private _users: Array<User> = [];

  private _isLoading = true;

  private _showModal = false;

  private _selectedUser: User = <User>{};

  private _isFormValid = false;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._getAllUsers();
  }

  private _getAllUsers() {
    this._userService.getAll().pipe(first()).subscribe((response) => {
      if (Array.isArray(response)) {
        this._users = !response.length ? DefUsers : response;
      }
      this._isLoading = false;
    }, error => {
      this._isLoading = false;
      console.error(error);
    });
  }

  public onSelectUser(event: User) {
    this._selectedUser = event;
    this._showModal = true;
  }

  public updateUser(event: Event) {
    event.preventDefault();

    const index = this._users.findIndex((_user) => _user.email === this._selectedUser.email);
    if (index !== -1) {
      this._showModal = false;
      this._users[index] = this._selectedUser;
    }
  }

}
