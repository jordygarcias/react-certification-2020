import { BottomNavigation, BottomNavigationAction, Hidden } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BottomBar = styled(BottomNavigation)`
  && {
    position: fixed;
    bottom: 0px;
    background: ${({ theme }) => theme.navigationBarBackground};
    width: 100%;
    z-index: 2;
  }
`;

const BottomBarAction = styled(BottomNavigationAction)`
  && {
    color: ${({ theme }) => theme.navigationBarColor};
  }
`;

const NavigationBar = () => {
  return (
    <Hidden only={['sm', 'md', 'lg', 'xl']}>
      <BottomBar showLabels>
        <BottomBarAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
        <BottomBarAction
          component={Link}
          to="/favorites"
          label="Favorites"
          icon={<FavoriteIcon />}
        />
      </BottomBar>
    </Hidden>
  );
};

export default NavigationBar;
