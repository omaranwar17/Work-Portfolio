import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom
} from '@angular/core';

import {
  provideHttpClient,
  HttpClient
} from '@angular/common/http';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { themeInitFactory } from './core/theme/theme-init.factory';
import { ThemeService } from './core/theme/theme.service';

import { languageInitFactory } from './core/i18n/language-init.factory';
import { LanguageService } from './core/i18n/language.service';
import { translateLoaderFactory } from './core/i18n/translate-loader.factory';

import {
  TranslateLoader,
  TranslateModule
} from '@ngx-translate/core';

export const appConfig: ApplicationConfig = {

  providers: [

    provideHttpClient(),

    provideRouter(routes),

    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: translateLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),

    {
      provide: APP_INITIALIZER,
      useFactory: themeInitFactory,
      deps: [ThemeService],
      multi: true,
    },

    {
      provide: APP_INITIALIZER,
      useFactory: languageInitFactory,
      deps: [LanguageService],
      multi: true,
    },

  ],

};