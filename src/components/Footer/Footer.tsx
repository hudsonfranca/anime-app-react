import React from 'react';

import { Container, FacebookComponent, TwitterComponent } from './styles';
import Logo from '../../assets/Logo2.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <Container data-test="container">
      <ul>
        <li>
          <img src={Logo} alt="Logo" />
        </li>

        <li>
          <FacebookComponent />
        </li>
        <li>
          <TwitterComponent />
        </li>
      </ul>
      <small>&copy; Animes BR {currentYear}. All rights reserved.</small>
    </Container>
  );
};

export default Footer;
