import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MdToolbarModule } from '@angular/material';
import { ApolloModule } from 'apollo-angular';

import { isBrowser } from './util/helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CoreModule } from 'app/core/core.module';
import { SharedModule } from 'app/shared/shared.module';

// if (isBrowser()) {
//   require('hammerjs');
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'pwa-app' }),
    CoreModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule' }
    ]),
    MdToolbarModule,
    SharedModule
  ],
  providers: [
    Meta,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
