/**
 * @typedef {Object} ChatMessage
 * @property {'user' | 'assistant'} role
 * @property {string} content
 * @property {string} [id]
 * @property {number} [timestamp]
 */

/**
 * @typedef {Object} ChatState
 * @property {ChatMessage[]} messages
 * @property {number} count
 * @property {boolean} isOpen
 * @property {boolean} isLoading
 */

/**
 * @typedef {Object} ChatResponse
 * @property {string} reply
 * @property {boolean} limitReached
 * @property {number} remaining
 */

export const STORAGE_KEYS = {
  MESSAGES: 'kz_chat_messages',
  COUNT: 'kz_chat_count',
};

export const MAX_MESSAGES = 3;
