import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageContext, useLanguage, translations } from './LanguageContext';
import type { Lang } from './LanguageContext';
import { type ReactNode } from 'react';

function TestComponent() {
  const { lang, t, toggleLang } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="hero-title">{t.hero.tagline}</span>
      <span data-testid="cta">{t.hero.cta1}</span>
      <button data-testid="toggle" onClick={toggleLang}>
        Toggle
      </button>
    </div>
  );
}

function renderWithLang(lang: Lang) {
  return render(
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], toggleLang: () => {} }}
    >
      <TestComponent />
    </LanguageContext.Provider>
  );
}

describe('LanguageContext', () => {
  it('provides Polish translations by default', () => {
    renderWithLang('pl');
    expect(screen.getByTestId('lang').textContent).toBe('pl');
    expect(screen.getByTestId('hero-title').textContent).toBe(
      translations.pl.hero.tagline
    );
  });

  it('provides English translations when lang is en', () => {
    renderWithLang('en');
    expect(screen.getByTestId('lang').textContent).toBe('en');
    expect(screen.getByTestId('hero-title').textContent).toBe(
      translations.en.hero.tagline
    );
  });

  it('has correct PL nav translations', () => {
    expect(translations.pl.nav.services).toBe('Usługi');
    expect(translations.pl.nav.contact).toBe('Kontakt');
  });

  it('has correct EN nav translations', () => {
    expect(translations.en.nav.services).toBe('Services');
    expect(translations.en.nav.contact).toBe('Contact');
  });

  it('all translation keys match between PL and EN', () => {
    function flattenKeys(obj: Record<string, unknown>, prefix = ''): string[] {
      return Object.entries(obj).flatMap(([key, value]) => {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          return flattenKeys(value as Record<string, unknown>, fullKey);
        }
        return fullKey;
      });
    }

    const plKeys = flattenKeys(translations.pl as unknown as Record<string, unknown>);
    const enKeys = flattenKeys(translations.en as unknown as Record<string, unknown>);

    plKeys.sort();
    enKeys.sort();

    expect(plKeys).toEqual(enKeys);
  });

  it('has correct service counts in both languages', () => {
    expect(translations.pl.services.items).toHaveLength(8);
    expect(translations.en.services.items).toHaveLength(8);
  });

  it('has correct project counts in both languages', () => {
    expect(translations.pl.projects.items).toHaveLength(6);
    expect(translations.en.projects.items).toHaveLength(6);
  });
});
