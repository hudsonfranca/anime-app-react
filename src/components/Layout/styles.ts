import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 60px auto 170px;
  grid-template-areas:
    'navbar navbar navbar'
    'main main sidebar'
    'footer footer footer';
`;
