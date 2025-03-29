import React, { use, useState } from 'react';
import AppContext from '@/contexts/AppContext';

export default function MessageForm() {
  const [message, setMessage] = useState<string>('');
  const { messages, setMessages } = use(AppContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() === '') {
      return;
    }
    const newMessages = [
      ...messages,
      { id: messages.length + 1, recipient: 'me', message: message.trim() }
    ];
    setMessages(newMessages);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleInputChange} />
      <button type="submit">send</button>
    </form>
  );
}
