import React, { createContext, useContext, useState } from 'react';

interface SideDrawerContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideDrawerContext = createContext({} as SideDrawerContextProps);

const SideDrawerProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideDrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideDrawerContext.Provider>
  );
};

export function useSideDrawer() {
  const context = useContext(SideDrawerContext);
  if (!context) {
    throw new Error('useSideDrawer must be used within a SideDrawerProvider');
  }

  const { isOpen, setIsOpen } = context;

  return { isOpen, setIsOpen };
}

export default SideDrawerProvider;
