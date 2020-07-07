import React from 'react';

import { Container } from './styles';
import { useSideDrawer } from '../context/SideDrawerContext';
import { HamburguerButton } from '../HamburguerButton';

const SideDrawer: React.FC = () => {
  const { isOpen, setIsOpen } = useSideDrawer();
  return (
    <Container isOpen={isOpen} data-test="container">
      <HamburguerButton
        onClick={() => setIsOpen(!isOpen)}
        open={isOpen}
        data-test="hamburguer-button"
      />

      <ul data-test="menu">
        <li>Home</li>
        <li>animes</li>
        <li>Genres</li>
        <li>Login</li>
        <li>Logout</li>
      </ul>
    </Container>
  );
};

export default SideDrawer;
