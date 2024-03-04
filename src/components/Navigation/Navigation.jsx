import UserMenu from 'components/UserMenu/UserMenu';
import { StyledNav, StyledUl, StyledLi, StyledLink } from './NavigationStyles';

const Navigation = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          <StyledLink to="/register">📝 Register</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/login">🔑 Login</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/contacts">📞 Contacts</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/user">👤 User</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;
