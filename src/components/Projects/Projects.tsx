import type { FC } from 'react';
import type { CSSProperties } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Projects.module.css';

const GitHubIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ScissorsIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);

const Projects: FC = () => {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation();
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <div
          ref={headerRef}
          className={`${styles.header} fade-up ${headerVisible ? 'visible' : ''}`}
        >
          <span className={styles.label}>{t.projects.label}</span>
          <h2 className={styles.title}>{t.projects.title}</h2>
          <p className={styles.subtitle}>{t.projects.subtitle}</p>
        </div>

        <div ref={cardsRef} className={styles.cards}>
          {t.projects.items.map((project, i) => (
            <article
              key={project.title}
              className={`${styles.card} fade-up ${cardsVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Top accent bar */}
              <div
                className={styles.accentBar}
                style={{ background: project.accent }}
              />

              <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                  <div
                    className={styles.projectDot}
                    style={{ background: project.accent, boxShadow: `0 0 12px ${project.accent}60` }}
                  />
                  {project.title === 'Salon Fryzjerski' && (
                    <span className={styles.cardIcon} style={{ color: project.accent }}>
                      <ScissorsIcon />
                    </span>
                  )}
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  {project.isLive && (
                    <span className={styles.liveBadge}>🟢 LIVE</span>
                  )}
                </div>

                <p className={styles.cardDesc}>{project.desc}</p>

                <div className={styles.techRow}>
                  {project.tech.map(tag => (
                    <span key={tag} className={styles.techTag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.btnRow}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveBtn}
                      style={{ '--accent': project.accent } as CSSProperties}
                    >
                      <ExternalLinkIcon />
                      Live demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubBtn}
                    style={{ '--accent': project.accent } as CSSProperties}
                  >
                    <GitHubIcon />
                    {t.projects.viewGithub}
                  </a>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className={styles.cardGlow}
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}18 0%, transparent 70%)` }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
