import { use } from 'react';
import { StyledMessageHistory } from '@/css/styled_components';
import AppContext from '@/contexts/AppContext';

export default function MessageHistory() {
  const { messages } = use(AppContext);

  return (
    <StyledMessageHistory>
      {messages.map(message => (
        <p key={message.id} className={message.recipient === 'me' ? 'me' : ''}>
          {message.message}
        </p>
      ))}
    </StyledMessageHistory>
  );
}
