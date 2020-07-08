import React, { createContext, useContext, useState } from 'react';

interface SearchSideDrawerContextProps {
  searchIsOpen: boolean;
  setSearchIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSideDrawerContext = createContext(
  {} as SearchSideDrawerContextProps
);

const SearchSideDrawerProvider: React.FC = ({ children }) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <SearchSideDrawerContext.Provider value={{ searchIsOpen, setSearchIsOpen }}>
      {children}
    </SearchSideDrawerContext.Provider>
  );
};

export function useSearchSideDrawer() {
  const context = useContext(SearchSideDrawerContext);
  if (!context) {
    throw new Error(
      'useSearchSideDrawer must be used within a SideDrawerProvider'
    );
  }

  const { searchIsOpen, setSearchIsOpen } = context;

  return { searchIsOpen, setSearchIsOpen };
}

export default SearchSideDrawerProvider;
