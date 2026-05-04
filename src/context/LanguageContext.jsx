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
      tagline: 'Freelancer nowej generacji — tworzę strony i apki szybciej dzięki AI',
      cta1: 'Zobacz projekty',
      cta2: 'Skontaktuj się',
      available: 'Dostępny na zlecenia',
    },
    services: {
      title: 'Moje usługi',
      subtitle: 'Kompleksowe rozwiązania webowe dopasowane do Twojego biznesu',
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
      title: 'Specjalizacja logistyczna',
      subtitle: '10 lat jako operator wózka widłowego — znam logistykę od podszewki',
      desc: 'Nie jestem tylko programistą, który słyszał o logistyce. Przez 10 lat pracowałem w magazynach, rozumiałem procesy WMS od środka, widziałem gdzie systemy zawodzą. Tworzę oprogramowanie, które naprawdę działa w terenie.',
      badge: '10 lat w logistyce',
      subsections: [
        {
          title: 'Systemy WMS',
          desc: 'Przyjęcia, wydania, lokalizacje, stany magazynowe i inwentaryzacje.',
          icon: '🏭',
        },
        {
          title: 'Śledzenie floty',
          desc: 'Real-time tracking pojazdów, optymalizacja tras i historia przejazdów.',
          icon: '🚛',
        },
        {
          title: 'Raporty i KPI',
          desc: 'Dashboardy z kluczowymi wskaźnikami, filtrowaniem i eksportem do Excel/PDF.',
          icon: '📊',
        },
        {
          title: 'Harmonogramy',
          desc: 'Planowanie zmian, dyspozycja zasobów, urlopy i powiadomienia SMS/email.',
          icon: '📋',
        },
      ],
    },
    projects: {
      title: 'Projekty',
      subtitle: 'Wybrane realizacje — kod otwarty, wyniki mierzalne',
      viewGithub: 'Kod na GitHub',
      items: [
        {
          title: 'Smart Mysłowice',
          desc: 'Aplikacja miejska dla mieszkańców Mysłowic. Interaktywna mapa jakości powietrza w czasie rzeczywistym (Airly API), system zgłaszania usterek infrastruktury z geolokalizacją i panelem dla urzędników.',
          tech: ['React', 'Node.js', 'Leaflet', 'Airly API'],
          github: 'https://github.com/krzysztofzelman/smart-myslowice-v2',
          live: 'https://smart-myslowice-v2.vercel.app/',
          accent: '#10b981',
        },
        {
          title: 'AutoFlex',
          desc: 'Platforma wynajmu i zarządzania flotą pojazdów. Rezerwacje online, płatności Stripe, panel administracyjny z KPI, automatyczne powiadomienia email i push.',
          tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'Stripe'],
          github: 'https://github.com/krzysztofzelman/auto-flex',
          live: 'https://auto-flex-woad.vercel.app/',
          accent: '#7c3aed',
        },
        {
          title: 'Restauracja App',
          desc: 'Aplikacja do zarządzania menu restauracji – dodawanie, edycja i usuwanie dań, zarządzanie zamówieniami. Zbudowana w Next.js + Supabase.',
          tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
          github: 'https://github.com/krzysztofzelman/restaurant-clean',
          live: 'https://restaurant-clean-omega.vercel.app/menu',
          accent: '#f59e0b',
        },
      ],
    },
    whyMe: {
      title: 'Dlaczego ja?',
      subtitle: 'Co wyróżnia moją pracę spośród tysięcy freelancerów',
      items: [
        {
          title: '2× szybsze wdrożenie',
          desc: 'Dzięki AI w procesie developmentu i sprawdzonemu workflow projekty realizuję w połowie standardowego czasu — bez utraty jakości.',
          icon: '⚡',
        },
        {
          title: 'Świeże podejście',
          desc: 'Śledzę ekosystem na bieżąco — React 19, Supabase, edge functions, AI-native tools. Twoja strona nie zestarzeję się za rok.',
          icon: '✨',
        },
        {
          title: 'Znam logistykę od środka',
          desc: '10 lat w magazynie to wiedza, której nie wyczytasz z dokumentacji. Tworzę systemy, które faktycznie odpowiadają na realne problemy operacyjne.',
          icon: '🏭',
        },
        {
          title: 'Dwujęzyczny (PL/EN)',
          desc: 'Dokumentacja, komentarze, komunikacja — zarówno po polsku, jak i po angielsku. Współpraca z zagranicznymi klientami bez bariery.',
          icon: '🌍',
        },
      ],
    },
    contact: {
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
      tagline: 'Tworzę cyfrowe produkty, które działają.',
      rights: 'Wszelkie prawa zastrzeżone',
      builtWith: 'Zbudowane z',
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
      tagline: 'Next-gen freelancer — I build websites and apps faster with AI',
      cta1: 'View projects',
      cta2: 'Get in touch',
      available: 'Available for projects',
    },
    services: {
      title: 'My services',
      subtitle: 'Comprehensive web solutions tailored to your business needs',
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
      title: 'Logistics specialization',
      subtitle: '10 years as a forklift operator — I know logistics from the inside',
      desc: "I'm not just a developer who heard about logistics. I spent 10 years working in warehouses, understanding WMS processes first-hand, seeing where systems fail. I build software that actually works on the floor.",
      badge: '10 years in logistics',
      subsections: [
        {
          title: 'WMS Systems',
          desc: 'Goods receipt, dispatch, locations, stock levels and inventory management.',
          icon: '🏭',
        },
        {
          title: 'Fleet tracking',
          desc: 'Real-time vehicle tracking, route optimization and full trip history.',
          icon: '🚛',
        },
        {
          title: 'Reports & KPIs',
          desc: 'Dashboards with key performance indicators, filtering and Excel/PDF export.',
          icon: '📊',
        },
        {
          title: 'Schedules',
          desc: 'Shift planning, resource allocation, leave management and SMS/email alerts.',
          icon: '📋',
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected works — open source, measurable results',
      viewGithub: 'Code on GitHub',
      items: [
        {
          title: 'Smart Mysłowice',
          desc: 'City app for Mysłowice residents. Real-time air quality map (Airly API), infrastructure issue reporting with geolocation and an official admin panel.',
          tech: ['React', 'Node.js', 'Leaflet', 'Airly API'],
          github: 'https://github.com/krzysztofzelman/smart-myslowice-v2',
          live: 'https://smart-myslowice-v2.vercel.app/',
          accent: '#10b981',
        },
        {
          title: 'AutoFlex',
          desc: 'Vehicle fleet rental and management platform. Online booking, Stripe payments, admin KPI dashboard, automated email and push notifications.',
          tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'Stripe'],
          github: 'https://github.com/krzysztofzelman/auto-flex',
          live: 'https://auto-flex-woad.vercel.app/',
          accent: '#7c3aed',
        },
        {
          title: 'Restauracja App',
          desc: 'Restaurant menu management app — add, edit and delete dishes, manage orders. Built with Next.js + Supabase.',
          tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
          github: 'https://github.com/krzysztofzelman/restaurant-clean',
          live: 'https://restaurant-clean-omega.vercel.app/menu',
          accent: '#f59e0b',
        },
      ],
    },
    whyMe: {
      title: 'Why me?',
      subtitle: 'What sets my work apart from thousands of freelancers',
      items: [
        {
          title: '2× faster delivery',
          desc: 'Using AI in my development workflow and battle-tested processes, I deliver projects in half the usual time — without sacrificing quality.',
          icon: '⚡',
        },
        {
          title: 'Fresh approach',
          desc: 'I follow the ecosystem daily — React 19, Supabase, edge functions, AI-native tools. Your product won\'t feel outdated in a year.',
          icon: '✨',
        },
        {
          title: 'Logistics insider',
          desc: '10 years on the warehouse floor is knowledge you can\'t get from docs. I build systems that solve real operational problems.',
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
      tagline: 'Building digital products that work.',
      rights: 'All rights reserved',
      builtWith: 'Built with',
    },
  },
};

export const LanguageContext = createContext({
  lang: 'pl',
  t: translations.pl,
  toggleLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);
