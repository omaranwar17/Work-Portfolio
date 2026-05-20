import { NgClass, NgFor } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeService } from '../../app/core/theme/theme.service';
import { LanguageService, SupportedLang } from '../../app/core/i18n/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass, NgFor, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);

  readonly theme = this.themeService.theme;
  readonly currentLang = this.languageService.activeLang;
  readonly isRtl = computed(() => this.languageService.direction() === 'rtl');
  readonly availableLanguages = this.languageService.availableLanguages;

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  setLanguage(lang: SupportedLang): void {
    this.languageService.setLanguage(lang);
  }
}
