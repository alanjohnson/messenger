// App Provider here
import React, { useState } from 'react';
import AppContext from '@/contexts/AppContext';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [something, setSomething] = useState<string>('something');
  const value = { something, setSomething };

  return <AppContext value={value}>{children}</AppContext>;
};

export default AppProvider;
