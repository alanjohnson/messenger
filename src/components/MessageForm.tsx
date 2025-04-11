import React, { use, useState } from 'react';
import AppContext from '@/contexts/AppContext';
import { Message } from '@/lib/types';

export default function MessageForm() {
  const [message, setMessage] = useState<string>('');
  const { recipient, messages, setMessages } = use(AppContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() === '' || !recipient) {
      return;
    }

    const newMessage: Message = {
      id: messages[recipient]?.length + 1 || 1,
      recipient: 'me',
      message: message.trim()
    };

    setMessages({
      ...messages,
      [recipient]: [...(messages[recipient] || []), newMessage]
    });
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleInputChange} />
      <button type="submit">send</button>
    </form>
  );
}
