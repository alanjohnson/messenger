import React, { useState } from 'react';
import AppContext from '@/contexts/AppContext';
import { Message } from '@/lib/types';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipient, setRecipient] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const value = {
    recipient,
    setRecipient,
    messages,
    setMessages
  };

  return <AppContext value={value}>{children}</AppContext>;
};

export default AppProvider;
