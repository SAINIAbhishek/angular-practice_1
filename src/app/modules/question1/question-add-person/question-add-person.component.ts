import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-question-add-person',
  templateUrl: './question-add-person.component.html',
  styleUrls: ['./question-add-person.component.scss']
})
export class QuestionAddPersonComponent implements OnInit {

  set isFormValid(value: boolean) {
    this._isFormValid = value;
  }

  get isFormValid(): boolean {
    return this._isFormValid;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get showModal(): boolean {
    return this._showModal;
  }

  set showModal(value: boolean) {
    this._showModal = value;
  }

  private _showModal = false;

  private _user: User = <User>{}

  private _isFormValid = false;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }

  public openModal() {
    this._showModal = true;
  }

  public onClickSignUp(event: Event) {
    event.preventDefault();

    if (this._isFormValid) {
      this._userService.create(this._user).pipe(first()).subscribe((_) => {
        this.openModal();
      }, (error) => {
        console.error(error);
      });
    }
  }

}
