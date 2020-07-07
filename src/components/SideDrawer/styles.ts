import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
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
  grid-template-rows: auto 2fr;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: ${(props) =>
    props.isOpen ? 'translate3d(0,0,0)' : ' translate3d(-100%,0,0)'};

  div {
    margin: 3px 0 0 15px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: var(--white);
    font-size: 2rem;
    flex-direction: column;

    li {
      padding: 20px;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      :hover,
      :active {
        background-image: linear-gradient(45deg, var(--hover1), var(--hover2));
      }
    }
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;
