import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Logistics.module.css';

export default function Logistics() {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [subRef, subVisible] = useScrollAnimation({ threshold: 0.08 });

  return (
    <section className={styles.section} id="logistics">
      {/* Background decoration */}
      <div className={styles.bgAccent} aria-hidden="true" />

      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <span className={styles.badge}>
            <span className={styles.badgeIcon}>🏭</span>
            {t.logistics.badge}
          </span>
          <h2 className={styles.title}>{t.logistics.title}</h2>
          <p className={styles.subtitle}>{t.logistics.subtitle}</p>
          <p className={styles.desc}>{t.logistics.desc}</p>
        </div>

        <div ref={subRef} className={styles.subsections}>
          {t.logistics.subsections.map((sub, i) => (
            <div
              key={sub.title}
              className={`${styles.subCard} fade-up ${subVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.subIcon}>{sub.icon}</div>
              <h3 className={styles.subTitle}>{sub.title}</h3>
              <p className={styles.subDesc}>{sub.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
