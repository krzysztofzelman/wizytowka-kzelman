import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Services.module.css';

export default function Services() {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <span className={styles.sectionLabel}>Freelancer</span>
          <h2 className={styles.title}>{t.services.title}</h2>
          <p className={styles.subtitle}>{t.services.subtitle}</p>
        </div>

        <div ref={gridRef} className={styles.grid}>
          {t.services.items.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.card} fade-up ${gridVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <div className={styles.cardGlow} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
