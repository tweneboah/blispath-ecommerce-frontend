import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/actions/userAction';
import logo from '../images/logo.jpeg';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

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
        className='navbarcontainer w-nav'>
        <div className='w-container'>
          <a href='#' className='logobranddiv w-nav-brand'>
            {/* <img src={logo} style={{ height: '10px' }} alt='' /> */}

            <span class='inline-block relative'>
              <img class='h-16 w-16 rounded-full' src={logo} alt='' />
            </span>
          </a>
          <nav role='navigation' className='nav-menu w-nav-menu'>
            <Link to='/'>
              <a className='navlinkitem w-nav-link'>Home</a>
            </Link>
            <Link to='/login'>
              <a className='navlinkitem w-nav-link'>Login</a>
            </Link>

            <Link to='/' className='navlinkitem w-nav-link'>
              contact
            </Link>

            <Link to='/' className='navlinkitem w-nav-link'>
              Products
            </Link>
            <div data-hover='' data-delay='0' className='w-dropdown'>
              <div className='w-dropdown-toggle'>
                <div className='dropdownicon w-icon-dropdown-toggle'></div>
                <div className='dropdownlink'>Categories</div>
              </div>
              <nav className='w-dropdown-list'>
                <Link
                  href='#'
                  className='dropdownlinkitem navlinkitem w-dropdown-link'>
                  Link 1
                </Link>
                <a
                  href='#'
                  className='dropdownlinkitem navlinkitem w-dropdown-link'>
                  Link 2
                </a>
                <a
                  href='#'
                  className='dropdownlinkitem navlinkitem w-dropdown-link'>
                  Link 3
                </a>
              </nav>
            </div>
            <a href='#' className='navlinkitem w-nav-link'>
              About
            </a>
            <a href='#' className='navlinkitem w-nav-link'>
              Contact
            </a>
          </nav>
          <div className='w-nav-button'>
            <div className='hamburgericon w-icon-nav-menu'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
