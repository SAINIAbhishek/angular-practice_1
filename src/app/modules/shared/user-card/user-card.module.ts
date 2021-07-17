import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserCardComponent} from "./user-card.component";
import {PipeModule} from "../../../pipe/pipe.module";


@NgModule({
  imports: [
    CommonModule,
    PipeModule
  ],
  declarations: [
    UserCardComponent
  ],
  exports: [
    UserCardComponent
  ]
})

export class UserCardModule { }
