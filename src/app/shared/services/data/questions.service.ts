import { Question } from '../../models/question.model';
import { ResponseAdapterService } from '../adapters/response-adapter.service';
import { HeadersService } from '../http/headers.service';
import { URLKey, URLService } from '../http/url.service';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class QuestionsService {

  constructor(
    private http: Http,
    private urlService: URLService
  ) {
  }

  /**
   * Retrieve an array of question from the backend side
   * @return Observable<Question[]>
   */
  getQuestions(): Observable<Question[]> {
    return new Observable((observer: Observer<Question[]>) => {

      this.http.get(
        this.urlService.getURL(URLKey.QUESTIONS),
        HeadersService.getHeaders()
      )
      .map(res => res.json())
      .subscribe(raw => {
        const questions = ResponseAdapterService.adaptQuestions(raw);
        observer.next(questions);
      }, err => {
        observer.error(err);
      }, () => {
        observer.complete();
      });

    });
  }

}
