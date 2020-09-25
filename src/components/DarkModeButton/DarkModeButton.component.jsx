import React from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { IconButton } from '@material-ui/core';
import { LIGHT_THEME } from '../../utils/constants';
import { useTheme } from '../../providers/Theme';

const DarkModeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton data-testid="darkmode-btn" onClick={toggleTheme}>
      {theme === LIGHT_THEME ? (
        <Brightness4Icon style={{ color: '#fff' }} />
      ) : (
        <Brightness7Icon style={{ color: '#fff' }} />
      )}
    </IconButton>
  );
};

export default DarkModeButton;
