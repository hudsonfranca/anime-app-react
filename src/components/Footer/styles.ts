import styled from 'styled-components';
import { Facebook, Twitter } from '@styled-icons/boxicons-logos';

export const Container = styled.div`
  grid-area: footer;
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 0;
  position: relative;

  small {
    color: var(--white);
    font-size: 1.6rem;
  }

  ul {
    width: 30%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &::before {
    content: '';
    width: 100%;
    height: 5px;
    position: absolute;
    top: 0;
    background-image: linear-gradient(to right, var(--hover1), var(--hover2));
  }

  &::after {
    content: '';
    width: 100%;
    height: 150px;
    position: absolute;
    z-index: 10;
    background-color: var(--secondary);
    clip-path: polygon(100% 100%, 74% 0, 51% 100%, 27% 0, 0 100%);
    z-index: -1;
  }
`;

export const FacebookComponent = styled(Facebook)`
  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const TwitterComponent = styled(Twitter)`
  width: 30px;
  height: 30px;
  color: var(--white);
`;
