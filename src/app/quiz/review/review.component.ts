import { Question } from '../../shared/models/question.model';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  @Input()
  public questions: Question[];

  constructor() {
  }

  /**
   * Return the statement with its question number as prefix
   * @param question
   * @return string
   */
  getStatement(question: Question): string {
    const statement = question.number + '. ' + question.statement;
    return statement;
  }

}
