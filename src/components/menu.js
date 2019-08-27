// import React from "react";
// import { Nav, NavItem, NavLink } from "shards-react";

// export default function Menu() {
//   return (
//     <Nav className="nav-container">
//       <NavItem>
//         <NavLink active href="#">
//           Home
//         </NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink href="#">Dashboard</NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink href="#">Sign In</NavLink>
//       </NavItem>
//     </Nav>
//   );
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              <NavLink to="/login" active href="login">
                Dashboard
              </NavLink>
            </NavItem>

            <Dropdown
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle nav caret>
                Hello User!
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Your Posts</DropdownItem>
                <DropdownItem>Edit Profile</DropdownItem>
                <DropdownItem>Sign Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Collapse> 
      </Navbar>
    );
  }
}
