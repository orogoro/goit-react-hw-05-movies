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
