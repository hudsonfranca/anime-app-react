import styled from 'styled-components';

export const Container = styled.div`
  grid-area: navbar;
  background-color: var(--primary);
  width: 100%;
  height: 60px;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  ::after {
    content: '';
    width: 100%;
    height: 5px;
    position: absolute;
    top: 60px;
    background-image: linear-gradient(to right, var(--hover1), var(--hover2));
  }

  div {
    padding: 0 10px 0 10px;
    :first-child {
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        li {
          padding: 10px;
          margin: 0 2px 0 2px;
          color: var(--white);
          cursor: pointer;
          transition: 0.5s;
          border-radius: 3px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          :hover,
          :active {
            color: var(--hover1);
          }
        }
      }
    }
    :nth-child(2) {
    }
    :nth-child(3) {
      ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        li {
          padding: 10px;
          margin: 0 2px 0 2px;
          color: var(--white);
          cursor: pointer;
          transition: 0.5s;
          border-bottom: 2px solid var(--primary);
          border-radius: 2px;
          :hover,
          :active {
            border-bottom: 2px solid var(--hover1);
          }
        }
      }
    }
  }
`;
