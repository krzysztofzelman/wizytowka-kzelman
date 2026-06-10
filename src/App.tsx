import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { LanguageContext, translations } from './context/LanguageContext';
import type { Lang } from './context/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Logistics from './components/Logistics/Logistics';
import Projects from './components/Projects/Projects';
import WhyMe from './components/WhyMe/WhyMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ChatBot from './components/ChatBot/ChatBot';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  const [lang, setLang] = useState<Lang>('pl');
  const toggleLang = () => setLang(l => (l === 'pl' ? 'en' : 'pl'));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      <Helmet>
        <title>{lang === 'pl'
          ? 'Krzysztof Zelman — Freelancer React, TypeScript, Supabase'
          : 'Krzysztof Zelman — Freelance React, TypeScript, Supabase Developer'}</title>
        <meta name="description" content={lang === 'pl'
          ? 'Krzysztof Zelman – Freelancer React, TypeScript, Supabase z Mysłowic. Tworzę strony internetowe i aplikacje webowe.'
          : 'Krzysztof Zelman – Freelance React, TypeScript, Supabase developer from Mysłowice, Poland. Building websites and web apps.'} />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Logistics />
        <ErrorBoundary>
          <Projects />
        </ErrorBoundary>
        <WhyMe />
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </main>
      <Footer />
      <ErrorBoundary>
        <ChatBot />
      </ErrorBoundary>
    </LanguageContext.Provider>
  );
}

export default App;
