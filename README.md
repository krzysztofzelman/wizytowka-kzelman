<p align="center">
  <img src="public/favicon.svg" alt="KZ logo" width="80" />
</p>

<h1 align="center">Krzysztof Zelman — Wizytówka online</h1>

<p align="center">
  <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="React 19" />
  </a>
  <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=for-the-badge" alt="Vite 8" />
  </a>
  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white&style=for-the-badge" alt="Vercel" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="MIT License" />
  </a>
</p>

<p align="center">
  <b>Nowoczesna, responsywna strona wizytówkowa / portfolio</b><br />
  zbudowana w React 19 z dwujęzycznym interfejsem PL/EN i chatbotem AI.
</p>

<p align="center">
  <a href="https://wizytowka-kzelman.vercel.app/" target="_blank" rel="noopener noreferrer">
    🔗 <b>Zobacz na żywo →</b>
  </a>
</p>

---

## 📋 Spis treści

- [Demo](#-demo)
- [Funkcjonalności](#-funkcjonalności)
- [Stack technologiczny](#-stack-technologiczny)
- [Wymagania](#-wymagania)
- [Instalacja i uruchomienie](#-instalacja-i-uruchomienie)
- [Konfiguracja](#-konfiguracja)
- [API](#-api)
- [Struktura projektu](#-struktura-projektu)
- [Deployment](#-deployment)
- [Najczęstsze problemy](#-najczęstsze-problemy)
- [Rozwój projektu](#-rozwój-projektu)
- [Licencja](#-licencja)
- [Autor](#-autor)

---

## 🚀 Demo

Aplikacja dostępna online pod adresem:

<p align="center">
  <a href="https://wizytowka-kzelman.vercel.app/" target="_blank" rel="noopener noreferrer">
    <b>https://wizytowka-kzelman.vercel.app/</b>
  </a>
</p>

---

## ✨ Funkcjonalności

### 🤖 Chatbot AI z DeepSeek

Interaktywny chatbot oparty na modelu **DeepSeek**, który odpowiada na pytania dotyczące usług, technologii i dostępności Krzysztofa. Działa jako Vercel Serverless Function (`/api/chat`).

- Limit **5 wiadomości** na sesję (zapobiega nadużyciom)
- Stan rozmowy przechowywany w `localStorage`
- Responsywne okno czatu z przyciskiem do otwierania/zamykania
- Automatyczne czyszczenie po przekroczeniu limitu

### 🗂️ Prezentacja portfolio projektów

Strona prezentuje wybrane realizacje z otwartym kodem źródłowym:

| Projekt | Opis | Technologie |
|---|---|---|
| **Smart Mysłowice** | Mapa jakości powietrza i system zgłoszeń dla miasta Mysłowice. | React, TypeScript, Node.js, Leaflet |
| **AutoFlex** | Platforma do wynajmu pojazdów z rezerwacjami online i panelem zarządzania. | Next.js, Supabase, Tailwind CSS |
| **Restauracja – Zamów Online** | Aplikacja do składania zamówień w restauracji – klient wybiera, kuchnia widzi, admin zarządza. | React, TypeScript, Vite, Supabase, Bootstrap, Stripe |
| **Kawa i Ciasteczko** | Strona internetowa dla kawiarni – menu, oferta, formularz kontaktowy i zamówienie online. | Next.js, TypeScript, Tailwind CSS, Supabase |

Każdy projekt posiada link do demo na żywo oraz do repozytorium na GitHubie.

### 🛠️ Lista usług

Osiem kategorii usług freelancerskich:

- 🌐 **Strony WWW** – nowoczesne, szybkie i responsywne, zoptymalizowane pod SEO i Core Web Vitals
- 🛒 **Sklepy online** – e-commerce z integracją Stripe / PayU, panelem produktów i pełnym flow zakupowym
- 🚀 **Landing page** – konwertujące strony lądowania z wyraźnym CTA
- ⚡ **Aplikacje webowe** – pełnostackowe aplikacje React + Node.js z bazą danych i API
- 🤖 **Integracje AI** – chatboty, automatyzacje i funkcje oparte na GPT / Claude / DeepSeek
- 🎨 **Redesign stron** – modernizacja starych serwisów z poprawą UX i wydajności
- 📅 **Systemy rezerwacji** – kalendarze online, rezerwacje i harmonogramy z powiadomieniami
- 🏙️ **Aplikacje miejskie** – mapy interaktywne, raporty i dane publiczne dla samorządów

### 🏭 Sekcja "O mnie" – 10 lat w logistyce

Unikalna perspektywa: 10 lat pracy na magazynie przekute w kod. Rozwiązania tworzone z punktu widzenia osoby, która sama korzysta z systemów magazynowych – proste, intuicyjne i oszczędzające czas.

- Prosty panel magazynowy (przyjęcia, wydania, lokalizacje, stany)
- Podgląd lokalizacji pojazdów
- Zestawienia do Excel / PDF
- Plan zmian z powiadomieniami SMS lub e-mail

### 💡 Sekcja "Dlaczego ja"

Cztery kluczowe zalety współpracy:

- ⚡ **2× szybsze wdrożenie** – dzięki AI (Qwen, Claude) strona lub prosta apka w 2–3 dni
- ✨ **Świeże podejście** – na bieżąco z React 19, TypeScript, Supabase
- 🏭 **Znam magazyn od kuchni** – 10 lat doświadczenia logistycznego w projektach
- 🌍 **Dwujęzyczny (PL/EN)** – dokumentacja i komunikacja po polsku i angielsku

### 📞 Formularz kontaktowy

Dane kontaktowe wyświetlane w przejrzystej karcie:

- 📧 **E-mail:** krzysztof.zelman.92@gmail.com
- 📱 **Telefon:** 666 966 720
- 📍 **Lokalizacja:** Mysłowice / Śląsk

Przycisk "Napisz do mnie" otwiera domyślną klientkę poczty.

### 😊 Ikonki i emoji w UI

Interfejs wzbogacony o emoji i ikonki SVG, które nadają stronie lekkości i ułatwiają szybkie skanowanie treści. Każda karta usługi, zalety czy podsekcji logistycznej ma swoją ikonkę.

### 📱 Responsywny design

W pełni responsywna strona dostosowująca się do wszystkich rozdzielczości – od smartfonów po szerokie monitory. Mobilne menu hamburgerowe z płynną animacją i blokadą scrolla.

### 🔍 Optymalizacja SEO

Strona zoptymalizowana pod kątem wyszukiwarek:

- Meta tagi: `description`, `keywords`
- Open Graph (`og:title`, `og:description`, `og:url`, `og:type`, `og:image`)
- Twitter Card (`summary_large_image`)
- Dane strukturalne JSON-LD (schema.org `Person`)
- Plik `sitemap.xml` i `robots.txt`
- Semantyczny HTML z odpowiednimi `aria-label` dla dostępności

---

## 🧰 Stack technologiczny

| 🛠️ | Technologia | Zastosowanie | Wersja |
|---|---|---|---|
| ⚛️ | **React** | Biblioteka UI – komponenty, stan, kontekst | ^19.2.5 |
| 🔥 | **Vite** | Bundler i narzędzie deweloperskie (HMR, build) | ^8.0.10 |
| 📜 | **JavaScript (JSX)** | Język programowania – gotowy do przejścia na TypeScript | — |
| 🎨 | **CSS Modules** | Stylowanie komponentów – scoped CSS bez konfliktów | — |
| 🤖 | **DeepSeek API** | Silnik chatbota AI – serverless function na Vercel | — |
| ✅ | **ESLint** | Linter kodu – utrzymanie jakości i spójności | ^10.2.1 |
| ▲ | **Vercel** | Hosting i deployment – automatyczne budowanie z GitHub | — |

---

## 📋 Wymagania

- **Node.js 18+** (zalecane 20 LTS)
- **npm** (lub inny menedżer pakietów)
- Klucz API **DeepSeek** (do chatbota – opcjonalne przy budowie frontendu bez API)

---

## 💻 Instalacja i uruchomienie

```bash
# 1. Sklonuj repozytorium
git clone https://github.com/krzysztofzelman/wizytowka-kzelman.git
cd wizytowka-kzelman

# 2. Zainstaluj zależności
npm install

# 3. (opcjonalnie) Skonfiguruj zmienne środowiskowe dla chatbota
#    Skopiuj .env.example -> .env i wpisz klucz DeepSeek
copy .env.example .env

# 4. Uruchom serwer deweloperski (http://localhost:5173)
npm run dev

# 5. Zbuduj wersję produkcyjną
npm run build

# 6. Podgląd zbudowanej wersji lokalnie
npm run preview
```

Dodatkowe komendy:

```bash
# Sprawdź kod linterem
npm run lint
```

### Uruchomienie z API lokalnie

Chatbot wymaga serwera API. Na produkcji działa jako Vercel Serverless Function. Lokalnie użyj `vercel dev`:

```bash
# Zainstaluj Vercel CLI (jeśli nie masz)
npm install -g vercel

# Uruchom serwer deweloperski + API (port 5173 frontend, port 3000 API)
npx vercel dev
```

Konfiguracja proxy w `vite.config.js` automatycznie przekierowuje żądania `/api/*` na lokalny serwer Vercel.

---

## 🔧 Konfiguracja

Projekt używa zmiennych środowiskowych wyłącznie dla chatbota AI.

### Zmienne środowiskowe

| Zmienna | Wymagana | Opis |
|---|---|---|
| `DEEPSEEK_API_KEY` | Tak (dla chatbota) | Klucz API z [platform.deepseek.com](https://platform.deepseek.com/api_keys) |

### Plik .env

Utwórz plik `.env` w katalogu głównym projektu na podstawie `.env.example`:

```bash
copy .env.example .env
```

Następnie edytuj `.env` i wpisz swój klucz DeepSeek:

```env
DEEPSEEK_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> **Uwaga:** Chatbot działa tylko wtedy, gdy zmienna `DEEPSEEK_API_KEY` jest ustawiona. Jeśli nie zamierzasz używać chatbota, frontend i tak działa – API zwróci wtedy komunikat o błędzie konfiguracji.

### Konfiguracja Vite

Plik `vite.config.js` zawiera regułę proxy dla środowiska deweloperskiego:

```js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
    },
  },
}
```

Dzięki temu podczas lokalnego rozwoju żądania `/api/chat` są przekierowywane do `vercel dev` (port 3000), a frontend nie musi znać rzeczywistego adresu API.

---

## 📡 API

### `POST /api/chat`

Endpoint dla chatbota AI. Zaimplementowany jako Vercel Serverless Function.

**Request body:**

```json
{
  "message": "Czym się zajmujesz?",
  "history": [
    { "role": "user", "content": "Cześć" },
    { "role": "assistant", "content": "Witaj! Jestem asystentem Krzysztofa..." }
  ],
  "count": 3
}
```

| Pole | Typ | Opis |
|---|---|---|
| `message` | string | Treść wiadomości użytkownika (max 2000 znaków) |
| `history` | array | Historia rozmowy (opcjonalnie) |
| `count` | number | Licznik wysłanych wiadomości w sesji (opcjonalnie) |

**Success response (200):**

```json
{
  "reply": "Specjalizuję się w tworzeniu nowoczesnych stron internetowych...",
  "remaining": 2,
  "limitReached": false
}
```

**Error responses:**

| Kod | Scenariusz |
|---|---|
| `400` | Brak wiadomości lub przekroczona długość |
| `405` | Metoda inna niż POST |
| `429` | Limit 5 wiadomości na sesję wyczerpany |
| `500` | Brak klucza API DeepSeek |
| `504` | Timeout odpowiedzi z DeepSeek (15s) |

**Rate limiting:** Maksymalnie **5 wiadomości** na sesję (liczone po stronie serwera).

---

## 📁 Struktura projektu

```
wizytowka-kzelman/
├── api/                            # Vercel Serverless Functions
│   └── chat.js                     # Endpoint chatbota AI (DeepSeek)
├── public/                         # Pliki statyczne
│   ├── favicon.svg                 # Ikona karty (monogram KZ)
│   ├── icons.svg                   # Sprite SVG z ikonami społecznościowymi
│   ├── robots.txt                  # Dyrektywy dla robotów wyszukiwarek
│   └── sitemap.xml                 # Mapa strony dla SEO
├── src/
│   ├── components/                 # Komponenty React podzielone na sekcje
│   │   ├── ChatBot/                # Widget czatu AI (ChatBot.jsx + moduł CSS)
│   │   ├── Navbar/                 # Nawigacja z językiem PL/EN i menu mobilnym
│   │   ├── Hero/                   # Sekcja powitalna z animacjami
│   │   ├── Services/               # Lista 8 usług w gridzie
│   │   ├── Logistics/              # Doświadczenie logistyczne
│   │   ├── Projects/               # Portfolio projektów
│   │   ├── WhyMe/                  # Wartość dodana – 4 zalety
│   │   ├── Contact/                # Dane kontaktowe i CTA
│   │   └── Footer/                 # Stopka z linkami i social mediami
│   ├── context/
│   │   └── LanguageContext.jsx     # Tłumaczenia PL/EN i kontekst językowy
│   ├── hooks/
│   │   └── useScrollAnimation.js   # Hook do animacji scrollowych (IntersectionObserver)
│   ├── types/
│   │   └── chat.js                 # JSDoc typy dla chatbota (ChatMessage, ChatState itp.)
│   ├── assets/                     # Zasoby graficzne
│   ├── App.jsx                     # Główny komponent – łączy wszystkie sekcje
│   ├── App.css                     # Globalne nadpisania stylów
│   ├── index.css                   # Design system: zmienne CSS, reset, animacje
│   └── main.jsx                    # Punkt wejścia aplikacji
├── .env.example                    # Przykładowy plik zmiennych środowiskowych
├── .gitignore                      # Ignorowane pliki (node_modules, dist, .env)
├── index.html                      # Szablon HTML z meta tagami i czcionkami
├── package.json                    # Zależności i skrypty
├── vite.config.js                  # Konfiguracja Vite (wtyczki, proxy API)
├── vercel.json                     # Konfiguracja deploymentu na Vercel
└── eslint.config.js                # Konfiguracja ESLinta (flat config)
```

### Opis najważniejszych plików

| Plik | Opis |
|---|---|
| `src/main.jsx` | Punkt startowy – renderuje React w trybie StrictMode |
| `src/App.jsx` | Komponent główny – zarządza stanem języka i łączy sekcje |
| `src/index.css` | Design system – zmienne CSS (kolory, fonty, cienie), reset, klasy animacji |
| `src/context/LanguageContext.jsx` | Kompletne tłumaczenia PL/EN i Context Provider |
| `src/hooks/useScrollAnimation.js` | Hook do płynnych animacji przy scrollowaniu |
| `src/components/ChatBot/ChatBot.jsx` | Widget czatu AI z obsługą API i localStorage |
| `src/types/chat.js` | JSDoc definicje typów dla systemu chatbota |
| `api/chat.js` | Vercel Serverless Function – proxy do DeepSeek API |
| `index.html` | Meta tagi, OG, JSON-LD, Google Fonts (Inter + Space Grotesk) |
| `vite.config.js` | Konfiguracja Vite z proxy API dla `vercel dev` |
| `vercel.json` | Reguły przepisywania URL-i dla SPA i API |

---

## ▲ Deployment

Projekt jest skonfigurowany pod deployment na **Vercel**.

### Jak wdrożyć

1. Wejdź na [vercel.com](https://vercel.com) i zaloguj się przez GitHub.
2. Kliknij **Add New → Project**.
3. Zaimportuj repozytorium `krzysztofzelman/wizytowka-kzelman`.
4. Vite wykryje konfigurację automatycznie – nic nie musisz zmieniać.
5. W zakładce **Environment Variables** dodaj `DEEPSEEK_API_KEY` z kluczem z platform.deepseek.com.
6. Kliknij **Deploy**.

### Zmienne środowiskowe na Vercel

| Zmienna | Wartość |
|---|---|
| `DEEPSEEK_API_KEY` | `sk-...` (twój klucz z DeepSeek) |

Bez ustawionej zmiennej chatbot nie będzie działał, ale reszta strony działa bez zmian.

### Automatyczne redeploye

Po każdym pushu na główną gałąź GitHub Vercel automatycznie przebudowuje i wdraża stronę.

---

## ❓ Najczęstsze problemy

### Chatbot nie odpowiada / błąd "Przepraszam, wystąpił błąd konfiguracji"

**Przyczyna:** Brak zmiennej `DEEPSEEK_API_KEY` w środowisku.

**Rozwiązanie (lokalnie):** Skopiuj `.env.example` → `.env` i wpisz poprawny klucz DeepSeek.

**Rozwiązanie (Vercel):** Dodaj `DEEPSEEK_API_KEY` w Dashboard → Project → Settings → Environment Variables.

### `vercel dev` nie działa

**Przyczyna:** Brak Vercel CLI lub niezalogowanie.

**Rozwiązanie:**
```bash
npm install -g vercel
vercel login
npx vercel dev
```

### Proxy API nie działa lokalnie

**Przyczyna:** `vercel dev` nie jest uruchomiony na porcie 3000.

**Rozwiązanie:** Uruchom `npx vercel dev` w osobnym terminalu – frontend na porcie 5173, API na 3000. Vite proxy przekierowuje `/api/*` na port 3000.

### Linter zwraca błędy

**Przyczyna:** Niezgodność z konfiguracją ESLint flat config.

**Rozwiązanie:**
```bash
npm run lint
# lub autofix
npx eslint . --fix
```

---

## 🔄 Rozwój projektu

Projekt jest w trakcie ciągłego rozwoju. Planowane ulepszenia:

- Przejście na TypeScript
- Dodanie formularza kontaktowego (obecnie `mailto:`)
- Własna domena
- Tryb jasny / ciemny do wyboru
- Więcej projektów w portfolio
- Rozszerzenie funkcji chatbota (kontekst, załączniki)

**Masz pomysł na ulepszenie? Znalazłeś błąd?**
<br />
Napisz na <krzysztof.zelman.92@gmail.com> lub otwórz Issue na GitHubie.
<br />
Zapraszam do współpracy! 🤝

---

## 📄 Licencja

Ten projekt jest udostępniony na licencji **MIT**.

```
MIT License

Copyright (c) 2026 Krzysztof Zelman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions...

Pełna treść licencji znajduje się w pliku [LICENSE](LICENSE).
```

---

## 👤 Autor

**Krzysztof Zelman**
<br />
Freelancer React / Node.js / AI
<br />
📍 Mysłowice, Śląsk, Polska

- 🌐 [wizytowka-kzelman.vercel.app](https://wizytowka-kzelman.vercel.app/)
- 🐙 [github.com/krzysztofzelman](https://github.com/krzysztofzelman)
- 💼 [LinkedIn](https://www.linkedin.com/in/krzysztof-zelman/)
