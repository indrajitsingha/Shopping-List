import { useContext } from 'react';
import { createContext } from 'react';

export const Context = createContext();

const ContextApp = ({ children }) => {
  const item = 0;
  return <Context.Provider value={{ item }}>{children}</Context.Provider>;
};

export default ContextApp;
