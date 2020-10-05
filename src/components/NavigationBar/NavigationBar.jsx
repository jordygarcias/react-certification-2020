import { Hidden, ListItemIcon } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { BottomBar, BottomBarAction } from './Navigation.style';
import { DrawerStyled } from './Drawer.style';
import { ListStyled, ListItemStyled } from './List.style';

const NavigationBar = () => {
  const { authenticated } = useAuth();

  return (
    <>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <BottomBar showLabels>
          <BottomBarAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
          {authenticated && (
            <BottomBarAction
              data-testid="favorites-link"
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
              <ListItemStyled
                data-testid="favorites-link"
                component={Link}
                to="/favorites"
              >
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
