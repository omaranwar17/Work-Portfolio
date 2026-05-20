import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal, computed, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type SupportedLang = 'en' | 'ar';
export const SUPPORTED_LANGS: SupportedLang[] = ['en', 'ar'];
const STORAGE_KEY = 'portfolio-language';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly availableLanguages = signal<SupportedLang[]>(SUPPORTED_LANGS);
  readonly activeLang = signal<SupportedLang>('en');
  readonly direction = computed(() => (this.activeLang() === 'ar' ? 'rtl' : 'ltr'));
  readonly htmlLang = computed(() => (this.activeLang() === 'ar' ? 'ar' : 'en'));
  readonly isRtl = computed(() => this.direction() === 'rtl');

  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  constructor(@Inject(TranslateService) private translate: TranslateService) {
    this.translate.addLangs(SUPPORTED_LANGS);
    this.translate.setDefaultLang('en');
  }

  initFromStorage(): void {
    const savedLanguage = isPlatformBrowser(this.platformId)
      ? this.readStoredLanguage()
      : null;
    const browserLanguage = this.browserLanguage();
    const initialLanguage = savedLanguage ?? browserLanguage ?? 'en';

    this.setLanguage(initialLanguage, false);
  }

  setLanguage(lang: SupportedLang, persist = true): void {
    const normalized = SUPPORTED_LANGS.includes(lang) ? lang : 'en';
    this.activeLang.set(normalized);
    this.applyDocumentSettings(normalized);

    this.translate.use(normalized);

    if (persist && isPlatformBrowser(this.platformId)) {
      this.writeStoredLanguage(normalized);
    }
  }

  private applyDocumentSettings(lang: SupportedLang): void {
    const html = this.document.documentElement;
    const dir = lang === 'ar' ? 'rtl' : 'ltr';

    html.lang = lang;
    html.dir = dir;
    html.classList.toggle('rtl', dir === 'rtl');
    html.classList.toggle('ltr', dir === 'ltr');
  }

  private browserLanguage(): SupportedLang | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const browserLang = navigator.language?.split('-')[0].toLowerCase();
    if (browserLang === 'ar') {
      return 'ar';
    }

    if (browserLang === 'en') {
      return 'en';
    }

    return null;
  }

  private readStoredLanguage(): SupportedLang | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === 'en' || stored === 'ar' ? stored : null;
    } catch {
      return null;
    }
  }

  private writeStoredLanguage(lang: SupportedLang): void {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /** ignore write failures */
    }
  }
}
