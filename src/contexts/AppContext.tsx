import { createContext } from 'react';
import { AppContextType } from '@/lib/types';

const AppContext = createContext<AppContextType>({
  something: '',
  setSomething: () => {}
});

export default AppContext;
