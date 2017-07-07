import { Injectable } from '@angular/core';

export enum URLKey {
  QUESTIONS
}

@Injectable()
export class URLService {

  private urls: Object;

  constructor() {
    this.initializeURLs();
  }

  /**
   * Return a URL by its key
   * @param key
   * @return string
   */
  getURL(key: URLKey): string {
    let url: string;
    if (this.urls.hasOwnProperty(key)) {
      url = this.urls[key];
    }
    return url;
  }

  /**
   * Initialize a set of URLs used by the application
   */
  private initializeURLs(): void {
    this.urls = {};
    this.urls[URLKey.QUESTIONS] = 'https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple';
  }

}
