import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  /** Current theme; kept in sync with `document.documentElement[data-theme]`. */
  readonly theme = signal<ThemeMode>('dark');

  /** Call once at app bootstrap (browser) to align state with storage / system. */
  initFromStorage(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const stored = this.readStored();
    const resolved = stored ?? this.systemPreference();
    this.applyTheme(resolved, false);
  }

  setTheme(mode: ThemeMode): void {
    this.applyTheme(mode, true);
  }

  toggle(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private readStored(): ThemeMode | null {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v === 'light' || v === 'dark' ? v : null;
    } catch {
      return null;
    }
  }

  private systemPreference(): ThemeMode {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  private applyTheme(mode: ThemeMode, persist: boolean): void {
    const html = this.document.documentElement;
    html.setAttribute('data-theme', mode);
    html.style.colorScheme = mode;
    this.theme.set(mode);

    if (persist && isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(STORAGE_KEY, mode);
      } catch {
        /* ignore quota / private mode */
      }
    }
  }
}
