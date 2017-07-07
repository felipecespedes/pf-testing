import { Injectable } from '@angular/core';
import { Question } from '../../models/question.model';
import * as _ from 'lodash';

@Injectable()
export class ResponseAdapterService {

  /**
   * Adapt a raw data into an array of questions
   * @param raw
   * @return Question[]
   */
  static adaptQuestions(raw: any): Question[] {
    const questions: Question[] = [];

    raw.results.forEach((data, index) => {
      const questionNumber = index + 1;
      const question = ResponseAdapterService.adaptQuestion(data, questionNumber);
      questions.push(question);
    });

    return questions;
  }

  /**
   * Adapt a raw data into a question
   * @param raw
   * @param number
   * @return Question
   */
  static adaptQuestion(raw: any, number: number): Question {
    const question = new Question();
    question.number = number;
    question.statement = raw.question;
    question.correctAnswer = raw.correct_answer;
    question.allAnswers = raw.incorrect_answers.concat(question.correctAnswer);
    question.allAnswers = _.shuffle(question.allAnswers);

    return question;
  }

}
