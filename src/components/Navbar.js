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

  return (
    <>
      <div
        data-collapse='medium'
        data-animation='over-right'
        data-duration='400'
        data-doc-height='1'
        role='banner'
        class='navbarcontainer w-nav'>
        <div class='navbar_items_container w-container'>
          <Link to='/' class='logobranddiv w-nav-brand'>
            <img src={logo} loading='lazy' width='90' sizes='90px' alt='' />
          </Link>
          <nav role='navigation' class='nav-menu w-nav-menu'>
            <Link to='/' class='navlinkitem w-nav-link'>
              <div className='text-white'>Home</div>
            </Link>
            <Link to='/about' class='navlinkitem w-nav-link'>
              About
            </Link>
            <Link to='/team' class='navlinkitem w-nav-link'>
              Our Team
            </Link>
            <Link to='/contact' class='navlinkitem w-nav-link '>
              <div className='text-white'>Contact</div>
            </Link>
            <Link to='/contact' class='navlinkitem w-nav-link '>
              <div className='text-white'>Products</div>
            </Link>

            <div data-hover='1' data-delay='0' class='w-dropdown'>
              <div class='w-dropdown-toggle'>
                <div class='dropdownicon w-icon-dropdown-toggle'></div>
                <div class='dropdownlink'>Categories</div>
              </div>
              <nav class='w-dropdown-list'>
                <Link
                  to='/gents'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Gents</div>
                </Link>
                <Link
                  to='/auto-parts'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Auto Parts</div>
                </Link>
                <Link
                  to='/fashions'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Fashions</div>
                </Link>
                <Link
                  to='/hot-deals'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Hot Deals</div>
                </Link>

                <Link
                  to='/phones-accessories'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Phone Accessories</div>
                </Link>
                <Link
                  to='/laptops-accessories'
                  class='dropdownlinkitem navlinkitem w-dropdown-link'>
                  <div className='text-white'>Laptops Accessories</div>
                </Link>
              </nav>
            </div>
            {!userInfo ? (
              <>
                {' '}
                <Link to='/login' class='login_button w-button'>
                  <div className='text-white'>Login</div>
                </Link>
                <Link to='/register' class='register_button w-button'>
                  register
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => logoutHandler()}
                  class='register_button w-button'>
                  Logout
                </button>
              </>
            )}
            {userInfo && (
              <div data-hover='1' data-delay='0' class='w-dropdown'>
                <div class='w-dropdown-toggle'>
                  <div class='dropdownicon w-icon-dropdown-toggle'></div>
                  <div class='dropdownlink'>Dashboard</div>
                </div>
                <nav class='w-dropdown-list'>
                  <Link
                    to='/profile'
                    class='dropdownlinkitem navlinkitem w-dropdown-link'>
                    <div className='text-white'>Profile</div>
                  </Link>

                  <Link
                    to={`/editprofile/${userInfo._id}`}
                    class='dropdownlinkitem navlinkitem w-dropdown-link'>
                    Update Profile
                  </Link>
                  {userInfo && userInfo.isAdmin && (
                    <>
                      <Link
                        to='/admin/allorders'
                        class='dropdownlinkitem navlinkitem w-dropdown-link'>
                        All Orders
                      </Link>
                      <Link
                        to={`/dashboard`}
                        class='dropdownlinkitem navlinkitem w-dropdown-link'>
                        Graphical View
                      </Link>
                      <Link
                        to='/admin/createproducts'
                        class='dropdownlinkitem navlinkitem w-dropdown-link'>
                        Add New Product
                      </Link>

                      <Link
                        to='/admin/fetchproducts'
                        class='dropdownlinkitem navlinkitem w-dropdown-link'>
                        All Products
                      </Link>
                      <Link
                        to='/admin/allpayments'
                        class='dropdownlinkitem navlinkitem w-dropdown-link'>
                        View All Payments
                      </Link>
                    </>
                  )}
                </nav>
              </div>
            )}
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
