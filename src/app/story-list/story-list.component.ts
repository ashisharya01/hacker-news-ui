import { Component, OnInit } from '@angular/core';
import { HackerNewsService, Story } from '../hacker-news.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  stories: Story[] = [];
  filteredStories: Story[] = [];
  page: number = 1;
  pageSize: number = 20;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {
    this.hackerNewsService.getNewestStories().subscribe(stories => {
      this.stories = stories;
      this.filteredStories = this.stories;
    });
  }

  search(event: Event): void {
    const term = (event.target as HTMLInputElement).value;
    this.filteredStories = this.stories.filter(story => story.title.toLowerCase().includes(term.toLowerCase()));
  
  }

  get paginatedStories(): Story[] {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredStories.slice(start, start + this.pageSize);
  }
}
