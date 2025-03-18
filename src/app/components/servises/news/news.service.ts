import { Injectable } from '@angular/core';
import { News } from '../../../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news: News[] = [
    new News(1001,"Test",'/favicon.ico','This is a test of news services'),
    new News(1002,"Test",'/favicon.ico','This is the second test of news services')
  ]

}
