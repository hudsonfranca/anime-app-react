import React, { createContext, useContext, useState } from 'react';

interface Props {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContext = createContext({} as Props);

const LoginProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <LoginContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, setToken, token }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export function useLogin() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin must be used within a SideDrawerProvider');
  }

  const { isAuthenticated, setIsAuthenticated, setToken, token } = context;

  return { isAuthenticated, setIsAuthenticated, setToken, token };
}

export default LoginProvider;
