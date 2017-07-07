import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HeadersService {

  /**
   * Return the headers used by the application
   * @return RequestOptions
   */
  static getHeaders(): RequestOptions {
    const headers: Headers = new Headers();
    return new RequestOptions({headers: headers});
  }

}
