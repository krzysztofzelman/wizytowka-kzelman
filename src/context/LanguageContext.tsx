import { createContext, useContext } from 'react';

export interface NavTranslation {
  services: string;
  logistics: string;
  projects: string;
  whyMe: string;
  contact: string;
}

export interface HeroTranslation {
  tagline: string;
  motto: string;
  cta1: string;
  cta2: string;
  available: string;
  badges: string[];
}

export interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

export interface ServicesTranslation {
  label: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface LogisticsSubsection {
  title: string;
  desc: string;
  icon: string;
}

export interface LogisticsTranslation {
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
  subsections: LogisticsSubsection[];
}

export interface ProjectItem {
  title: string;
  desc: string;
  tech: string[];
  github: string;
  live: string;
  accent: string;
  isLive: boolean;
}

export interface LiveProjectItem {
  name: string;
  url: string;
}

export interface LiveProjectsTranslation {
  label: string;
  title: string;
  subtitle: string;
  items: LiveProjectItem[];
}

export interface ProjectsTranslation {
  label: string;
  title: string;
  subtitle: string;
  viewGithub: string;
  items: ProjectItem[];
}

export interface WhyMeItem {
  title: string;
  desc: string;
  icon: string;
}

export interface WhyMeTranslation {
  label: string;
  title: string;
  subtitle: string;
  items: WhyMeItem[];
}

export interface ContactTranslation {
  label: string;
  title: string;
  subtitle: string;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  email: string;
  phone: string;
  location: string;
  cta: string;
  available: string;
}

export interface FooterTranslation {
  tagline: string;
  rights: string;
  builtWith: string;
  nav: string[];
}

export interface TranslationShape {
  nav: NavTranslation;
  hero: HeroTranslation;
  services: ServicesTranslation;
  logistics: LogisticsTranslation;
  projects: ProjectsTranslation;
  liveProjects: LiveProjectsTranslation;
  whyMe: WhyMeTranslation;
  contact: ContactTranslation;
  footer: FooterTranslation;
}

export type Lang = 'pl' | 'en';

export interface LanguageContextValue {
  lang: Lang;
  t: TranslationShape;
  toggleLang: () => void;
}

export const translations: Record<Lang, TranslationShape> = {
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
      badges: ['React', 'Node.js', 'AI', 'Supabase'],
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
          title: 'System zarządzania serwisem',
          desc: 'SaaS do zarządzania serwisem RTV/AGD — zgłoszenia klientów, baza części, harmonogram serwisantów, przypomnienia SMS i email.',
          icon: '🔧',
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
          title: 'Podgląd lokalizacji pojazdów',
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
      viewGithub: '📂 Repozytorium',
      items: [
        {
          title: 'Restaurant Clean',
          desc: 'Samodzielnie hostowana platforma SaaS dla restauracji — role użytkownik/kuchnia/kurier/admin, asystent AI kelner (DeepSeek + LangChain), Celery, panel magazynowy, Stripe, Supabase, 57 testów.',
          tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'Stripe'],
          github: 'https://github.com/krzysztofzelman/restaurant-clean',
          live: 'https://restauracja.kzelman.pl/',
          accent: '#f59e0b',
          isLive: true,
        },
        {
          title: 'Smart Mysłowice v2',
          desc: 'Platforma danych miejskich — mapa Leaflet, jakość powietrza GIOŚ, pogoda, lokalizacje AED.',
          tech: ['React', 'Node.js', 'Express', 'Leaflet'],
          github: 'https://github.com/krzysztofzelman/smart-myslowice-v2',
          live: 'https://smart-myslowice.pl/',
          accent: '#10b981',
          isLive: true,
        },
        {
          title: 'Mercha',
          desc: 'Platforma e-commerce dla marki odzieżowej — sklep kliencki, panel admina, JWT, Docker, GitHub Actions CI/CD.',
          tech: ['FastAPI', 'React', 'TypeScript', 'SQLite', 'Docker', 'nginx'],
          github: 'https://github.com/krzysztofzelman/mercha',
          live: 'https://mercha.kzelman.pl/',
          accent: '#3b82f6',
          isLive: true,
        },
        {
          title: 'Magazyn App',
          desc: 'Wielodziałowy SaaS do zarządzania magazynem — FIFO, partie, kody QR, asystent AI, integracja KSeF, zarządzanie użytkownikami i uprawnieniami.',
          tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker'],
          github: 'https://github.com/krzysztofzelman/magazyn-frontend',
          live: 'https://magazyn.kzelman.pl/',
          accent: '#ef4444',
          isLive: true,
        },
        {
          title: 'Salon Fryzjerski',
          desc: 'Responsywna strona WWW dla salonu fryzjerskiego z integracją Booksy.',
          tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
          github: 'https://github.com/krzysztofzelman/salon-fryzjerski',
          live: 'https://salon-fryzjerski-eta.vercel.app',
          accent: '#a855f7',
          isLive: false,
        },
        {
          title: 'Kawa i Ciasteczko',
          desc: 'Strona kawiarni z menu i formularzem kontaktowym, PWA, animacje scroll, integracja Supabase.',
          tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
          github: 'https://github.com/krzysztofzelman/kawiarnia',
          live: 'https://kawiarnia-swart.vercel.app',
          accent: '#d97706',
          isLive: false,
        },
        {
          title: 'Napraw Mnie',
          desc: 'SaaS do zarządzania serwisem RTV/AGD — zgłoszenia klientów, baza części, harmonogram serwisantów, przypomnienia SMS i email, panel admina i panel klienta.',
          tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'Stripe'],
          github: 'https://github.com/krzysztofzelman/napraw-mnie',
          live: 'https://napraw.kzelman.pl/',
          accent: '#06b6d4',
          isLive: true,
        },
      ],
    },
    liveProjects: {
      label: 'Na żywo',
      title: 'Wszystkie projekty na żywo',
      subtitle: 'Kliknij i zobacz efekty — każdy projekt działa w produkcyjnym środowisku',
      items: [
        { name: 'Restauracja Kzelman', url: 'https://restauracja.kzelman.pl/' },
        { name: 'Smart Mysłowice', url: 'https://smart-myslowice.pl/' },
        { name: 'Mercha', url: 'https://mercha.kzelman.pl/' },
        { name: 'Magazyn App', url: 'https://magazyn.kzelman.pl/' },
        { name: 'Napraw Mnie', url: 'https://napraw.kzelman.pl/' },
        { name: 'Salon Fryzjerski', url: 'https://salon-fryzjerski-eta.vercel.app' },
        { name: 'Kawa i Ciasteczko', url: 'https://kawiarnia-swart.vercel.app' },
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
          desc: 'Uczę się na bieżąco – React 19, TypeScript, Supabase. Twoja strona nie będzie wyglądać przestarzale za rok.',
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
      motto: "10 years in a warehouse. Now I code. I know what's needed.",
      cta1: 'View projects',
      cta2: 'Get in touch',
      available: 'Available for projects',
      badges: ['React', 'Node.js', 'AI-powered', 'Supabase'],
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
          title: 'Service management system',
          desc: 'SaaS for RTV/AGD service management — client tickets, parts database, serviceman schedule, SMS and email reminders.',
          icon: '🔧',
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
      viewGithub: '📂 Repozytorium',
      items: [
        {
          title: 'Restaurant Clean',
          desc: 'Self-hosted SaaS platform for restaurants — user/kitchen/courier/admin roles, AI waiter assistant (DeepSeek + LangChain), Celery, warehouse panel, Stripe, Supabase, 57 tests.',
          tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'Stripe'],
          github: 'https://github.com/krzysztofzelman/restaurant-clean',
          live: 'https://restauracja.kzelman.pl/',
          accent: '#f59e0b',
          isLive: true,
        },
        {
          title: 'Smart Mysłowice v2',
          desc: 'City data platform — Leaflet map, GIOŚ air quality, weather, AED locations.',
          tech: ['React', 'Node.js', 'Express', 'Leaflet'],
          github: 'https://github.com/krzysztofzelman/smart-myslowice-v2',
          live: 'https://smart-myslowice.pl/',
          accent: '#10b981',
          isLive: true,
        },
        {
          title: 'Mercha',
          desc: 'E-commerce platform for a clothing brand — customer store, admin panel, JWT, Docker, GitHub Actions CI/CD.',
          tech: ['FastAPI', 'React', 'TypeScript', 'SQLite', 'Docker', 'nginx'],
          github: 'https://github.com/krzysztofzelman/mercha',
          live: 'https://mercha.kzelman.pl/',
          accent: '#3b82f6',
          isLive: true,
        },
        {
          title: 'Magazyn App',
          desc: 'Multi-tenant warehouse management SaaS — FIFO, batches, QR codes, AI assistant, KSeF integration, user and permission management.',
          tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker'],
          github: 'https://github.com/krzysztofzelman/magazyn-frontend',
          live: 'https://magazyn.kzelman.pl/',
          accent: '#ef4444',
          isLive: true,
        },
        {
          title: 'Salon Fryzjerski',
          desc: 'Responsive website for a hair salon with Booksy integration.',
          tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
          github: 'https://github.com/krzysztofzelman/salon-fryzjerski',
          live: 'https://salon-fryzjerski-eta.vercel.app',
          accent: '#a855f7',
          isLive: false,
        },
        {
          title: 'Kawa i Ciasteczko',
          desc: 'Café website with menu and contact form, PWA, scroll animations, Supabase integration.',
          tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
          github: 'https://github.com/krzysztofzelman/kawiarnia',
          live: 'https://kawiarnia-swart.vercel.app',
          accent: '#d97706',
          isLive: false,
        },
        {
          title: 'Napraw Mnie',
          desc: 'SaaS for RTV/AGD service management — client tickets, parts database, serviceman schedule, SMS and email reminders, admin panel and client panel.',
          tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'Stripe'],
          github: 'https://github.com/krzysztofzelman/napraw-mnie',
          live: 'https://napraw.kzelman.pl/',
          accent: '#06b6d4',
          isLive: true,
        },
      ],
    },
    liveProjects: {
      label: 'Live',
      title: 'All live projects',
      subtitle: 'Click and see the results — every project runs in a production environment',
      items: [
        { name: 'Restauracja Kzelman', url: 'https://restauracja.kzelman.pl/' },
        { name: 'Smart Mysłowice', url: 'https://smart-myslowice.pl/' },
        { name: 'Mercha', url: 'https://mercha.kzelman.pl/' },
        { name: 'Magazyn App', url: 'https://magazyn.kzelman.pl/' },
        { name: 'Napraw Mnie', url: 'https://napraw.kzelman.pl/' },
        { name: 'Salon Fryzjerski', url: 'https://salon-fryzjerski-eta.vercel.app' },
        { name: 'Kawa i Ciasteczko', url: 'https://kawiarnia-swart.vercel.app' },
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
          desc: "I keep learning — React 19, TypeScript, Supabase. Your site won't feel outdated in a year.",
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

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'pl',
  t: translations.pl,
  toggleLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);
