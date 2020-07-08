import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular';

interface Props {
  isOpen: boolean;
}

export const Container = styled.form<Props>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--primary);
  transition: 0.8s ease-in-out;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 30px;

  transform: ${(props) =>
    props.isOpen ? 'translate3d(0,0,0)' : ' translate3d(-100%,0,0)'};

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  transition: 0.4s;
  font-size: 2rem;
  background-color: var(--white);

  :focus {
    outline: none !important;
    border: 1px solid var(--hover1);
    box-shadow: 0 0 7px var(--hover1);
  }
`;

export const ButtonSubmit = styled.button`
  border-radius: 10px;
  :hover,
  :active {
    background-image: linear-gradient(45deg, var(--hover1), var(--hover2));
  }
`;

export const ButtonCancel = styled.button`
  font-size: 2rem;
  color: var(--white);
  padding: 15px;
  :hover,
  :active {
    background-image: linear-gradient(45deg, var(--hover1), var(--hover2));
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const SearchButton = styled(SearchAlt)`
  color: var(--white);
  width: 50px;
  height: 50px;
`;
