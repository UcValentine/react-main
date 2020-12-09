import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/profile' activeStyle>
            Profile
          </NavLink>
          <NavLink to='/login' activeStyle>
            Login
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
