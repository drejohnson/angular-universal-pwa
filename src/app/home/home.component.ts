import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  template: `<h3>{{ message }}</h3>`
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Angular Universal PWA');
    this.metaService.addTags([
      { name: 'description', content: 'An Angular Universal PWA built with the Angular-Cli and deployed to Firebase' },
      { property: 'og:title', content: 'Angular Universal PWA' },
      { property: 'og:description', content: 'An Angular Universal PWA built with the Angular-Cli and deployed to Firebase' },
      { property: 'twitter:title', content: 'Angular Universal PWA' },
      { property: 'twitter:description', content: 'An Angular Universal PWA built with the Angular-Cli and deployed to Firebase' }
    ]);
  }

  ngOnInit() {
    this.message = 'Hello';
  }
}
