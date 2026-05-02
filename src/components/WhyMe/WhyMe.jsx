import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './WhyMe.module.css';

export default function WhyMe() {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [tilesRef, tilesVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className={styles.section} id="why-me">
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <span className={styles.label}>Value</span>
          <h2 className={styles.title}>{t.whyMe.title}</h2>
          <p className={styles.subtitle}>{t.whyMe.subtitle}</p>
        </div>

        <div ref={tilesRef} className={styles.tiles}>
          {t.whyMe.items.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.tile} fade-up ${tilesVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.tileIcon}>{item.icon}</div>
              <h3 className={styles.tileTitle}>{item.title}</h3>
              <p className={styles.tileDesc}>{item.desc}</p>
              <div className={styles.tileCorner} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
