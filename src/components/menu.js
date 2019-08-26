import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";
import {Link} from 'react-dom'

export default function Menu() {
  return (
    <Nav justified className="nav-container">
      <NavItem>
        <NavLink active href="#">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Dashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/login" href="#">Sign In</NavLink>
      </NavItem>
    </Nav>
  );
}
