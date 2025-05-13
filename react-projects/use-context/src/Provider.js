import React, { createContext, useState } from 'react';

const MyContext = createContext();
export const MyProvider = ({ children }) => {
  const [value, setValue] = useState('default value');
  const [count, setCount] = useState(0);

  return <MyContext.Provider value={{ value, setValue, count, setCount }}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  const context = React.useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
