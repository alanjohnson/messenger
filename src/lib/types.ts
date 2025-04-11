export type Message = {
  id: number;
  recipient: string;
  message: string;
};

export type MessagesByUser = {
  [key: string]: Message[];
};

export type AppContextType = {
  recipient: string;
  setRecipient: (recipient: string) => void;
  messages: MessagesByUser;
  setMessages: (messages: MessagesByUser) => void;
};
