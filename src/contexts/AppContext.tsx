import { createContext } from 'react';
import { AppContextType } from '@/lib/types';

const AppContext = createContext<AppContextType>({
  recipient: '',
  setRecipient: () => {},
  messages: [],
  setMessages: () => {}
});

export default AppContext;
