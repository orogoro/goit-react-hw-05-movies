import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin-left: 20px;
  color: black;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;
