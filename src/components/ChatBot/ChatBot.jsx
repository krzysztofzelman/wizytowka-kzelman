import { useState, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './ChatBot.module.css';
import { useChatLimit } from '../../hooks/useChatLimit';
import { STORAGE_KEYS, MAX_MESSAGES } from '../../types/chat';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEYS.MESSAGES);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // sessionStorage unavailable or corrupt data
    }
    return [];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { count, remaining, isLimitReached, increment, reset } = useChatLimit();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Persist messages to sessionStorage
  useEffect(() => {
    try {
      if (messages.length > 0) {
        sessionStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
      }
    } catch {
      // sessionStorage not available
    }
  }, [messages]);

  // Auto-scroll to newest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading || isLimitReached) return;

    setInput('');
    const userMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    increment();
    setIsLoading(true);

    // Build history for the API (without the just-added message)
    const history = messages.map((m) => ({ role: m.role, content: m.content }));

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history, count }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      const reply = data.reply || 'Przepraszam, wystąpił błąd.';

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Przepraszam, wystąpił błąd połączenia. Spróbuj ponownie lub skontaktuj się przez formularz kontaktowy.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, isLimitReached, messages, count, increment]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = useCallback(() => {
    setMessages([]);
    reset();
    try {
      sessionStorage.removeItem(STORAGE_KEYS.MESSAGES);
    } catch {
      // sessionStorage not available
    }
  }, [reset]);

  return (
    <>
      {/* Floating action button */}
      <button
        className={`${styles.fab} ${isOpen ? styles.fabActive : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Zamknij czat' : 'Otwórz czat'}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className={styles.window}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerInfo}>
              <div className={styles.avatar}>KZ</div>
              <div>
                <div className={styles.headerTitle}>Krzysztof Zelman</div>
                <div className={styles.headerStatus}>
                  <span className={styles.statusDot} />
                  Asystent AI
                </div>
              </div>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Zamknij"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages area */}
          <div className={styles.messages}>
            {messages.length === 0 && (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <p className={styles.emptyText}>
                  Witaj! 👋 Jestem asystentem Krzysztofa. Zadaj pytanie o jego usługi, technologie lub dostępność.
                </p>
                <p className={styles.emptyHint}>
                  Pozostało Ci <strong>{remaining}</strong> z {MAX_MESSAGES} wiadomości w tej sesji.
                </p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`${styles.message} ${msg.role === 'user' ? styles.userMsg : styles.assistantMsg}`}
              >
                {msg.role === 'assistant' && <div className={styles.msgAvatar}>KZ</div>}
                <div className={styles.msgBubble}>
                  <div className={styles.msgContent}>
                    {msg.role === 'assistant' ? (
                      <ReactMarkdown
                        components={{
                          a: ({ href, children }) => (
                            <a href={href} target="_blank" rel="noopener noreferrer">
                              {children}
                            </a>
                          ),
                          p: ({ children }) => <p className={styles.markdownP}>{children}</p>,
                          strong: ({ children }) => <strong className={styles.markdownStrong}>{children}</strong>,
                          ul: ({ children }) => <ul className={styles.markdownList}>{children}</ul>,
                          li: ({ children }) => <li className={styles.markdownLi}>{children}</li>,
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    ) : (
                      <p>{msg.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className={`${styles.message} ${styles.assistantMsg}`}>
                <div className={styles.msgAvatar}>KZ</div>
                <div className={styles.msgBubble}>
                  <div className={styles.typing}>
                    <span className={styles.typingDot} />
                    <span className={styles.typingDot} />
                    <span className={styles.typingDot} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Message counter */}
          {!isLimitReached && messages.length > 0 && (
            <div className={styles.counter}>
              Pozostało {remaining} z {MAX_MESSAGES} wiadomości
            </div>
          )}

          {/* Footer: input or limit banner */}
          <div className={styles.footer}>
            {isLimitReached ? (
              <div className={styles.limitReached}>
                <p>Limit wiadomości wyczerpany</p>
                <button className={styles.resetBtn} onClick={handleReset}>
                  Resetuj rozmowę
                </button>
              </div>
            ) : (
              <div className={styles.inputRow}>
                <input
                  ref={inputRef}
                  className={styles.input}
                  type="text"
                  placeholder="Napisz wiadomość..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  maxLength={2000}
                />
                <button
                  className={styles.sendBtn}
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  aria-label="Wyślij"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
