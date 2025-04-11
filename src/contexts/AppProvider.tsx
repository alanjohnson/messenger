import React, { useState } from 'react';
import AppContext from '@/contexts/AppContext';
import { MessagesByUser } from '@/lib/types';
import { mockMessages } from '@/data/mockData';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [recipient, setRecipient] = useState<string>('');
  const [messages, setMessages] = useState<MessagesByUser>(mockMessages);

  const value = {
    recipient,
    setRecipient,
    messages,
    setMessages
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
