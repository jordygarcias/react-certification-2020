import React from 'react';
import { CssBaseline } from '@material-ui/core';
import MyThemeProvider from '../../providers/Theme';
import { GlobalStyles } from '../Theme/globalStyles';
import MainAppBar from '../AppBar';
import NavigationBar from '../NavigationBar';

const Layout = ({ children }) => {
  return (
    <MyThemeProvider>
      <>
        <CssBaseline />
        <GlobalStyles />
        <MainAppBar />
        <div className="mainContent">{children}</div>
        <NavigationBar />
      </>
    </MyThemeProvider>
  );
};

export default Layout;
