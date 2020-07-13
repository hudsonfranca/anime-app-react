import styled from 'styled-components';
interface Props {
  imgBackground: string;
}

export const Thumb = styled.div<Props>`
  width: 100%;
  height: 100%;
  background-image: ${({ imgBackground }) =>
    imgBackground ? `url(${imgBackground})` : ''};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
export const Title = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  padding: 2px;
  background-image: linear-gradient(to bottom, var(--hover1), var(--hover2));
  color: var(--white);
  font-size: 1.6rem;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top: 3px solid var(--hover2);
`;

export const Container = styled.div`
  width: 215px;
  height: 200px;
  border-radius: 10px;
  font-weight: bolder;
  position: relative;
  z-index: 0;
  box-shadow: 7px 7px 5px 0px var(--black);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px 60px;
  justify-content: space-around;
  align-items: center;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.5s;
    border-radius: 10px;
  }

  :hover::after {
    opacity: 0.4;
    background-color: var(--tertiary);
  }
`;
