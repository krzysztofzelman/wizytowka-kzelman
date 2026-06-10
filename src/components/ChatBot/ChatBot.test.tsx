import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageContext, translations } from '../../context/LanguageContext';
import type { Lang } from '../../context/LanguageContext';
import ChatBot from './ChatBot';

function renderWithLang(lang: Lang) {
  return render(
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggleLang: () => {} }}
    >
      <ChatBot />
    </LanguageContext.Provider>
  );
}

describe('ChatBot smoke test', () => {
  it('renders the chatbot toggle button in PL', () => {
    renderWithLang('pl');
    // The toggle button should be present (the AI assistant icon)
    const toggleButton = screen.getByRole('button', { name: /asystent|chatbot|otwórz czat/i }) ||
      document.querySelector('[class*="fab"]') ||
      document.querySelector('button');
    expect(toggleButton).toBeDefined();
  });
});
