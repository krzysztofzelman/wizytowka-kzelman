import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useChatLimit } from './useChatLimit';

const STORAGE_KEY = 'test_chat_count';

describe('useChatLimit', () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it('starts with count 0', () => {
    const { result } = renderHook(() => useChatLimit(STORAGE_KEY));
    expect(result.current.count).toBe(0);
    expect(result.current.remaining).toBe(5);
    expect(result.current.isLimitReached).toBe(false);
  });

  it('increments count up to MAX_MESSAGES', () => {
    const { result } = renderHook(() => useChatLimit(STORAGE_KEY));

    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
    expect(result.current.remaining).toBe(4);

    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
  });

  it('caps count at MAX_MESSAGES', () => {
    const { result } = renderHook(() => useChatLimit(STORAGE_KEY));

    // Increment 6 times (MAX_MESSAGES = 5)
    for (let i = 0; i < 6; i++) {
      act(() => result.current.increment());
    }

    expect(result.current.count).toBe(5);
    expect(result.current.remaining).toBe(0);
    expect(result.current.isLimitReached).toBe(true);
  });

  it('resets count to 0', () => {
    const { result } = renderHook(() => useChatLimit(STORAGE_KEY));

    act(() => result.current.increment());
    act(() => result.current.increment());
    expect(result.current.count).toBe(2);

    act(() => result.current.reset());
    expect(result.current.count).toBe(0);
    expect(result.current.isLimitReached).toBe(false);
  });

  it('persists count to sessionStorage', () => {
    const { result } = renderHook(() => useChatLimit(STORAGE_KEY));

    act(() => result.current.increment());
    expect(sessionStorage.getItem(STORAGE_KEY)).toBe('1');
  });

  it('restores count from sessionStorage', () => {
    sessionStorage.setItem(STORAGE_KEY, '3');

    const { result } = renderHook(() => useChatLimit(STORAGE_KEY));
    expect(result.current.count).toBe(3);
    expect(result.current.remaining).toBe(2);
  });

  it('handles invalid sessionStorage value gracefully', () => {
    sessionStorage.setItem(STORAGE_KEY, 'not-a-number');

    const { result } = renderHook(() => useChatLimit(STORAGE_KEY));
    expect(result.current.count).toBe(0);
  });
});
