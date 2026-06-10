import { describe, it, expect } from 'vitest';
import handler from './chat.js';

/**
 * Minimal mock for Vercel Request/Response objects.
 * We test only validation and edge cases — actual LLM calls are not mocked.
 */

function createMockReqRes(overrides = {}) {
  const defaultReq = {
    method: 'POST',
    body: { message: 'Hello', history: [], count: 0 },
    ...overrides,
  };

  const status = [];
  const json = [];
  const end = [];

  const res = {
    setHeader: () => {},
    status: (code) => {
      status.push(code);
      return res;
    },
    json: (data) => {
      json.push(data);
      return res;
    },
    end: () => {
      end.push(true);
      return res;
    },
  };

  return { req: defaultReq, res, status, json, end };
}

describe('/api/chat validation', () => {
  it('rejects GET requests with 405', async () => {
    const { req, res, status, json } = createMockReqRes({ method: 'GET' });
    await handler(req, res);
    expect(status[0]).toBe(405);
    expect(json[0]).toHaveProperty('error');
  });

  it('returns 200 for OPTIONS preflight', async () => {
    const { req, res, status, end } = createMockReqRes({ method: 'OPTIONS' });
    await handler(req, res);
    expect(status[0]).toBe(200);
    expect(end[0]).toBe(true);
  });

  it('rejects empty message with 400', async () => {
    const { req, res, status, json } = createMockReqRes({
      body: { message: '', history: [], count: 0 },
    });
    await handler(req, res);
    expect(status[0]).toBe(400);
    expect(json[0]).toHaveProperty('error');
  });

  it('rejects missing body with 400', async () => {
    const { req, res, status, json } = createMockReqRes({ body: {} });
    await handler(req, res);
    expect(status[0]).toBe(400);
    expect(json[0]).toHaveProperty('error');
  });

  it('rejects message over 2000 chars', async () => {
    const { req, res, status, json } = createMockReqRes({
      body: { message: 'x'.repeat(2001), history: [], count: 0 },
    });
    await handler(req, res);
    expect(status[0]).toBe(400);
    expect(json[0]).toHaveProperty('error', expect.stringContaining('long'));
  });

  it('rejects request when limit is reached (count >= 5)', async () => {
    const { req, res, status, json } = createMockReqRes({
      body: { message: 'Hello', history: [], count: 5 },
    });
    await handler(req, res);
    expect(status[0]).toBe(429);
    expect(json[0]).toHaveProperty('limitReached', true);
    expect(json[0]).toHaveProperty('remaining', 0);
  });
});
