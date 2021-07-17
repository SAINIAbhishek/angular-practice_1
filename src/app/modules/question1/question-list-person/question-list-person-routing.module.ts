import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionListPersonComponent} from "./question-list-person.component";


const routes: Routes = [
  { path: '', component: QuestionListPersonComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionAddPersonRoutingModule { }
