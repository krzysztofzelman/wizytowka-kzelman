import type { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './LiveProjects.module.css';

const ExternalLinkIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const LiveProjects: FC = () => {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [listRef, listVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className={styles.section} id="live-projects">
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <span className={styles.label}>{t.liveProjects.label}</span>
          <h2 className={styles.title}>{t.liveProjects.title}</h2>
          <p className={styles.subtitle}>{t.liveProjects.subtitle}</p>
        </div>

        <div ref={listRef} className={styles.list}>
          {t.liveProjects.items.map((item, i) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} fade-up ${listVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className={styles.linkDot} />
              <span className={styles.linkName}>{item.name}</span>
              <span className={styles.linkIcon}>
                <ExternalLinkIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveProjects;
