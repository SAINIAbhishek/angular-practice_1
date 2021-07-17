import { Component, OnInit } from '@angular/core';
import {Question} from "../../models/question";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {login} from "../../models/static/login";
import {UserFrontService} from "../../services/user-front.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get message(): string {
    return this._message;
  }

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  get isFormValid(): boolean {
    return this._isFormValid;
  }

  get showModal(): boolean {
    return this._showModal;
  }

  set showModal(value: boolean) {
    this._showModal = value;
  }

  get questions(): Array<Question> {
    return this._questions;
  }

  private _questions: Array<Question> = [];

  private _showModal = false;

  private _isFormValid = false;

  private _loginForm: FormGroup = this._formBuilder.group({
    mobile: ['', [Validators.required, Validators.pattern('([0-9])\\w+')]],
    password: ['', [Validators.required]],
  });

  private _message = '';

  constructor(private _userFrontService: UserFrontService,
              private _router: Router,
              private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._initQuestions();
  }

  private _initQuestions() {
    this._questions = [
      {
        heading: 'Question 1',
        info: [
          {
            title: 'Form to create a new Person',
            list: ['The form should have fields for name, email, dob, avatar and country.'],
            button: {
              link: '/question1.1', name: 'Question 1.1 implementation'
            }
          },
          {
            title: 'List of Persons',
            list: [
              'On this page show the Name, Email, Avatar and Age (not date of birth) of the person. ' +
              'To show the age, you should create a pipe.',
              'Clicking on the name of any person should open the form to edit the details',
              'Show the list in a "card" format rather than a simple list. (CardView should be a ' +
              'custom component with input parameters).'],
            button: {
              link: '/question1.2', name: 'Question 1.2 implementation'
            }
          }
        ]
      },
      {
        heading: 'Question 2',
        info: [
          {
            title: 'Covid Vaccine slot booking System',
            list: [
              'Let\'s Assume that user has already registered, you have to perform user login through ' +
              'mobile_no and password by matching data from login JSON.',
              'Read data from data.JSON file and display it in tabular format. Show green colored "Book" ' +
              'button where is_slot_available is true else disabled "Unavailable" button will be shown.',
              'Once user clicks on Book button a popup will come with this message "Congratulations! You\'re ' +
              'vaccine slot has been booked successfully."'
            ],
            button: {
              link: '/question2', name: 'Login'
            }
          }
        ]
      },
    ];
  }

  public navigateTo(heading: string, link: string) {
    if (heading !== 'Question 2') {
      this._router.navigate([`/${link}`]);
    } else {
      this._showModal = true;
    }
  }

  public onClickLogin(event: Event) {
    event.preventDefault();

    this._message = '';
    const values = this._loginForm.getRawValue();

    const find = login.find((_login) => {
      return _login.password === values.password && _login.mobile_no === Number(values.mobile)
    });

    if (!!find) {
      this._showModal = false;
      this._userFrontService.loggedUser = find;
      this._router.navigate(['/question2']);
    } else {
      this._message = 'The mobile number and password do not exists.'
    }
  }
}
