export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  id?: string;
  timestamp?: number;
}

export interface ChatState {
  messages: ChatMessage[];
  count: number;
  isOpen: boolean;
  isLoading: boolean;
}

export interface ChatResponse {
  reply: string;
  limitReached: boolean;
  remaining: number;
}

export const STORAGE_KEYS = {
  MESSAGES: 'kz_chat_messages',
  COUNT: 'kz_chat_count',
} as const;

export const MAX_MESSAGES = 5;
