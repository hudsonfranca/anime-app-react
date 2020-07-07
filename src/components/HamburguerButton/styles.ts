import styled from 'styled-components';

export interface Props {
  open: boolean;
}
export const Container = styled.div<Props>`
  width: 50px;
  height: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  div {
    width: 100%;
    height: 3px;
    background-color: var(--white);
    transition: all 0.3s linear;
    transform-origin: 1px;
    border-radius: 10px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
