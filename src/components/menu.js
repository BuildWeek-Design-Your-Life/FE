import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

export default function Menu() {
  return (
    <Nav className="nav-container">
      <NavItem>
        <NavLink active href="#">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Dashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Sign In</NavLink>
      </NavItem>
    </Nav>
  );
}
