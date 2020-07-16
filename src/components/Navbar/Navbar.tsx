import React, { useState, useEffect } from 'react';

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
  Button,
} from './styles';
import LogoIcon from '../../assets/LogoIcon.png';
import Logo from '../../assets/Logo2.png';
import { SearchInput } from '../SearchInput';
import { HamburguerButton } from '../HamburguerButton';
import { useSideDrawer } from '../context/SideDrawerContext';
import { useSearchSideDrawer } from '../context/SearchSideDrawerContext';
import { Link } from 'react-router-dom';
import { useLogin } from '../../pages/context/LoginContext';

const Navbar: React.FC = () => {
  const { isOpen, setIsOpen } = useSideDrawer();
  const { searchIsOpen, setSearchIsOpen } = useSearchSideDrawer();
  const { isAuthenticated, setIsAuthenticated } = useLogin();

  return (
    <Container data-test="containerNavbar">
      <HamburguerContainer data-test="hamburguer-button">
        <HamburguerButton open={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </HamburguerContainer>

      <LogoContainer data-test="logo">
        <img src={Logo} alt="Logo" />
      </LogoContainer>

      <LogoIconContainer data-test="logoIcon">
        <img src={LogoIcon} alt="Logo" />
      </LogoIconContainer>

      <Menu data-test="menu">
        <Link to="/">
          <li>Home</li>
        </Link>

        <li>animes</li>
        <li>Genres</li>
        <Link to="/my-list">
          <li>My list</li>
        </Link>
        <li>
          <Link to="/history">History</Link>
        </li>
      </Menu>

      <InpuContainer data-test="search-input">
        <SearchInput />
      </InpuContainer>

      <LoginLogout data-test="login-logout">
        {isAuthenticated ? (
          <li>
            <Button
              onClick={() => {
                localStorage.removeItem('authentication');
                setIsAuthenticated(false);
              }}
            >
              Logout
            </Button>
          </li>
        ) : (
          <Link to="/login">
            <li>Sign In</li>
          </Link>
        )}
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
