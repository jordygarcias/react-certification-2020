import React from 'react';
import MyThemeProvider from '../../providers/Theme';
import { GlobalStyles } from '../Theme/globalStyles';
import MainAppBar from '../AppBar';
import NavigationBar from '../NavigationBar';
import { useAuth } from '../../providers/Auth';

const Layout = ({ children }) => {
  const { authenticated } = useAuth();

  return (
    <MyThemeProvider>
      <>
        <GlobalStyles />
        <MainAppBar />
        <div className="mainContent">{children}</div>
        {authenticated && <NavigationBar />}
      </>
    </MyThemeProvider>
  );
};

export default Layout;
