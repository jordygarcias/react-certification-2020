/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';
import { useTheme } from '../../providers/Theme';
import { LIGHT_THEME } from '../../utils/constants';

import './Auth.styles.css';

const SignInButton = styled.button`
  width: 150px;
  height: 50px;
  background: ${({ theme }) => theme.primaryColor};
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin: 0 auto;
  margin-top: 15px;
  border-radius: 10px;
  border: none;
  outline: none;
`;

const AuthFormLogoContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 60px;
  margin: 0 calc(45% - 125px);
  margin-top: -85px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: ${({ theme }) => theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;

  && img {
    width: 180px;
    object-fit: contain;
  }
`;

const lightLogo = '/full_logo_light.png';
const darkLogo = '/full_logo_dark.png';

const AuthPage = () => {
  const { login } = useAuth();
  const { theme } = useTheme();
  const logoSrc = theme === LIGHT_THEME ? lightLogo : darkLogo;

  const attemptSignIn = (e) => {
    const username = e.target.username.value;
    const password = e.target.password.value;
    login(username, password);
    e.preventDefault();
  };

  return (
    <section className="auth-section">
      <form data-testid="auth-form" onSubmit={attemptSignIn} className="auth-form">
        <AuthFormLogoContainer>
          <img src={logoSrc} alt="WizeTube" />
        </AuthFormLogoContainer>
        <section className="auth-form-control">
          <label htmlFor="username">Username</label>
          <input name="username" id="username" type="text" />
        </section>
        <section className="auth-form-control">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" id="password" />
        </section>
        <SignInButton>Sign in</SignInButton>
      </form>
    </section>
  );
};

export default AuthPage;
