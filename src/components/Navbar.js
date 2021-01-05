import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/actions/userAction';
import logo from '../images/global.png';
import '../styles/Navbar.css';

const Header = () => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
  };
  const [openProductMenu, setOpenProductMenu] = useState(false);

  const openProductMenuHandler = () => {
    setOpenProductMenu(!openProductMenu);
  };
  const [togle, settogle] = useState(false);
  const [openMobileMenu, setopenMobileMenu] = useState(true);
  return (
    <>
      <div
        data-collapse='medium'
        data-animation='over-right'
        data-duration='400'
        data-doc-height='1'
        role='banner'
        class='navbarcontainer w-nav'>
        <div class='w-container'>
          <a href='#' class='logobranddiv w-nav-brand'>
            <img src={logo} style={{ height: '10px' }} alt='' />
          </a>
          <nav role='navigation' class='nav-menu w-nav-menu'>
            <a href='#' class='navlinkitem w-nav-link'>
              Home
            </a>
            <div data-hover='' data-delay='0' class='w-dropdown'>
              <div class='w-dropdown-toggle'>
                <div class='dropdownicon w-icon-dropdown-toggle'></div>
                <div class='dropdownlink'>Dropdown</div>
              </div>
              <nav class='w-dropdown-list'>
                <a
                  href='#'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  Link 1
                </a>
                <a
                  href='#'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  Link 2
                </a>
                <a
                  href='#'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  Link 3
                </a>
              </nav>
            </div>
            <a href='#' class='navlinkitem w-nav-link'>
              About
            </a>
            <a href='#' class='navlinkitem w-nav-link'>
              Contact
            </a>
          </nav>
          <div class='w-nav-button'>
            <div class='hamburgericon w-icon-nav-menu'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
