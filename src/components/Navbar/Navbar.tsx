import React, { useState } from 'react';

import {
  Container,
  InpuContainer,
  LogoContainer,
  Menu,
  HamburguerContainer,
  LoginLogout,
  SearchButton,
  LogoIconContainer,
  SearchButtonContainer,
} from './styles';
import LogoIcon from '../../assets/LogoIcon.png';
import Logo from '../../assets/Logo2.png';
import { SearchInput } from '../SearchInput';
import { HamburguerButton } from '../HamburguerButton';
import { useSideDrawer } from '../context/SideDrawerContext';
import { useSearchSideDrawer } from '../context/SearchSideDrawerContext';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { isOpen, setIsOpen } = useSideDrawer();
  const { searchIsOpen, setSearchIsOpen } = useSearchSideDrawer();

  return (
    <Container data-test="container">
      <HamburguerContainer data-test="hamburguer-button">
        <HamburguerButton open={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </HamburguerContainer>

      <LogoContainer data-test="logo">
        <img src={Logo} alt="Logo" />
      </LogoContainer>

      <LogoIconContainer data-test="logo-icon">
        <img src={LogoIcon} alt="Logo" />
      </LogoIconContainer>

      <Menu data-test="menu">
        <Link to="/">
          <li>Home</li>
        </Link>

        <li>animes</li>
        <li>Genres</li>
        <li>My list</li>
        <li>History</li>
      </Menu>

      <InpuContainer data-test="search-input">
        <SearchInput />
      </InpuContainer>

      <LoginLogout data-test="login-logout">
        <Link to="/login">
          <li>Login</li>
        </Link>

        <li>Logout</li>
      </LoginLogout>

      <SearchButtonContainer
        data-test="search-button"
        onClick={() => setSearchIsOpen(!searchIsOpen)}
      >
        <SearchButton />
      </SearchButtonContainer>
    </Container>
  );
};

export default Navbar;
