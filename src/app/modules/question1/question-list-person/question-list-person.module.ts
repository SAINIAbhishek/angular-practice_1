import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {QuestionListPersonComponent} from "./question-list-person.component";
import {QuestionAddPersonRoutingModule} from "./question-list-person-routing.module";
import {UserCardModule} from "../../shared/user-card/user-card.module";
import {ModalModule} from "../../shared/modal/modal.module";
import {UserFormModule} from "../../shared/user-form/user-form.module";

@NgModule({
  declarations: [
    QuestionListPersonComponent,
  ],
  imports: [
    CommonModule,
    QuestionAddPersonRoutingModule,
    UserCardModule,
    ModalModule,
    UserFormModule
  ],
  exports: [
    QuestionListPersonComponent,
  ]
})
export class QuestionListPersonModule { }
