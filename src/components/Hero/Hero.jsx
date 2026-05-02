import { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Hero.module.css';

const BADGES = ['React', 'Node.js', 'AI-powered', 'Supabase', 'Vercel'];

export default function Hero() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Animated gradient background */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.content}`}>
        {/* Text side */}
        <div className={`${styles.textSide} ${visible ? styles.visible : ''}`}>
          <div className={styles.availablePill}>
            <span className={styles.dot} />
            {t.hero.available}
          </div>

          <h1 className={styles.name}>
            Krzysztof
            <br />
            <span className={styles.nameAccent}>Zelman</span>
          </h1>

          <p className={styles.tagline}>{t.hero.tagline}</p>

          <div className={styles.badges}>
            {BADGES.map(b => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.ctaPrimary}>{t.hero.cta1}</a>
            <a href="#contact" className={styles.ctaSecondary}>{t.hero.cta2}</a>
          </div>
        </div>

        {/* Avatar side */}
        <div className={`${styles.avatarSide} ${visible ? styles.visible : ''}`}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatarRingOuter} />
            <div className={styles.avatarRingInner} />
            <div className={styles.avatar}>
              <span className={styles.avatarText}>KZ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </div>
    </section>
  );
}
