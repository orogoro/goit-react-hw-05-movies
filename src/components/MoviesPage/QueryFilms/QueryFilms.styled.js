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
  margin-top: 10px;
`;
export const Li = styled.li`
  padding: 5px;
  font-weight: 600;
`;
