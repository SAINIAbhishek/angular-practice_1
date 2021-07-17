import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionAddPersonComponent} from "./question-add-person.component";


const routes: Routes = [
  { path: '', component: QuestionAddPersonComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionAddPersonRoutingModule { }
