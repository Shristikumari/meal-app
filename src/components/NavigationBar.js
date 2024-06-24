import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover {
    color: #ddd;
  }
`;

function NavigationBar() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/menu">Menu</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/favorites">My Favorites</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/meal-generator">Random Meal</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about-me">About Me</StyledLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default NavigationBar;
