export type Message = {
  id: number;
  recipient: string;
  message: string;
};

export type AppContextType = {
  recipient: string;
  setRecipient: (recipient: string) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
};
