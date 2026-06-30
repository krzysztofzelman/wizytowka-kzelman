/**
 * Chat API — endpoint dla chatbota AI
 *
 * POST /api/chat
 * Body: { message: string, history: Array<{role, content}>, count: number }
 *
 * Environment variables:
 *   DEEPSEEK_API_KEY — required, get yours at https://platform.deepseek.com/api_keys
 */

const SYSTEM_PROMPT =
  'Jesteś asystentem Krzysztofa Zelmana, freelancera React. ' +
  'Odpowiadasz na pytania o usługi, technologie i dostępność. ' +
  'Bądź zwięzły i profesjonalny.';

const MAX_MESSAGES = 5;
const TIMEOUT_MS = 15_000;

/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history, count } = req.body || {};

  // Validate message
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (message.length > 2000) {
    return res.status(400).json({ error: 'Message too long (max 2000 chars)' });
  }

  // Validate limit server-side
  const currentCount = typeof count === 'number' ? count : (history?.length || 0);
  if (currentCount >= MAX_MESSAGES) {
    return res.status(429).json({
      error: 'Limit wiadomości wyczerpany. Zresetuj rozmowę, aby kontynuować.',
      limitReached: true,
      remaining: 0,
    });
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      reply: 'Przepraszam, wystąpił błąd konfiguracji. Skontaktuj się z Krzysztofem.',
    });
  }

  // Build conversation
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...(Array.isArray(history) ? history : []),
    { role: 'user', content: message.trim() },
  ];

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(
      'https://api.deepseek.com/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages,
          max_tokens: 600,
          temperature: 0.7,
        }),
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error('DeepSeek API error:', response.status, errorText);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      throw new Error('Empty response from API');
    }

    return res.status(200).json({
      reply,
      remaining: MAX_MESSAGES - currentCount - 1,
      limitReached: currentCount + 1 >= MAX_MESSAGES,
    });
  } catch (err) {
    console.error('Chat API error:', err);

    if (err.name === 'AbortError') {
      return res.status(504).json({
        reply: 'Przepraszam, odpowiedź trwała zbyt długo. Spróbuj ponownie za chwilę.',
      });
    }

    return res.status(200).json({
      reply:
        'Przepraszam, wystąpił błąd. Spróbuj ponownie później lub skontaktuj się bezpośrednio przez formularz kontaktowy.',
    });
  }
}
