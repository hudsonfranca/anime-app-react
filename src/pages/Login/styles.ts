import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--tertiary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: var(--white);
`;

export const Form = styled.div`
  width: 330px;
  height: 330px;
  background-color: var(--primary);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 40px;
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
  width: 80%;
  height: 40px;
  transition: 0.4s;
  color: var(--white);
  font-size: 1.6rem;
  background-image: linear-gradient(45deg, var(--hover1), var(--hover2));
  :hover,
  :active {
    background-image: linear-gradient(-45deg, var(--hover1), var(--hover2));
  }
`;
