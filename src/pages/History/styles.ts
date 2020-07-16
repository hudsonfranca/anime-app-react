import styled from 'styled-components';

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  background-color: var(--tertiary);
`;

export const Li = styled.li`
  color: var(--white);
  font-size: 1.6rem;
  width: 100%;
  height: 60px;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  transition: all 0.4s;

  :hover,
  :active {
    background-color: var(--primary);
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--tertiary);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 2fr auto;
  grid-gap: 20px;
  padding: 10px;
  border-right: 1px solid var(--primary);
`;

export const Title = styled.p`
  width: 100%;
  height: 70px;
  display: flex;
  text-align: center;
  padding: 2px;
  font-size: 3rem;
  color: var(--white);
  border-bottom: 1px solid var(--primary);
  align-items: center;
  margin-bottom: 20px;
`;
