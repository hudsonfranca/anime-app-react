import styled from 'styled-components';

export const LatestEpisodes = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--tertiary);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
  justify-content: space-around;
  align-items: center;
  grid-gap: 20px;
  padding: 10px;
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
  font-size: 2rem;
  color: var(--white);
  border-bottom: 1px solid var(--primary);
  align-items: center;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
