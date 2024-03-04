import { useSelector } from 'react-redux';
import { StyledNav, StyledUl, StyledLi, StyledLink } from './NavigationStyles';

const Navigation = () => {
  const token = useSelector(state => state.token);

  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/register">📝 Register</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/login">🔑 Login</StyledLink>
        </StyledLi>

        {token && (
          <>
            <StyledLi>
              <StyledLink to="/contacts">📞 Contacts</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/user">👤 User</StyledLink>
            </StyledLi>
          </>
        )}
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;
