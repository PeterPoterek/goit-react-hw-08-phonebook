import {
  StyledRegisterContainer,
  StyledRegisterForm,
  StyledRegisterTitle,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './RegisterStyles.js';

const Register = () => {
  return (
    <StyledRegisterContainer>
      <StyledRegisterForm>
        <StyledRegisterTitle>Register</StyledRegisterTitle>
        <form>
          <StyledLabel htmlFor="name">Name:</StyledLabel>
          <StyledInput type="text" id="name" name="name" required />

          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput type="email" id="email" name="email" required />

          <StyledLabel htmlFor="password">Password:</StyledLabel>
          <StyledInput type="password" id="password" name="password" required />

          <StyledButton type="submit">Register</StyledButton>
        </form>
      </StyledRegisterForm>
    </StyledRegisterContainer>
  );
};

export default Register;
