import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, StyledLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
      <Outlet />
    </Nav>
  );
}
