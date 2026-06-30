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
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="MIT License" />
  </a>
</p>

<p align="center">
  <b>Nowoczesna, responsywna strona wizytówkowa / portfolio</b><br />
  zbudowana w React 19 z dwujęzycznym interfejsem PL/EN i chatbotem AI (DeepSeek).
</p>

<p align="center">
  <a href="https://kzelman.pl/" target="_blank" rel="noopener noreferrer">
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
- [API chatbota](#-api-chatbota)
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
  <a href="https://kzelman.pl/" target="_blank" rel="noopener noreferrer">
    <b>https://kzelman.pl/</b>
  </a>
</p>

---

## ✨ Funkcjonalności

### 🤖 Chatbot AI z DeepSeek

Interaktywny chatbot zasilany modelem **DeepSeek Chat** (deepseek-chat), który odpowiada na pytania dotyczące usług, technologii i dostępności Krzysztofa. Działa jako serverless function (`/api/chat`).

- **Limit 5 wiadomości** na sesję — liczony po stronie klienta (`useChatLimit` hook) i walidowany po stronie serwera
- Stan rozmowy przechowywany w **sessionStorage** (znika po zamknięciu karty)
- Odpowiedzi formatowane przez **ReactMarkdown** — obsługa **pogrubień**, list, linków
- **Przycisk FAB** (floating action button) z ikoną koperty / X do otwierania i zamykania okna
- **Stan pusty** z przywitaniem i informacją o liczbie pozostałych wiadomości
- **Wskaźnik pisania** (animowane kropki) podczas oczekiwania na odpowiedź
- **Wysłanie przez Enter** (Shift+Enter nie jest obsługiwany — pojedyncze pole tekstowe)
- **Przycisk resetu** po wyczerpaniu limitu — czyści rozmowę i licznik
- Walidacja po stronie API: max **2000 znaków** na wiadomość, timeout **15 sekund**

### 🗂️ Prezentacja portfolio projektów

Strona prezentuje wybrane realizacje z otwartym kodem źródłowym:

| Projekt | Opis | Technologie |
|---|---|---|
| **Smart Mysłowice** | Mapa jakości powietrza i system zgłoszeń dla miasta — zrobione, żeby pomóc mieszkańcom. | React, TypeScript, Node.js, Leaflet |
| **Restauracja – Zamów Online** | Aplikacja do składania zamówień w restauracji – klient wybiera, kuchnia widzi, admin zarządza. | React, TypeScript, Vite, Supabase, Bootstrap, Stripe |
| **Salon Fryzjerski** | Profesjonalna i elegancka strona dla salonu fryzjerskiego z integracją Booksy. Next.js z naciskiem na szybkość i SEO. | Next.js, TypeScript, Tailwind CSS, Booksy API |
| **Kawa i Ciasteczko** | Strona kawiarni – menu, oferta, formularz kontaktowy i zamówienie online. | Next.js, TypeScript, Tailwind CSS, Supabase |

Każdy projekt posiada link do **demo na żywo** oraz do **repozytorium na GitHubie**. Karty projektów mają kolorowe akcenty i przyciski "Live demo" / "Kod na GitHub".

### 🛠️ 8 kategorii usług freelancerskich

| # | Usługa | Opis |
|---|---|---|
| 🌐 | **Strony WWW** | Nowoczesne, szybkie i responsywne, zoptymalizowane pod SEO i Core Web Vitals |
| 🛒 | **Sklepy online** | E-commerce z integracją Stripe / PayU, panelem produktów i pełnym flow zakupowym |
| 🚀 | **Landing page** | Konwertujące strony lądowania z wyraźnym CTA, optymalizowane pod kampanie |
| ⚡ | **Aplikacje webowe** | Pełnostackowe aplikacje React + Node.js z bazą danych, API i autoryzacją |
| 🤖 | **Integracje AI** | Chatboty, automatyzacje i funkcje oparte na GPT / Claude / DeepSeek wbudowane w produkt |
| 🎨 | **Redesign stron** | Modernizacja starych serwisów z zachowaniem treści, poprawą UX i wydajności |
| 📅 | **Systemy rezerwacji** | Kalendarze online, rezerwacje i harmonogramy zintegrowane z powiadomieniami |
| 🏙️ | **Aplikacje miejskie** | Rozwiązania dla samorządów i mieszkańców — mapy interaktywne, raporty, dane publiczne |

### 🏭 Sekcja "Rozumiem magazyn od środka" — 10 lat w logistyce

Unikalna perspektywa: 10 lat pracy na magazynie przekute w kod. Rozwiązania tworzone z punktu widzenia osoby, która sama korzysta z systemów magazynowych – proste, intuicyjne i oszczędzające czas.

- 🏭 **Prosty panel magazynowy** – przyjęcia, wydania, lokalizacje, stany – podstawowe funkcje ułatwiające pracę w małej firmie
- 🚛 **Podgląd lokalizacji pojazdów (opcjonalnie)** – proste narzędzie do sprawdzania pozycji pojazdów bez zbędnych bajerów
- 📊 **Zestawienia do Excel / PDF** – raporty stanów magazynowych i obrotów – dane, które faktycznie są potrzebne
- 📋 **Plan zmian z powiadomieniami** – prosty harmonogram dla zespołu z powiadomieniami SMS lub e-mail

### 💡 Sekcja "Dlaczego ja?"

Cztery kluczowe zalety współpracy:

| # | Zaleta | Opis |
|---|---|---|
| ⚡ | **2× szybsze wdrożenie** | Dzięki AI (Qwen, Claude) strona lub prosta apka w 2–3 dni, a nie 2–3 tygodnie |
| ✨ | **Świeże podejście** | React 19, TypeScript, Supabase – strona nie będzie wyglądać przestarzale za rok |
| 🏭 | **Znam magazyn od kuchni** | 10 lat w logistyce – wiem, czego brakuje w systemach, bo sam traciłem na tym czas |
| 🌍 | **Dwujęzyczny (PL/EN)** | Dokumentacja, komentarze, komunikacja – po polsku i po angielsku |

### 📞 Sekcja kontaktowa

Dane kontaktowe wyświetlane w przejrzystej karcie obok CTA:

- 📧 **E-mail:** [krzysztof.zelman.92@gmail.com](mailto:krzysztof.zelman.92@gmail.com)
- 📱 **Telefon:** [666 966 720](tel:+48666966720)
- 📍 **Lokalizacja:** Mysłowice / Śląsk

Przycisk "Napisz do mnie" otwiera domyślną klientkę poczty. W sekcji widoczna jest również plakietka "Dostępny od zaraz".

### 🎯 Nawigacja z przełącznikiem języka PL/EN

Pasek nawigacyjny z płynnym `blur` po scrollu i mobilnym menu hamburgerowym z blokadą scrolla. Przycisk PL/EN przełącza cały interfejs między językami – wszystkie teksty (w tym usługi, projekty, opis logistyki) mają swoje odpowiedniki w obu językach.

### 🔍 Optymalizacja SEO i meta tagi

- Meta tagi: `description`, `keywords`
- Open Graph (`og:title`, `og:description`, `og:url`, `og:type`, `og:image`)
- Twitter Card (`summary_large_image`)
- Dane strukturalne JSON-LD (schema.org `Person`)
- Plik `sitemap.xml` i `robots.txt`
- Google Fonts: Inter + Space Grotesk (preconnect + preload)
- Semantyczny HTML z `aria-label` dla dostępności

### 🎨 Design system z dark theme

Własne zmienne CSS w `:root` definiujące pełny design system:
- Paleta kolorów: fiolet (#7c3aed), niebieski (#3b82f6), zielony (#10b981)
- Gradienty: liniowe i tekstowe (purple → blue → green)
- Cienie: `shadow-glow`, `shadow-card`
- Zaokrąglenia: `--radius-sm` (8px) do `--radius-xl` (32px)
- Fonty: Inter (tekst) + Space Grotesk (display)
- Ciemne tło: `--bg: #0a0a0f`

### 📱 Responsywny design + animacje scrollowe

W pełni responsywna strona (od smartfonów po szerokie monitory) z animacjami "fade-up" przy wjeździe w viewport (IntersectionObserver), opóźnieniami kaskadowymi dla gridów i list.

---

## 🧰 Stack technologiczny

| 🛠️ | Technologia | Zastosowanie | Wersja |
|---|---|---|---|
| ⚛️ | **React** | Biblioteka UI – komponenty, stan (useState), kontekst (LanguageContext) | ^19.2.5 |
| 🔥 | **Vite** | Bundler i narzędzie deweloperskie (HMR, fast refresh, build) | ^8.0.10 |
| 📜 | **JavaScript (JSX)** | Język programowania | — |
| 🎨 | **CSS Modules** | Scoped CSS dla każdego komponentu – brak konfliktów nazw klas | — |
| 🤖 | **DeepSeek API** | Silnik chatbota AI | deepseek-chat |
| 📝 | **ReactMarkdown** | Renderowanie odpowiedzi chatbota (pogrubienia, listy, linki) | ^10.1.0 |
| ✅ | **ESLint** | Linter kodu (flat config, react-hooks, react-refresh) | ^10.2.1 |
| 🐧 | **VPS (Ubuntu)** | Hosting – własny serwer z nginx, PM2, Certbot SSL | — |

---

## 📋 Wymagania

- **Node.js 18+** (zalecane 20 LTS)
- **npm** (lub inny menedżer pakietów)
- Klucz API **DeepSeek** (do chatbota – opcjonalne, jeśli nie potrzebujesz funkcji AI)

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

Chatbot wymaga serwera API. Na produkcji działa jako serverless function. Lokalnie uruchom osobny serwer API na porcie 3000 (np. Express).

Konfiguracja proxy w `vite.config.js` przekierowuje żądania `/api/*` na `localhost:3000`:

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

---

## 📡 API chatbota

### `POST /api/chat`

Endpoint dla chatbota AI. Zaimplementowany jako serverless function (`api/chat.js`).

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
| `history` | array | Dotychczasowa historia rozmowy (opcjonalnie) |
| `count` | number | Licznik wysłanych wiadomości w bieżącej sesji (opcjonalnie) |

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
| `400` | Brak wiadomości lub przekroczona długość (2000 znaków) |
| `405` | Metoda inna niż POST |
| `429` | Limit 5 wiadomości na sesję wyczerpany (z `limitReached: true`) |
| `500` | Brak klucza API DeepSeek (`DEEPSEEK_API_KEY`) |
| `504` | Timeout odpowiedzi z DeepSeek (15 sekund) |

**Rate limiting:** Maksymalnie **5 wiadomości** na sesję – liczony zarówno po stronie klienta (`useChatLimit` hook + `sessionStorage`), jak i serwera (parametr `count`).

**System prompt:** Asystent Krzysztofa Zelmana, freelancera React. Odpowiada na pytania o usługi, technologie i dostępność. Zwięzły i profesjonalny.

---

## 📁 Struktura projektu

```
wizytowka-kzelman/
├── api/                            # Serverless Functions (endpoint chatbota)
│   └── chat.js                     # Endpoint chatbota AI (DeepSeek)
├── public/                         # Pliki statyczne
│   ├── favicon.svg                 # Ikona karty (monogram KZ)
│   ├── icons.svg                   # Sprite SVG z ikonami społecznościowymi
│   ├── robots.txt                  # Dyrektywy dla robotów wyszukiwarek
│   └── sitemap.xml                 # Mapa strony dla SEO
├── src/
│   ├── assets/                     # Zasoby graficzne (hero.png, react.svg, vite.svg)
│   ├── components/                 # Komponenty React podzielone na sekcje
│   │   ├── ChatBot/                # Widget czatu AI (ChatBot.jsx + ChatBot.module.css)
│   │   ├── Navbar/                 # Pasek nawigacyjny z przełącznikiem PL/EN
│   │   ├── Hero/                   # Sekcja powitalna z animowanym gradientem i awatarem
│   │   ├── Services/               # Siatka 8 usług z ikonami i opisami
│   │   ├── Logistics/              # Doświadczenie logistyczne – 4 podsekcje
│   │   ├── Projects/               # Portfolio projektów – 4 karty z linkami
│   │   ├── WhyMe/                  # 4 zalety współpracy
│   │   ├── Contact/                # Dane kontaktowe i CTA "Napisz do mnie"
│   │   └── Footer/                 # Stopka z social mediami (GitHub)
│   ├── context/
│   │   └── LanguageContext.jsx     # Kompletne tłumaczenia PL/EN (81 kluczy) + Context Provider
│   ├── hooks/
│   │   ├── useScrollAnimation.js   # Hook do animacji fade-up (IntersectionObserver)
│   │   └── useChatLimit.js         # Hook do licznika wiadomości chatbota (sessionStorage)
│   ├── types/
│   │   └── chat.js                 # JSDoc typedefs: ChatMessage, ChatState, ChatResponse, STORAGE_KEYS, MAX_MESSAGES
│   ├── App.jsx                     # Główny komponent – stan języka + sekcje
│   ├── App.css                     # Globalne nadpisania stylów
│   ├── index.css                   # Design system: zmienne CSS, reset, klasy animacji
│   └── main.jsx                    # Punkt wejścia – StrictMode + createRoot
├── .env.example                    # Przykładowy plik zmiennych środowiskowych (DEEPSEEK_API_KEY)
├── .gitignore                      # Ignorowane pliki (node_modules, dist, .env)
├── index.html                      # Szablon HTML z meta tagami, OG, Twitter Card, JSON-LD, Google Fonts
├── package.json                    # Zależności i skrypty (dev, build, lint, preview)
├── vite.config.js                  # Konfiguracja Vite – React plugin + proxy API
└── eslint.config.js                # Flat config ESLint (react-hooks, react-refresh, globals)
```

### Opis najważniejszych plików

| Plik | Opis |
|---|---|
| `src/main.jsx` | Punkt startowy – renderuje React w trybie StrictMode |
| `src/App.jsx` | Komponent główny – zarządza stanem języka (`useState`) i łączy wszystkie sekcje |
| `src/index.css` | Design system – zmienne CSS (kolory, fonty, cienie, gradienty), reset, klasy `.fade-up` |
| `src/context/LanguageContext.jsx` | Pełne tłumaczenia PL/EN (81 tłumaczeń) i Context Provider z `useLanguage` hookiem |
| `src/hooks/useScrollAnimation.js` | Hook do płynnych animacji przy scrollowaniu (IntersectionObserver, jednorazowy) |
| `src/hooks/useChatLimit.js` | Hook do licznika wiadomości chatbota (sessionStorage, max 5) |
| `src/types/chat.js` | JSDoc definicje typów (`ChatMessage`, `ChatState`, `ChatResponse`, `MAX_MESSAGES`) |
| `src/components/ChatBot/ChatBot.jsx` | Widget czatu AI – FAB, okno, ReactMarkdown, sessionStorage, licznik, reset |
| `api/chat.js` | Serverless function – proxy do DeepSeek API z walidacją i timeoutem |
| `index.html` | Meta tagi, OG, Twitter Card, JSON-LD, Google Fonts (Inter + Space Grotesk) |
| `vite.config.js` | Konfiguracja Vite – React plugin + proxy `/api` → `localhost:3000` |

---

## 🚀 Deployment

Projekt deployowany na **własny VPS** przez GitHub Actions.

### Pipeline CI/CD

Po każdym pushu na gałąź `master` GitHub Actions automatycznie:
1. Łączy się przez SSH z VPS
2. Robi `git pull` w `/var/www/kzelman`
3. Instaluje zależności (`npm install`)
4. Buduje wersję produkcyjną (`npm run build`)
5. Usuwa atrybut `crossorigin` z `dist/index.html` (wymagane dla self-hostowanego nginx)
6. Serwuje statyczne pliki przez **nginx** (reverse proxy)

### Wymagane sekrety GitHub

| Sekret | Opis |
|---|---|
| `VPS_HOST` | Adres IP serwera |
| `VPS_PORT` | Port SSH (2022) |
| `VPS_SSH_KEY` | Klucz prywatny SSH użytkownika `deployer` |

### Nginx

Statyczne pliki z `dist/` są serwowane przez nginx jako reverse proxy. Konfiguracja w `/etc/nginx/sites-available/kzelman` wskazuje na katalog `/var/www/kzelman/dist`.

### Zmienne środowiskowe na VPS

| Zmienna | Wartość |
|---|---|
| `DEEPSEEK_API_KEY` | `sk-...` (twój klucz z DeepSeek) |

Bez ustawionej zmiennej chatbot nie będzie działał, ale reszta strony działa bez zmian.

---

## ❓ Najczęstsze problemy

### Chatbot nie odpowiada / błąd "Przepraszam, wystąpił błąd konfiguracji"

**Przyczyna:** Brak zmiennej `DEEPSEEK_API_KEY` w środowisku.

**Rozwiązanie:** Skopiuj `.env.example` → `.env` i wpisz poprawny klucz DeepSeek. Na VPS dodaj zmienną w pliku `.env` lub konfiguracji serwera.

### Proxy API nie działa lokalnie

**Przyczyna:** Serwer API nie jest uruchomiony na porcie 3000.

**Rozwiązanie:** Uruchom serwer API backendu na porcie 3000. Vite proxy w `vite.config.js` przekierowuje `/api/*` na `localhost:3000`.

### Linter zwraca błędy

**Przyczyna:** Niezgodność z konfiguracją ESLint flat config.

**Rozwiązanie:**
```bash
npm run lint
# lub autofix
npx eslint . --fix
```

### Strona nie odświeża się po deployu

**Przyczyna:** Cache przeglądarki.

**Rozwiązanie:** Otwórz narzędzia deweloperskie (F12) → zakładka Network → zaznacz "Disable cache" → odśwież stronę. Lub użyj `Ctrl + Shift + R` (twarde odświeżenie).

---

## 🔄 Rozwój projektu

Projekt jest w trakcie ciągłego rozwoju. Planowane ulepszenia:

- Pełne przejście na TypeScript (`.tsx`)
- Dodanie działającego formularza kontaktowego (obecnie `mailto:`)
- Przełącznik trybu jasny / ciemny
- Więcej projektów w portfolio
- Rozszerzenie funkcji chatbota (kontekst, załączniki, dłuższa historia)
- Testy (jednostkowe + integracyjne)

**Masz pomysł na ulepszenie? Znalazłeś błąd?**
<br />
Napisz na [krzysztof.zelman.92@gmail.com](mailto:krzysztof.zelman.92@gmail.com) lub otwórz Issue na GitHubie.
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

- 🌐 [kzelman.pl](https://kzelman.pl/)
- 🐙 [github.com/krzysztofzelman](https://github.com/krzysztofzelman)
