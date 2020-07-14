import React, { useState } from 'react';
import { Container, SearchIcon } from './styles';

const SearchInput: React.FC = () => {
  const [value, setValue] = useState('');

  async function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container
      onSubmit={(e) => handleSubmit(e)}
      data-test="search-input-container"
    >
      <input
        type="text"
        value={value}
        placeholder="Search animes"
        onChange={(e) => onChangeHandler(e)}
        data-test="input"
      />
      <button type="submit" data-test="submit-button">
        <SearchIcon />
      </button>
    </Container>
  );
};

export default SearchInput;
