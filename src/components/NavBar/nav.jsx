import { React, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./nav.css";
// import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assests/Triyas_Web.png";
import data from "./data.json";

function NavBar() {
  const [show, setShow] = useState(false);

  const navItems = [
    // {
    //   name: "Home",
    //   path: "/home",
    //   id: "home",
    // },
    // {
    //   name: "About",
    //   path: "/about",
    //   id: "about",
    // },
    {
      name: "Products",
      path: "#",
      id: "products",
      isDropdown: true,
    },
    {
      name: "Services",
      path: "#",
      id: "services",
      isDropdown: true,
    },
    {
      name: "Resources",
      path: "#",
      id: "resources",
      isDropdown: true,
    },
    // {
    //   name: "Services",
    //   path: "/services",
    //   id: "services",
    //   isDropdown: false,
    // },
    // {
    //   name: "Contact",
    //   path: "/contact",
    //   id: "contact",
    //   isDropdown: false,
    // },
  ];
  const mouseLeft = (e) => {
    console.log("Left");
  };
  const mouseEntered = (e) => {
    console.log("Entered");
  };

  return (
    <Navbar expand="md" className="navcolor" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              // className="d-inline-block align-top"
              className="navbrnd"
            />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navLink">
            {navItems.map((item) => {
              return (
                <span>
                  {item.isDropdown ? (
                    <span>
                      <NavDropdown
                        title={item.name}
                        id="basic-nav-dropdown"
                        // renderMenuOnMount={true}
                        onMouseEnter={() => mouseEntered()}
                        onMouseLeave={() => mouseLeft()}
                      >
                        {data[item.id].map((cat) => {
                          return (
                            // <NavDropdown.Item>
                            <DropdownButton
                              key={item.id}
                              id={`dropdown-button-drop-end`}
                              drop="end"
                              // variant="secondary"
                              title={` ${cat.name} `}
                              // renderMenuOnMount={true}
                            >
                              {cat.categories.map((subcat) => {
                                return (
                                  <Link className="subcatLink" to={subcat.link}>
                                    <Dropdown.Item
                                      // eventKey="1"
                                      // target="_blank"
                                      href={subcat.link}
                                    >
                                      {subcat.name}
                                      {/* <NavDropdown.Divider /> */}
                                    </Dropdown.Item>
                                  </Link>
                                );
                              })}
                            </DropdownButton>
                            // </NavDropdown.Item>
                          );
                        })}
                      </NavDropdown>
                    </span>
                  ) : (
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "red" : "",
                        };
                      }}
                      className="list_item"
                      // to={item.path}
                    >
                      <HashLink to={`/#${item.id}`} smooth>
                        {item.name}
                      </HashLink>
                    </NavLink>
                  )}
                </span>
              );
            })}
          </Nav>
          <NavLink>
            <HashLink to={`/#contact`} smooth>
              Contact
            </HashLink>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
