// context.js
import React, { createContext, useContext, useMemo } from 'react';

const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  const value = useMemo(() => ({ /* some value */ }), []);
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
