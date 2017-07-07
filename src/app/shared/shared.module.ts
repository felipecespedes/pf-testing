import { ResponseAdapterService } from './services/adapters/response-adapter.service';
import { QuestionsService } from './services/data/questions.service';
import { HeadersService } from './services/http/headers.service';
import { URLService } from './services/http/url.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    QuestionsService,
    URLService,
    HeadersService,
    ResponseAdapterService
  ]
})
export class SharedModule { }
