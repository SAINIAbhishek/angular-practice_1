import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {QuestionAddPersonComponent} from "./question-add-person.component";
import {QuestionAddPersonRoutingModule} from "./question-add-person-routing.module";
import {UserFormModule} from "../../shared/user-form/user-form.module";
import {ModalModule} from "../../shared/modal/modal.module";

@NgModule({
  declarations: [
    QuestionAddPersonComponent
  ],
  imports: [
    CommonModule,
    QuestionAddPersonRoutingModule,
    UserFormModule,
    ModalModule
  ],
  exports: [
    QuestionAddPersonComponent,
  ]
})
export class QuestionAddPersonModule { }
