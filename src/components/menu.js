import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse
} from "shards-react";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (
      <Navbar sticky="true" type="dark" className="navbar" expand="md">
        <NavbarBrand href="/">Design Your Life</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/dashboard" active href="dashboard">
                <NavLink>Dashboard</NavLink>
              </Link>
            </NavItem>

            <Dropdown
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle nav caret>
                Hello
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/activity">Your Activity</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/add-activity">New Activity</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/reflection">Your Reflections</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="add-reflection">New Reflections</Link>
                </DropdownItem>

                <DropdownItem>
                  <Link to="/login">Login/Logout</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/register">Register</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
