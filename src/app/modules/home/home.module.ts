import { NgModule } from '@angular/core';

import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {ModalModule} from "../shared/modal/modal.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModalModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
