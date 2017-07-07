import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../quiz/quiz.module#QuizModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [
    ShellComponent
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
