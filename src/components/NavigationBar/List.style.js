import { List, ListItem } from '@material-ui/core';
import styled from 'styled-components';

export const ListStyled = styled(List)`
  width: 60px;
  padding-top: 70px;
`;

export const ListItemStyled = styled(ListItem)`
  margin-bottom: 10px;
  & > div {
    color: ${({ theme }) => theme.navigationBarColor} !important;
  }
`;
