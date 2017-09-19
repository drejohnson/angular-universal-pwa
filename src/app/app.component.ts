import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/lazy">Lazy</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  constructor(private metaService: Meta, private titleService: Title) {
    this.titleService.setTitle('Angular Universal PWA');
    this.metaService.addTags([
      { name: 'description', content: 'An Angular Universal PWA built with the Angular-Cli and deployed to Firebase' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:site_name', content: 'Angular Universal PWA' },
      { property: 'og:type', content: 'Website' },
      { property: 'og:title', content: 'Angular Universal PWA' },
      { property: 'og:description', content: 'An Angular Universal PWA built with the Angular-Cli and deployed to Firebase' },
      { property: 'twitter:title', content: 'Angular Universal PWA' },
      { property: 'twitter:description', content: 'An Angular Universal PWA built with the Angular-Cli and deployed to Firebase' }
    ]);
  }
}
