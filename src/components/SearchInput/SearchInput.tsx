import React, { useState } from 'react';
import { Container, SearchIcon } from './styles';

const SearchInput: React.FC = () => {
  const [value, setValue] = useState('');

  async function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <Container>
      <input
        type="text"
        value={value}
        placeholder="Search animes"
        onChange={(e) => onChangeHandler(e)}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </Container>
  );
};

export default SearchInput;
