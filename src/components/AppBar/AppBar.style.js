import styled from 'styled-components';
import { AppBar } from '@material-ui/core';

export default styled(AppBar)`
  && {
    background-color: ${({ theme }) => theme.primaryColor};
    z-index: 1201;

    & .toolbar {
      justify-content: flex-end;
    }

    & .icon-container {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
    }

    & .icon {
      width: 45px;
      object-fit: contain;
    }
  }
`;
