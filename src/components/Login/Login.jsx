import React, { useState } from 'react';
import {
  StyledLoginContainer,
  StyledLoginForm,
  StyledLoginTitle,
  StyledLoginLabel,
  StyledLoginInput,
  StyledLoginButton,
} from './LoginStyles';

const Login = () => {
  return (
    <StyledLoginContainer>
      <StyledLoginForm>
        <StyledLoginTitle>Login</StyledLoginTitle>
        <form>
          <StyledLoginLabel htmlFor="email">Email:</StyledLoginLabel>
          <StyledLoginInput type="email" id="email" name="email" required />

          <StyledLoginLabel htmlFor="password">Password:</StyledLoginLabel>
          <StyledLoginInput
            type="password"
            id="password"
            name="password"
            required
          />

          <StyledLoginButton type="submit">Login</StyledLoginButton>
        </form>
      </StyledLoginForm>
    </StyledLoginContainer>
  );
};

export default Login;
