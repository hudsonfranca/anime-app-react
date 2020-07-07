import React from 'react';

import { Container } from './styles';

const Main: React.FC = ({ children }) => {
  return <Container data-test="container">{children}</Container>;
};

export default Main;
