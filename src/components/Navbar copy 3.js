import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/actions/userAction';
import logo from '../images/logo.jpeg';

import { Link } from 'react-router-dom';

const Header = () => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  //================================================================
  //GET CARTS IN Store
  //================================================================

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <div
        data-collapse='medium'
        data-animation='over-right'
        data-duration='400'
        role='banner'
        class='mainnavbarcontainer w-nav'>
        <div className='menuitemscontainer w-container'>
          <img src={logo} loading='lazy' width='90' alt='' className='image' />

          <nav role='navigation' className='navmenucontainer w-nav-menu'>
            <a href='/' className='navlinkitem w-nav-link cursor-pointer'>
              Home
            </a>
            <a to='/about' className='navlinkitem w-nav-link'>
              About
            </a>
            <a to='/contact' className='navlinkitem w-nav-link'>
              Contact
            </a>
            <a href='#' className='navlinkitem w-nav-link'>
              Products
            </a>
            <div
              data-hover='1'
              data-delay='0'
              className='categorydropdown w-dropdown'>
              <div className='dropdowntoggle w-dropdown-toggle'>
                <div className='w-icon-dropdown-toggle'></div>
                <div>Categories</div>
              </div>
              <nav className='categorydropdownlistcontainer w-dropdown-list'>
                <a
                  href='#'
                  className='maincategorydropdownitem w-dropdown-link'>
                  Electronics
                </a>
                <a
                  href='#'
                  className='maincategorydropdownitem w-dropdown-link'>
                  Auto Parts
                </a>
                <div
                  data-hover=''
                  data-delay='0'
                  className='subcategorydropdowncontainer w-dropdown'>
                  <div className='subcategorydropdiwn w-dropdown-toggle'>
                    <div className='icon w-icon-dropdown-toggle'></div>
                    <div className='text-block'>subCategory</div>
                  </div>
                  <nav className='w-dropdown-list'>
                    <a
                      href='#'
                      className='subcategorydropdownitem w-dropdown-link'>
                      Gents
                    </a>
                    <a href='#' className='dropdown-link w-dropdown-link'>
                      Ladies
                    </a>
                  </nav>
                </div>
              </nav>
            </div>

            {!userInfo ? (
              <>
                <a href='#' className='navlinkitem w-nav-link'>
                  <Link to='/login'> Login</Link>
                </a>
                <a href='/register' className='navlinkitem w-nav-link'>
                  Register
                </a>
              </>
            ) : (
              <>
                <a href='/register' className='navlinkitem w-nav-link'>
                  <span class='inline-block relative mr-1 '>
                    <svg
                      class='h-6 text-yellow-900'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                    </svg>

                    <div class='absolute top-0 -mt-3 rounded-full -px-5 font-semibold right-0 text-lg text-red-900  text-center'>
                      {cartItems?.length}
                    </div>
                  </span>
                </a>

                <a
                  href='/'
                  className='navlinkitem w-nav-link'
                  onClick={() => logoutHandler()}>
                  Logout
                </a>
              </>
            )}

            {userInfo && (
              <div data-hover='1' data-delay='0' className='w-dropdown'>
                <div className='accountdropdown w-dropdown-toggle'>
                  <div className='w-icon-dropdown-toggle'></div>
                  <div>
                    <span class='inline-block relative'>
                      {/* Dashboard avatar */}
                      <svg
                        className='h-8 w-8 rounded-full bg-gray-400'
                        fill='currentColor'
                        viewBox='0 0 24 24'>
                        <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                      </svg>
                      <span class='absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400'></span>
                    </span>
                  </div>
                </div>
                <nav className='w-dropdown-list'>
                  <a
                    href='#'
                    className='maincategorydropdownitem w-dropdown-link'>
                    My Orders
                  </a>
                  <a
                    href='#'
                    className='maincategorydropdownitem w-dropdown-link'>
                    Update Profile
                  </a>
                  {userInfo && userInfo.isAdmin && (
                    <>
                      <a
                        href='#'
                        className='maincategorydropdownitem w-dropdown-link'>
                        All Orders
                      </a>
                      {/* <Link
                        to={`/dashboard`}
                        class='dropdownlinkitem navlinkitem w-dropdown-link'>
                        Graphical View
                      </Link> */}

                      <a
                        href='#'
                        className='maincategorydropdownitem w-dropdown-link'>
                        Add New Product
                      </a>

                      <a
                        href='#'
                        className='maincategorydropdownitem w-dropdown-link'>
                        All Products
                      </a>

                      <a
                        href='#'
                        className='maincategorydropdownitem w-dropdown-link'>
                        View All Payments
                      </a>
                    </>
                  )}
                </nav>
              </div>
            )}
          </nav>
          <div className='munu menubutton w-nav-button'>
            <div className='icon-2 w-icon-nav-menu'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
