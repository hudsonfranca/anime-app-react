import React, { createContext, useContext, useState, useEffect } from 'react';

interface Props {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginContext = createContext({} as Props);

const LoginProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('authentication');
    if (auth) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </LoginContext.Provider>
  );
};

export function useLogin() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin must be used within a SideDrawerProvider');
  }

  const { isAuthenticated, setIsAuthenticated } = context;

  return { isAuthenticated, setIsAuthenticated };
}

export default LoginProvider;
