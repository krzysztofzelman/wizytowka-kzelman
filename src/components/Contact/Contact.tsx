import type { FC, ReactNode } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Contact.module.css';

interface ContactItem {
  icon: ReactNode;
  label: string;
  value: string;
  href: string | null;
  color: string;
}

const EmailIcon: FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon: FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
  </svg>
);

const MapIcon: FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Contact: FC = () => {
  const { t } = useLanguage();
  const [ref, visible] = useScrollAnimation();

  const contactItems: ContactItem[] = [
    {
      icon: <EmailIcon />,
      label: t.contact.emailLabel,
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
      color: '#7c3aed',
    },
    {
      icon: <PhoneIcon />,
      label: t.contact.phoneLabel,
      value: t.contact.phone,
      href: `tel:+48${t.contact.phone.replace(/\s/g, '')}`,
      color: '#3b82f6',
    },
    {
      icon: <MapIcon />,
      label: t.contact.locationLabel,
      value: t.contact.location,
      href: null,
      color: '#10b981',
    },
  ];

  return (
    <section className={styles.section} id="contact">
      {/* Background glow */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className="container">
        <div
          ref={ref}
          className={`${styles.wrapper} fade-up ${visible ? 'visible' : ''}`}
        >
          {/* Left: text */}
          <div className={styles.textSide}>
            <span className={styles.label}>{t.contact.label}</span>
            <h2 className={styles.title}>{t.contact.title}</h2>
            <p className={styles.subtitle}>{t.contact.subtitle}</p>

            <div className={styles.availableBadge}>
              <span className={styles.dot} />
              {t.contact.available}
            </div>

            <a
              href={`mailto:${t.contact.email}`}
              className={styles.ctaBtn}
            >
              <EmailIcon />
              {t.contact.cta}
            </a>
          </div>

          {/* Right: contact cards */}
          <div className={styles.infoSide}>
            {contactItems.map((item, i) => (
              <div
                key={item.label}
                className={`${styles.infoCard} fade-up ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <div
                  className={styles.infoIcon}
                  style={{
                    color: item.color,
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  {item.icon}
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className={styles.infoValue}>{item.value}</a>
                  ) : (
                    <span className={styles.infoValue}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
