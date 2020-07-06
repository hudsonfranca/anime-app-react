import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular';

export const Container = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  button {
    height: 35px;
    width: 40px;
    background-color: var(--white);
    border-radius: 5px;
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
    :focus {
      outline: none !important;
      border: 1px solid var(--hover1);
      box-shadow: 0 0 7px var(--hover1);
    }
  }

  input {
    width: 350px;
    height: 35px;
    border-radius: 5px;
    border: none;
    transition: 0.4s;
    border-top-right-radius: unset;
    border-bottom-right-radius: unset;
    font-size: 2rem;
    background-color: var(--white);

    :focus {
      outline: none !important;
      border: 1px solid var(--hover1);
      box-shadow: 0 0 7px var(--hover1);
    }
  }
`;

export const SearchComponent = styled(SearchAlt)`
  width: 30px;
  height: 30px;
  color: var(--tertiary);
`;
