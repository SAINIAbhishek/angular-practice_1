import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {Question2Component} from "./question2.component";
import {Question2RoutingModule} from "./question2-routing.module";
import {ModalModule} from "../shared/modal/modal.module";

@NgModule({
  declarations: [
    Question2Component,
  ],
  imports: [
    CommonModule,
    Question2RoutingModule,
    ModalModule
  ],
  exports: [
    Question2Component,
  ]
})
export class Question2Module { }
