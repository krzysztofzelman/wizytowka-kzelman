import { createContext, useContext } from 'react';

export const translations = {
  pl: {
    nav: {
      services: 'Usługi',
      logistics: 'Logistyka',
      projects: 'Projekty',
      whyMe: 'Dlaczego ja',
      contact: 'Kontakt',
    },
    hero: {
      tagline: 'Tworzę strony i aplikacje — szybciej dzięki AI',
      motto: '10 lat na magazynie. Teraz koduję. Wiem, co jest potrzebne.',
      cta1: 'Zobacz projekty',
      cta2: 'Skontaktuj się',
      available: 'Dostępny na zlecenia',
      badges: ['React', 'Node.js', 'AI', 'Supabase', 'Vercel'],
    },
    services: {
      label: 'Freelancer',
      title: 'Moje usługi',
      subtitle: 'Strony i aplikacje dopasowane do Twoich potrzeb',
      items: [
        {
          title: 'Strony WWW',
          desc: 'Nowoczesne, szybkie i responsywne strony zoptymalizowane pod SEO i Core Web Vitals.',
          icon: '🌐',
        },
        {
          title: 'Sklepy online',
          desc: 'E-commerce z integracją Stripe / PayU, panelem produktów i pełnym flow zakupowym.',
          icon: '🛒',
        },
        {
          title: 'Landing page',
          desc: 'Konwertujące strony lądowania z wyraźnym CTA i optymalizacją pod kampanie.',
          icon: '🚀',
        },
        {
          title: 'Aplikacje webowe',
          desc: 'Pełnostackowe aplikacje React + Node.js z bazą danych, API i autoryzacją.',
          icon: '⚡',
        },
        {
          title: 'Integracje AI',
          desc: 'Chatboty, automatyzacje i funkcje oparte na GPT / Claude — AI wbudowane w Twój produkt.',
          icon: '🤖',
        },
        {
          title: 'Redesign stron',
          desc: 'Modernizacja starych serwisów z zachowaniem treści, poprawą UX i wydajności.',
          icon: '🎨',
        },
        {
          title: 'Systemy rezerwacji',
          desc: 'Kalendarze online, rezerwacje i harmonogramy zintegrowane z powiadomieniami.',
          icon: '📅',
        },
        {
          title: 'Aplikacje miejskie',
          desc: 'Rozwiązania dla samorządów i mieszkańców — mapy interaktywne, raporty, dane publiczne.',
          icon: '🏙️',
        },
      ],
    },
    logistics: {
      title: 'Rozumiem magazyn od środka',
      subtitle: '10 lat na magazynie — znam logistykę od podszewki',
      desc: 'Przez 10 lat pracowałem na magazynie. W codziennej pracy widziałem, co w systemach magazynowych działa, a co irytuje. Dziś, gdy programuję, tworzę rozwiązania z perspektywy osoby, która sama z nich korzysta – proste, intuicyjne i oszczędzające czas.',
      badge: '10 lat w logistyce',
      subsections: [
        {
          title: 'Prosty panel magazynowy',
          desc: 'Przyjęcia i wydania, lokalizacje, stany – podstawowe funkcje, które ułatwiają pracę w małej firmie.',
          icon: '🏭',
        },
        {
          title: 'Podgląd lokalizacji pojazdów (opcjonalnie)',
          desc: 'Proste narzędzie do sprawdzania, gdzie są pojazdy – bez zbędnych bajerów.',
          icon: '🚛',
        },
        {
          title: 'Zestawienia do Excel / PDF',
          desc: 'Raporty stanów magazynowych i obrotów – dane, które faktycznie są potrzebne.',
          icon: '📊',
        },
        {
          title: 'Plan zmian z powiadomieniami',
          desc: 'Prosty harmonogram dla zespołu z powiadomieniami SMS lub email.',
          icon: '📋',
        },
      ],
    },
    projects: {
      label: 'Portfolio',
      title: 'Projekty',
      subtitle: 'Wybrane realizacje — kod otwarty, wyniki mierzalne',
      viewGithub: 'Kod na GitHub',
      items: [
        {
          title: 'Smart Mysłowice',
          desc: 'Mapa jakości powietrza i prosty system zgłoszeń dla miasta – zrobiłem to, żeby pomóc mieszkańcom, nie jako korporacyjny produkt.',
          tech: ['React', 'Node.js', 'Leaflet', 'Airly API'],
          github: 'https://github.com/krzysztofzelman/smart-myslowice-v2',
          live: 'https://smart-myslowice-v2.vercel.app/',
          accent: '#10b981',
        },
        {
          title: 'AutoFlex',
          desc: 'Prosta platforma do wynajmu pojazdów. Rezerwacje online, płatności i panel do zarządzania – tyle, ile trzeba.',
          tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'Stripe'],
          github: 'https://github.com/krzysztofzelman/auto-flex',
          live: 'https://auto-flex-woad.vercel.app/',
          accent: '#7c3aed',
        },
        {
          title: 'Restauracja – Zamów Online',
          desc: 'Aplikacja do składania zamówień w restauracji – klient wybiera, kuchnia widzi, admin zarządza. Prosty system dla małej gastronomii.',
          tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'Bootstrap', 'Stripe'],
          github: 'https://github.com/krzysztofzelman/restaurant-clean',
          live: 'https://restaurant-clean-omega.vercel.app',
          accent: '#f59e0b',
        },
        {
          title: 'Kawa i Ciasteczko',
          desc: 'Strona internetowa dla kawiarni – menu, oferta, formularz kontaktowy i zamówienie online.',
          tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
          github: 'https://github.com/krzysztofzelman/kawiarnia',
          live: 'https://kawiarnia-swart.vercel.app/',
          accent: '#d97706',
        },
      ],
    },
    whyMe: {
      label: 'Wartość',
      title: 'Dlaczego ja?',
      subtitle: 'Co możesz zyskać, pracując ze mną',
      items: [
        {
          title: '2× szybsze wdrożenie',
          desc: 'Używam AI (Qwen, Claude) – dzięki temu potrafię zrobić stronę lub prostą apkę w 2–3 dni, a nie 2–3 tygodnie.',
          icon: '⚡',
        },
        {
          title: 'Świeże podejście',
          desc: 'Uczę się na bieżąco – React 19, Supabase, narzędzia AI. Twoja strona nie będzie wyglądać przestarzale za rok.',
          icon: '✨',
        },
        {
          title: 'Znam magazyn od kuchni',
          desc: 'Pracowałem na magazynie przez 10 lat – wiem, czego brakuje w systemach, bo sam na tym traciłem czas. Nie sprzedaję "rozwiązań klas enterprise" – rozwiązuję konkretne problemy z perspektywy użytkownika.',
          icon: '🏭',
        },
        {
          title: 'Dwujęzyczny (PL/EN)',
          desc: 'Dokumentacja, komentarze, komunikacja – po polsku i po angielsku. Współpraca z zagranicznymi klientami bez bariery.',
          icon: '🌍',
        },
      ],
    },
    contact: {
      label: 'Kontakt',
      title: 'Kontakt',
      subtitle: 'Porozmawiajmy o Twoim projekcie — odpowiadam w ciągu 24h',
      emailLabel: 'Email',
      phoneLabel: 'Telefon',
      locationLabel: 'Lokalizacja',
      email: 'krzysztof.zelman.92@gmail.com',
      phone: '666 966 720',
      location: 'Mysłowice / Śląsk',
      cta: 'Napisz do mnie',
      available: 'Dostępny od zaraz',
    },
    footer: {
      tagline: 'Pomagam ludziom i firmom w internecie.',
      rights: 'Wszelkie prawa zastrzeżone',
      builtWith: 'Zbudowane z',
      nav: ['Usługi', 'Logistyka', 'Projekty', 'Kontakt'],
    },
  },

  en: {
    nav: {
      services: 'Services',
      logistics: 'Logistics',
      projects: 'Projects',
      whyMe: 'Why me',
      contact: 'Contact',
    },
    hero: {
      tagline: 'I build websites and apps — faster with AI',
      motto: '10 years in a warehouse. Now I code. I know what\'s needed.',
      cta1: 'View projects',
      cta2: 'Get in touch',
      available: 'Available for projects',
      badges: ['React', 'Node.js', 'AI-powered', 'Supabase', 'Vercel'],
    },
    services: {
      label: 'Freelancer',
      title: 'My services',
      subtitle: 'Websites and apps tailored to what you actually need',
      items: [
        {
          title: 'Websites',
          desc: 'Modern, fast and responsive websites optimized for SEO and Core Web Vitals.',
          icon: '🌐',
        },
        {
          title: 'Online stores',
          desc: 'E-commerce with Stripe / PayU integration, product management and full checkout flow.',
          icon: '🛒',
        },
        {
          title: 'Landing pages',
          desc: 'High-converting landing pages with clear CTAs optimized for ad campaigns.',
          icon: '🚀',
        },
        {
          title: 'Web applications',
          desc: 'Full-stack React + Node.js apps with databases, APIs and authentication.',
          icon: '⚡',
        },
        {
          title: 'AI integrations',
          desc: 'Chatbots, automations and GPT / Claude-powered features built into your product.',
          icon: '🤖',
        },
        {
          title: 'Website redesign',
          desc: 'Modernize legacy sites while preserving content, improving UX and performance.',
          icon: '🎨',
        },
        {
          title: 'Booking systems',
          desc: 'Online calendars, reservations and schedules integrated with email/SMS notifications.',
          icon: '📅',
        },
        {
          title: 'City apps',
          desc: 'Solutions for municipalities and residents — interactive maps, reports, public data.',
          icon: '🏙️',
        },
      ],
    },
    logistics: {
      title: 'I understand the warehouse from the inside',
      subtitle: '10 years in a warehouse — I know logistics from the ground up',
      desc: "I spent 10 years working in a warehouse. Day to day, I saw what works in warehouse systems and what gets on your nerves. Now that I code, I build tools from the perspective of someone who's actually used them — simple, intuitive, and time-saving.",
      badge: '10 years in logistics',
      subsections: [
        {
          title: 'Simple warehouse panel',
          desc: 'Receipts, dispatches, locations, stock levels – basic features that help a small business run smoothly.',
          icon: '🏭',
        },
        {
          title: 'Vehicle location view (optional)',
          desc: 'A simple tool to check where your vehicles are — no unnecessary bells and whistles.',
          icon: '🚛',
        },
        {
          title: 'Excel / PDF reports',
          desc: 'Stock level and turnover reports – the data you actually need, not more dashboards.',
          icon: '📊',
        },
        {
          title: 'Shift planner with notifications',
          desc: 'A straightforward schedule for your team with SMS or email alerts.',
          icon: '📋',
        },
      ],
    },
    projects: {
      label: 'Portfolio',
      title: 'Projects',
      subtitle: 'Selected works — open source, measurable results',
      viewGithub: 'Code on GitHub',
      items: [
        {
          title: 'Smart Mysłowice',
          desc: 'An air quality map and a simple issue reporting system for the city — built to help residents, not as a corporate product.',
          tech: ['React', 'Node.js', 'Leaflet', 'Airly API'],
          github: 'https://github.com/krzysztofzelman/smart-myslowice-v2',
          live: 'https://smart-myslowice-v2.vercel.app/',
          accent: '#10b981',
        },
        {
          title: 'AutoFlex',
          desc: 'A straightforward vehicle rental platform. Online bookings, payments, and a simple management panel — just what you need.',
          tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'Stripe'],
          github: 'https://github.com/krzysztofzelman/auto-flex',
          live: 'https://auto-flex-woad.vercel.app/',
          accent: '#7c3aed',
        },
        {
          title: 'Restaurant – Order Online',
          desc: 'A restaurant ordering app – customers pick, the kitchen sees, the admin manages. A simple system for small food businesses.',
          tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'Bootstrap', 'Stripe'],
          github: 'https://github.com/krzysztofzelman/restaurant-clean',
          live: 'https://restaurant-clean-omega.vercel.app',
          accent: '#f59e0b',
        },
        {
          title: 'Kawa i Ciasteczko',
          desc: 'A café website – menu, offers, contact form and online ordering. Nothing fancy, just works.',
          tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
          github: 'https://github.com/krzysztofzelman/kawiarnia',
          live: 'https://kawiarnia-swart.vercel.app/',
          accent: '#d97706',
        },
      ],
    },
    whyMe: {
      label: 'Value',
      title: 'Why me?',
      subtitle: 'What you get when we work together',
      items: [
        {
          title: '2× faster delivery',
          desc: 'I use AI tools (Qwen, Claude) to build a website or a simple app in 2–3 days instead of 2–3 weeks.',
          icon: '⚡',
        },
        {
          title: 'Fresh approach',
          desc: "I keep learning — React 19, Supabase, AI-native tools. Your site won't feel outdated in a year.",
          icon: '✨',
        },
        {
          title: 'Warehouse to code',
          desc: 'I worked in a warehouse for 10 years. I know what\'s missing in warehouse systems because I lost time on it myself. I don\'t sell "enterprise solutions" — I solve real problems from a user\'s perspective.',
          icon: '🏭',
        },
        {
          title: 'Bilingual (PL/EN)',
          desc: 'Docs, comments, communication — both Polish and English. Work with international clients without any language barrier.',
          icon: '🌍',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Contact',
      subtitle: "Let's talk about your project — I reply within 24h",
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      email: 'krzysztof.zelman.92@gmail.com',
      phone: '666 966 720',
      location: 'Mysłowice / Silesia',
      cta: 'Send a message',
      available: 'Available now',
    },
    footer: {
      tagline: 'Helping people and businesses on the web.',
      rights: 'All rights reserved',
      builtWith: 'Built with',
      nav: ['Services', 'Logistics', 'Projects', 'Contact'],
    },
  },
};

export const LanguageContext = createContext({
  lang: 'pl',
  t: translations.pl,
  toggleLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);
