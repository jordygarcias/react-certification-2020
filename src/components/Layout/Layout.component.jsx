import React from 'react';
import MyThemeProvider from '../../providers/Theme';
import { GlobalStyles } from '../Theme/globalStyles';
import MainAppBar from '../AppBar';

const Layout = () => {
  return (
    <MyThemeProvider>
      <>
        <GlobalStyles />
        <MainAppBar />
      </>
    </MyThemeProvider>
  );
};

export default Layout;
