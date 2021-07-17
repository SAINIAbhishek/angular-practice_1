import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {UserFormComponent} from "./user-form.component";
import {ModalModule} from "../modal/modal.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  declarations: [
    UserFormComponent,
  ],
  exports: [
    UserFormComponent
  ]
})

export class UserFormModule {}
