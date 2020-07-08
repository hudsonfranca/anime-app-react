import React from 'react';

import {
  Container,
  SearchInput,
  ButtonSubmit,
  ButtonCancel,
  ButtonsContainer,
  SearchInputContainer,
  SearchButton,
} from './styles';
import { useSearchSideDrawer } from '../context/SearchSideDrawerContext';

const SearchSideDrawer: React.FC = () => {
  const { searchIsOpen, setSearchIsOpen } = useSearchSideDrawer();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <Container
      isOpen={searchIsOpen}
      data-test="container"
      onSubmit={handleSubmit}
    >
      <SearchInputContainer data-test="search-input-container">
        <SearchInput data-test="search-input" />
      </SearchInputContainer>

      <ButtonsContainer data-test="buttons-container">
        <ButtonCancel
          data-test="button-cancel"
          type="button"
          onClick={() => setSearchIsOpen(!searchIsOpen)}
        >
          CANCEL
        </ButtonCancel>
        <ButtonSubmit data-test="button-submit">
          <SearchButton data-test="search-button" />
        </ButtonSubmit>
      </ButtonsContainer>
    </Container>
  );
};

export default SearchSideDrawer;
