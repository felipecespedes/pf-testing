import { Question } from '../../shared/models/question.model';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input()
  public question: Question;

  constructor() {
  }

  /**
   * Return the statement with its question number as prefix
   * @return string
   */
  getStatement(): string {
    const question = this.question.number + '. ' + this.question.statement;
    return question;
  }

  /**
   * Return an answer id based on its index
   * @param index
   * @return string
   */
  getAnswerId(index: number): string {
    const answerId = 'answer-' + index;
    return answerId;
  }

}
