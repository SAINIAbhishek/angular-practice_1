import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {LoginGuardService} from "./guards/login-guard.service";


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'question1.1',
    loadChildren: () => import('./modules/question1/question-add-person/question-add-person.module')
      .then((m) => m.QuestionAddPersonModule)
  },
  {
    path: 'question1.2',
    loadChildren: () => import('./modules/question1/question-list-person/question-list-person.module')
      .then((m) => m.QuestionListPersonModule)
  },
  {
    path: 'question2',
    loadChildren: () => import('./modules/question2/question2.module').then((m) => m.Question2Module),
    canActivate: [LoginGuardService]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


const config: ExtraOptions = {
  initialNavigation: 'enabled',
  scrollPositionRestoration: 'top',
  onSameUrlNavigation: 'reload',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
