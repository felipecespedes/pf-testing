import { Question } from '../../shared/models/question.model';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  @Input()
  public questions: Question[];

  constructor() {
  }

}
