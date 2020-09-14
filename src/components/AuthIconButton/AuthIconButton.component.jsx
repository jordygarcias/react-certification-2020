import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useAuth } from '../../providers/Auth';

const AuthIconButton = () => {
  const { authenticated } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleMenu}>
        <AccountCircle style={{ color: '#fff' }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        onClose={handleClose}
        keepMounted
        open={open}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {!authenticated && <MenuItem>Sign in</MenuItem>}
        {authenticated && <MenuItem>Sign out</MenuItem>}
      </Menu>
    </>
  );
};

export default AuthIconButton;
