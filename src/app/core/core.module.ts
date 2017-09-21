import { NgModule, ModuleWithProviders } from '@angular/core';

import { ApolloModule } from 'apollo-angular';
import { provideClient } from './apollo.client';


@NgModule({
  imports: [
    ApolloModule.forRoot(provideClient)
  ],
  exports: [
    ApolloModule,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
      ]
    };
  }
}

