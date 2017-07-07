import { Question } from '../../shared/models/question.model';
import { QuestionsService } from '../../shared/services/data/questions.service';
import { Component, OnInit } from '@angular/core';

enum DisplayMode {
  QUESTIONS,
  RESULTS,
  SCORE
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public questions: Question[] = [];
  public currentQuestion: Question;
  public lastQuestionIndex: number;
  public submitted: boolean;
  public displayMode: DisplayMode;
  public displayModes: any;

  private currentQuestionIndex = 0;

  constructor(private questionsService: QuestionsService) {
    this.displayModes = DisplayMode;
  }

  /**
   * Load questions and initialize questions indexes
   */
  ngOnInit() {
    this.displayMode = DisplayMode.QUESTIONS;
    this.questionsService.getQuestions().subscribe(questions => {
      this.questions = questions;
      this.currentQuestion = this.questions[0];
      this.lastQuestionIndex = this.questions.length - 1;
    });
  }

  /**
   * Increment the current question index
   */
  goToNextQuestion(): void {
    const nextQuestionIndex = this.currentQuestionIndex + 1;
    this.goToQuestion(nextQuestionIndex);
  }

  /**
   * Decrement the current question index
   */
  goToPreviousQuestion(): void {
    const previousQuestionIndex = this.currentQuestionIndex - 1;
    this.goToQuestion(previousQuestionIndex);
  }

  /**
   * Set the current question index to zero
   */
  goToFirstQuestion(): void {
    this.goToQuestion(0);
  }

  /**
   * Set the current question index to the last index
   */
  goToLastQuestion(): void {
    this.goToQuestion(this.lastQuestionIndex);
  }

  /**
   * Validate if the current question index is zero or less
   * @return boolean
   */
  validateFirstQuestionIndex(): boolean {
    return this.currentQuestionIndex <= 0;
  }

  /**
   * Validate if the current question index is equals or greater than the last index
   * @return boolean
   */
  validateLastQuestionIndex(): boolean {
    return this.currentQuestionIndex >= this.lastQuestionIndex;
  }

  /**
   * Restart the quiz, removing all the selected answers and going to the first question.
   * Set the display mode to QUESTIONS, it shows the quiz screen
   */
  restartQuiz(): void {
    this.questions.forEach(question => {
      question.selectedAnswer = null;
    });
    this.goToFirstQuestion();
    this.displayMode = DisplayMode.QUESTIONS;
    this.submitted = false;
  }

  /**
   * If the form is submitted then set the display mode to RESULTS,
   * it shows the review quiz screen
   */
  reviewQuiz(): void {
    if (this.submitted) {
      this.displayMode = DisplayMode.RESULTS;
    }
  }

  /**
   * Set the submitted status to true and set the display mode to SCORE,
   * it shows the quiz score screen
   */
  submitQuiz(): void {
    this.displayMode = DisplayMode.SCORE;
    this.submitted = true;
  }

  /**
   * Return the current question number
   * @return number
   */
  getCurrentQuestionNumber(): number {
    const currentQuestionNumber = this.currentQuestionIndex + 1;
    return currentQuestionNumber;
  }

  /**
   * Show a specific question by its index
   * @param index
   */
  private goToQuestion(index: number): void {
    if (this.questions[index] != null) {
      this.currentQuestion = this.questions[index];
      this.currentQuestionIndex = index;
    }
  }

}
