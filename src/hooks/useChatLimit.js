import { useState, useCallback, useEffect } from 'react';
import { STORAGE_KEYS, MAX_MESSAGES } from '../types/chat';

/**
 * @typedef {Object} UseChatLimitReturn
 * @property {number} count
 * @property {number} remaining
 * @property {boolean} isLimitReached
 * @property {() => void} increment
 * @property {() => void} reset
 */

/**
 * @param {string} [storageKey='kz_chat_count']
 * @returns {UseChatLimitReturn}
 */
export function useChatLimit(storageKey = STORAGE_KEYS.COUNT) {
  const [count, setCount] = useState(() => {
    try {
      const stored = sessionStorage.getItem(storageKey);
      if (stored !== null) {
        const parsed = parseInt(stored, 10);
        return Number.isFinite(parsed) ? parsed : 0;
      }
    } catch {
      // sessionStorage not available
    }
    return 0;
  });

  useEffect(() => {
    try {
      if (count > 0) {
        sessionStorage.setItem(storageKey, String(count));
      } else {
        sessionStorage.removeItem(storageKey);
      }
    } catch {
      // sessionStorage not available
    }
  }, [count, storageKey]);

  const increment = useCallback(() => {
    setCount((prev) => Math.min(prev + 1, MAX_MESSAGES));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
    try {
      sessionStorage.removeItem(storageKey);
      sessionStorage.removeItem(STORAGE_KEYS.MESSAGES);
    } catch {
      // sessionStorage not available
    }
  }, [storageKey]);

  return {
    count,
    remaining: Math.max(0, MAX_MESSAGES - count),
    isLimitReached: count >= MAX_MESSAGES,
    increment,
    reset,
  };
}
