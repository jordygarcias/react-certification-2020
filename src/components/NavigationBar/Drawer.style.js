import { Drawer } from '@material-ui/core';
import styled from 'styled-components';

export const DrawerStyled = styled(Drawer)`
  & > div {
    background: ${({ theme }) => theme.navigationBarBackground};
  }
`;
