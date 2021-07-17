import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Question2Component} from "./question2.component";

const routes: Routes = [
  { path: '', component: Question2Component, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Question2RoutingModule { }
