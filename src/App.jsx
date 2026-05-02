import { useState } from 'react';
import { LanguageContext, translations } from './context/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Logistics from './components/Logistics/Logistics';
import Projects from './components/Projects/Projects';
import WhyMe from './components/WhyMe/WhyMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [lang, setLang] = useState('pl');
  const toggleLang = () => setLang(l => (l === 'pl' ? 'en' : 'pl'));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Logistics />
        <Projects />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </LanguageContext.Provider>
  );
}

export default App;
