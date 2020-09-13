import React from 'react';
import { Toolbar, makeStyles } from '@material-ui/core';
import AuthIconButton from '../AuthIconButton';
import AppBar from './AppBar.style';
import { LIGHT_THEME } from '../../utils/constants';
import DarkModeButton from '../DarkModeButton';
import { useTheme } from '../../providers/Theme';

const lightLogo = '/Light_logo.png';
const darkLogo = '/Dark_logo.png';

const useStyles = makeStyles(() => ({
  iconContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
  },
  icon: {
    width: 45,
    objectFit: 'contain',
  },
  toolbar: {
    justifyContent: 'flex-end',
  },
}));

const MainAppBar = () => {
  const classes = useStyles();
  const { theme } = useTheme();
  const logoSrc = theme === LIGHT_THEME ? lightLogo : darkLogo;

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.iconContainer}>
          <img className={classes.icon} src={logoSrc} alt="wizetube logo" />
        </div>
        <DarkModeButton />
        <AuthIconButton />
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
