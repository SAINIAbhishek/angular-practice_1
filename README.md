# Angular Practice 1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Question 1

- Form to create a new Person
  - The form should have fields for name, email, dob, avatar and country.
  
- List of Persons
  - On this page show the Name, Email, Avatar and Age (not date of birth) of the person. To show the age, you should 
   create a pipe. Clicking on the name of any person should open the form to edit the details. Show the list in a "card" format rather than a simple list. (CardView should be a custom component with input parameters).
    
## Question 2

- Covid Vaccine slot booking System
  - Let's Assume that user has already registered, you have to perform user login through mobile_no and password by 
    matching data from login JSON. Read data from data.JSON file and display it in tabular format. Show green 
    colored "Book" button where is_slot_available is true else disabled "Unavailable" button will be shown. Once 
    user clicks on Book button a popup will come with this message "Congratulations! You're vaccine slot has been booked successfully".

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
