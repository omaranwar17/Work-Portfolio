import { LanguageService } from './language.service';

export function languageInitFactory(language: LanguageService): () => void {
  return () => {
    language.initFromStorage();
  };
}
