import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useAuth } from '../../providers/Auth';

const AuthIconButton = () => {
  const { authenticated } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuth();
  const history = useHistory();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  const handleLogin = () => {
    history.push('/auth');
    handleClose();
  };

  return (
    <>
      <IconButton data-testid="authicon-btn" onClick={handleMenu}>
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
        {!authenticated && <MenuItem onClick={handleLogin}>Sign in</MenuItem>}
        {authenticated && <MenuItem onClick={handleLogout}>Sign out</MenuItem>}
      </Menu>
    </>
  );
};

export default AuthIconButton;
