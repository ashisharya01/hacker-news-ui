import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  private apiUrl = 'https://your-api-endpoint/api/hackernews/newest';

  constructor(private http: HttpClient) { }

  getNewestStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.apiUrl);
  }
}

export interface Story {
  title: string;
  url: string;
}
