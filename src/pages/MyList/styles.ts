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
  height: 150px;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 2px;

  transition: all 0.4s;
  margin: 10px 0 10px 0;
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

export const Image = styled.img`
  width: 100px;
  height: 150px;
  margin-right: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  text-align: left;

  small {
    font-size: 1.6rem;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  width: 10%;
  cursor: pointer;
  transition: 0.4s;
  color: var(--white);
  font-size: 1.6rem;
  background-color: var(--red);
`;
