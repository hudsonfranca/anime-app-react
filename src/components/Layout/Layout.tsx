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

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Grid>
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
      </Grid>
    </BrowserRouter>
  );
};

export default Layout;
