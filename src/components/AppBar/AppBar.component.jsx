import React from 'react';
import { Toolbar } from '@material-ui/core';
import AuthIconButton from '../AuthIconButton';
import AppBar from './AppBar.style';
import { LIGHT_THEME } from '../../utils/constants';
import DarkModeButton from '../DarkModeButton';
import { useTheme } from '../../providers/Theme';

const lightLogo = '/Light_logo.png';
const darkLogo = '/Dark_logo.png';

const MainAppBar = () => {
  const { theme } = useTheme();
  const logoSrc = theme === LIGHT_THEME ? lightLogo : darkLogo;

  return (
    <AppBar>
      <Toolbar className="toolbar">
        <div className="icon-container">
          <img className="icon" src={logoSrc} alt="wizetube logo" />
        </div>
        <DarkModeButton />
        <AuthIconButton />
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
