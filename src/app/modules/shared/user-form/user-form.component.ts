import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  get avatars(): Array<string> {
    return this._avatars;
  }

  get showModal(): boolean {
    return this._showModal;
  }

  set showModal(value: boolean) {
    this._showModal = value;
  }

  get userAvatar(): string {
    return this._user.avatar || this._defAvatar;
  }

  get countries(): Array<{ name: string; code: string }> {
    return this._countries;
  }

  get user(): User {
    return this._user;
  }

  get profileForm(): FormGroup {
    return this._profileForm;
  }

  @Input() set user(value: User) {
    this._user = value;
    this._buildForm();
    this._patchForm();
  }

  @Output() userChange: EventEmitter<User> = new EventEmitter<User>();

  @Output() isFormValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _user: User = <User>{};

  private _profileForm: FormGroup = this._formBuilder.group({});

  private _countries: Array<{name: string, code: string}> = [
    {name: 'India', code: 'IN'},
    {name: 'United States of America', code: 'US'},
    {name: 'France', code: 'FR'},
    {name: 'Germany', code: 'DE'},
    {name: 'Greece', code: 'GR'},
  ];

  private _defAvatar = '../../../../assets/default-avatar-profile-image.jpeg';

  private _avatars: Array<string> = [
    '../../../../assets/avatar-1.png',
    '../../../../assets/avatar-2.png',
    '../../../../assets/avatar-3.jpeg',
    '../../../../assets/avatar-4.jpeg',
  ]

  private _showModal = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  private _buildForm() {
    this._profileForm = this._formBuilder.group( {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      country: ['', [Validators.required]],
      avatar: [''],
      dob: ['', [Validators.required]],
    });
  }

  private _patchForm() {
    this._profileForm.setValue({
      name: this._user.name || '',
      email: this._user.email || '',
      avatar: this._user.avatar || '',
      country: this._user.country || '',
      dob: this._getDOB() || ''
    });
  }

  private _getDOB() {
    const date = new Date(this._user.dob);
    let month = (date.getMonth() + 1).toString();
    month = month.length === 1 ? '0' + month : month;
    return date.getFullYear() + '-' + month + '-' + date.getDate();
  }

  public selectAvatar(value: string) {
    this._user.avatar = value;
    this._showModal = false;
  }

  public onChange(event: Event) {
    event.preventDefault();

    if (this._profileForm.valid) {
      const value = this._profileForm.getRawValue();

      this._user.name = value.name;
      this._user.email = value.email;
      this._user.country = value.country;
      this._user.dob = value.dob;

      this.userChange.emit(this._user);
      this.isFormValid.emit(true);

    } else {
      this.isFormValid.emit(false);
    }

  }

}
