import { ThemeService } from './theme.service';

export function themeInitFactory(theme: ThemeService): () => void {
  return () => {
    theme.initFromStorage();
  };
}
