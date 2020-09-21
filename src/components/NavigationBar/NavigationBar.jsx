import {
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';

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

const DrawerStyled = styled(Drawer)`
  & > div {
    background: ${({ theme }) => theme.navigationBarBackground};
  }
`;

const ListStyled = styled(List)`
  width: 60px;
  padding-top: 70px;
`;

const ListItemStyled = styled(ListItem)`
  margin-bottom: 10px;
  & > div {
    color: ${({ theme }) => theme.navigationBarColor} !important;
  }
`;

const NavigationBar = () => {
  const { authenticated } = useAuth();

  return (
    <>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <BottomBar showLabels>
          <BottomBarAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
          {authenticated && (
            <BottomBarAction
              component={Link}
              to="/favorites"
              label="Favorites"
              icon={<FavoriteIcon />}
            />
          )}
        </BottomBar>
      </Hidden>
      <Hidden only={['xs']}>
        <DrawerStyled variant="permanent">
          <ListStyled>
            <ListItemStyled component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
            </ListItemStyled>
            {authenticated && (
              <ListItemStyled component={Link} to="/favorites">
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
              </ListItemStyled>
            )}
          </ListStyled>
        </DrawerStyled>
      </Hidden>
    </>
  );
};

export default NavigationBar;
