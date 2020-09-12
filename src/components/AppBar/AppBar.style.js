import styled from 'styled-components';
import { AppBar } from '@material-ui/core';

export default styled(AppBar)`
  && {
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;
