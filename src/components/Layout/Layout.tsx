import React from 'react';

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
    <Grid>
      <SideDrawerProvider>
        <SearchSideDrawerProvider>
          <Navbar />
          <SideDrawer />
          <SearchSideDrawer />
        </SearchSideDrawerProvider>
      </SideDrawerProvider>

      <Main>
        <div style={{ width: '90%', height: '200px' }}></div>
        <div style={{ width: '90%', height: '200px' }}></div>
        <div style={{ width: '90%', height: '200px' }}></div>
        <div style={{ width: '90%', height: '200px' }}></div>
        <div style={{ width: '90%', height: '200px' }}></div>
        <div style={{ width: '90%', height: '200px' }}></div>
      </Main>
      <Sidebar />
      <Footer />
    </Grid>
  );
};

export default Layout;
