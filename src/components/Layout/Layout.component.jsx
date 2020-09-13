import React from 'react';
import MyThemeProvider from '../../providers/Theme';
import { GlobalStyles } from '../Theme/globalStyles';
import MainAppBar from '../AppBar';

const Layout = ({ children }) => {
  return (
    <MyThemeProvider>
      <>
        <GlobalStyles />
        <MainAppBar />
        {children}
      </>
    </MyThemeProvider>
  );
};

export default Layout;
