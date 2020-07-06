import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/Logo2.png';
import { SearchInput } from '../SearchInput';

const Navbar: React.FC = () => {
  return (
    <Container>
      <div>
        <ul>
          <li>
            <img src={Logo} alt="Logo" />
          </li>
          <li>Home</li>
          <li>animes</li>
          <li>Genres</li>
        </ul>
      </div>
      <div>
        <SearchInput />
      </div>
      <div>
        <ul>
          <li>Login</li>
          <li>logout</li>
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
