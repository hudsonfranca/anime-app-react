import React from 'react';
import toJson from 'enzyme-to-json';

import { Container } from './styles';

export interface Props {
  open: boolean;
  onClick: () => any;
}

const HamburguerButton: React.FC<Props> = ({ open, onClick }) => {
  return (
    <Container data-test="container" open={open} onClick={onClick}>
      <div data-test="hamburguerLine"></div>
      <div data-test="hamburguerLine"></div>
      <div data-test="hamburguerLine"></div>
    </Container>
  );
};

export default HamburguerButton;
