import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Nav, StyledLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
      <Toaster />
    </Nav>
  );
}
