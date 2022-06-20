import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: #6149fc;
  }
`;
export const Ul = styled.ul`
  list-style: none;
  margin: 0;
`;
export const Li = styled.li`
  margin-top: 5px;
  padding: 5px;
  font-weight: 600;
`;
export const H1 = styled.h1`
  margin-left: 10px;
`;
