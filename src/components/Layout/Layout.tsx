import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes';

import { Grid } from './styles';
import { Navbar } from '../Navbar';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { SideDrawer } from '../SideDrawer';
import { SearchSideDrawer } from '../SearchSideDrawer';
import SideDrawerProvider from '../context/SideDrawerContext';
import SearchSideDrawerProvider from '../context/SearchSideDrawerContext';
import LoginContextProvider from '../../pages/context/LoginContext';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Grid>
        <LoginContextProvider>
          <SideDrawerProvider>
            <SearchSideDrawerProvider>
              <Navbar />
              <SideDrawer />
              <SearchSideDrawer />
            </SearchSideDrawerProvider>
          </SideDrawerProvider>

          <Main>
            <Routes />
          </Main>
          <Sidebar />
          <Footer />
        </LoginContextProvider>
      </Grid>
    </BrowserRouter>
  );
};

export default Layout;
