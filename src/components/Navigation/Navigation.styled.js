import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin-left: 15px;
  color: black;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;

export const Nav = styled.nav`
  font-size: 20px;
  font-weight: 600;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
`;
