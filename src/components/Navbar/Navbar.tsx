import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Navbar.module.css';

interface NavLink {
  href: string;
  label: string;
}

const Navbar: FC = () => {
  const { lang, t, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links: NavLink[] = [
    { href: '#services', label: t.nav.services },
    { href: '#logistics', label: t.nav.logistics },
    { href: '#projects', label: t.nav.projects },
    { href: '#why-me', label: t.nav.whyMe },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLink: () => void = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} onClick={handleLink}>
          <span className={styles.logoGradient}>KZ</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className={styles.link} onClick={handleLink}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={styles.langBtn} onClick={toggleLang} aria-label="Switch language">
            <span className={lang === 'pl' ? styles.langActive : styles.langInactive}>PL</span>
            <span className={styles.langSep}>/</span>
            <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
          </button>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
