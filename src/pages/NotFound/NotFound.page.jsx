import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundSection = styled.section`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
  padding: 0px 20px;
  text-align: center;

  a {
    color: ${({ theme }) => theme.textColor};
  }

  && img {
    width: 80%;
    object-fit: contain;
  }
`;

function NotFoundPage() {
  return (
    <NotFoundSection>
      <img src="not_found.svg" alt="page not found" />
      <h1>Could not found what you were looking for</h1>
      <Link to="/">Go Home</Link>
    </NotFoundSection>
  );
}

export default NotFoundPage;
