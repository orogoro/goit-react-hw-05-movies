import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyleLink = styled.button`
  padding: 5px;
  text-decoration: none;
  border-radius: 3px;
  border: none;
  color: #ffff;
  background-color: #fa6464;
  cursor: pointer;

  &:hover {
    background-color: #ff4747;
  }
`;

export const Main = styled.main`
  margin-top: 13px;
  margin-left: 10px;
`;

export const NavLinkStyle = styled(NavLink)`
  color: #000;
  font-weight: 500;

  &.active {
    color: tomato;
  }
`;

export const Div = styled.div`
  margin-left: 20px;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  & + & {
    margin-top: 10px;
  }
`;

export const P = styled.p`
  font-weight: 700;
`;
