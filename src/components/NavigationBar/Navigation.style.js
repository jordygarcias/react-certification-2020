import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import styled from 'styled-components';

export const BottomBar = styled(BottomNavigation)`
  && {
    position: fixed;
    bottom: 0px;
    background: ${({ theme }) => theme.navigationBarBackground};
    width: 100%;
    z-index: 2;
  }
`;

export const BottomBarAction = styled(BottomNavigationAction)`
  && {
    color: ${({ theme }) => theme.navigationBarColor};
  }
`;
