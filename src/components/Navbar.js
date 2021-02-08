import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { logoutAction } from '../redux/actions/userAction';
import logo from '../images/logon2.png';
import { fetchAllProductsAction } from '../redux/actions/productActions';

const Header = props => {
  const [openMobileMenu, setopenMobileMenu] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [openCategoryMenu, setOpenCategoryMenu] = useState(false);
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  //===============================================================
  //Fetch two products and place into the navbar
  //===============================================================

  const [productSearchTerm, setproductSearchTerm] = useState('');
  useEffect(() => {
    dispatch(fetchAllProductsAction(productSearchTerm));
  }, [dispatch, productSearchTerm]);

  const productList = useSelector(state => state.productList);
  //These are the state that are possible to be available
  const { loading, products, error } = productList;

  const displayTwoProducts = products.slice(0, 2);

  //================================================================
  //GET CARTS IN Store
  //================================================================

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logoutAction());
    props.history.push('/login');
  };

  const closeCategoryMenuIfNotClosed = () => {
    if (openCategoryMenu) {
      setOpenCategoryMenu(false);
    }
    return;
  };
  const closeMobileMenuIfNotClosed = () => {
    if (openMobileMenu) {
      setOpenProfileMenu(false);
    }
    return;
  };

  const truncateTitle = str => {
    if (str.length > 30) {
      return str.slice(0, 30) + '...';
    } else {
      return str;
    }
  };

  const truncateDescription = str => {
    if (str.length > 100) {
      return str.slice(0, 100) + '...';
    } else {
      return str;
    }
  };
  return (
    <>
      <nav className='bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <Link to='/' className='flex-shrink-0'>
                <img
                  className=' lg:block h-36 pt-1 pb-1  w-auto'
                  src={logo}
                  alt='Workflow'
                />
              </Link>
              <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <Link
                    onClick={() => [closeCategoryMenuIfNotClosed()]}
                    to='/'
                    className='bg-yellow-500 text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Home
                  </Link>
                  <Link
                    to='/about'
                    onClick={() => [closeCategoryMenuIfNotClosed()]}
                    className='text-gray-300 hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    About
                  </Link>
                  <Link
                    to='/contact'
                    onClick={() => [closeCategoryMenuIfNotClosed()]}
                    className='text-gray-300 hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Contact
                  </Link>
                  <Link
                    to='/products'
                    onClick={() => [closeCategoryMenuIfNotClosed()]}
                    className='text-gray-300 hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Products
                  </Link>
                  {/* Open Categories MENU it's at the bottom*/}
                  <Link
                    onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
                    to='#'
                    className='text-gray-300 hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Categories
                  </Link>
                </div>
              </div>
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex items-center'>
                {userInfo ? (
                  <>
                    <button
                      onClick={() => [
                        closeCategoryMenuIfNotClosed(),
                        logoutHandler(),
                      ]}
                      className='bg-yellow-800 py-2 px-3 mr-5 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Logout</span>
                      Logout
                    </button>
                    <span className='sr-only'>Cart Icon</span>
                    {/* Cart Icon */}
                    <Link to='/cart'>
                      <span
                        logoutHandler
                        className='inline-block relative text-gray-400 cursor-pointer'>
                        <svg
                          onClick={() => [closeCategoryMenuIfNotClosed()]}
                          className='h-7'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                          />
                        </svg>
                        <span className='absolute top-0 text-lg right-0 block h-5 w-5 -mt-4 text-yellow-400'>
                          {cartItems?.length}
                        </span>
                      </span>
                    </Link>
                    {/* <!-- Profile dropdown --> */}
                    <div className='ml-3 relative z-30'>
                      <div>
                        {/* Click this button to open profile dropdown*/}
                        <button
                          onClick={() => [
                            setOpenProfileMenu(!openProfileMenu),
                            closeCategoryMenuIfNotClosed(),
                          ]}
                          className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                          id='user-menu'
                          aria-haspopup='true'>
                          <span className='sr-only'>Open user menu</span>
                          {/* Account Avatar */}
                          <span className='inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100'>
                            <svg
                              className='h-full w-full text-gray-300'
                              fill='currentColor'
                              viewBox='0 0 24 24'>
                              <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                            </svg>
                            <span className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'></span>
                          </span>
                        </button>
                      </div>
                      {/* <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
                      <div
                        className={`${
                          openProfileMenu ? 'block' : 'hidden'
                        } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-200 ring-1 ring-black ring-opacity-5`}
                        role='menu'
                        aria-orientation='vertical'
                        aria-labelledby='user-menu'>
                        {userInfo && userInfo.isAdmin ? (
                          <>
                            {' '}
                            <Link
                              onClick={() =>
                                setOpenProfileMenu(!openProfileMenu)
                              }
                              to='/profile'
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              role='menuitem'>
                              My Orders
                            </Link>
                            <Link
                              onClick={() =>
                                setOpenProfileMenu(!openProfileMenu)
                              }
                              to={`/editprofile/${userInfo._id}`}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              role='menuitem'>
                              Update Profile
                            </Link>
                            <Link
                              onClick={() =>
                                setOpenProfileMenu(!openProfileMenu)
                              }
                              to='/admin/allorders'
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              role='menuitem'>
                              All Orders
                            </Link>
                            <Link
                              onClick={() =>
                                setOpenProfileMenu(!openProfileMenu)
                              }
                              to='/admin/createproducts'
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              role='menuitem'>
                              Add New Product
                            </Link>
                            <Link
                              onClick={() =>
                                setOpenProfileMenu(!openProfileMenu)
                              }
                              to='/admin/fetchproducts'
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              role='menuitem'>
                              All Products
                            </Link>
                            <Link
                              onClick={() =>
                                setOpenProfileMenu(!openProfileMenu)
                              }
                              to='/admin/allpayments'
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              role='menuitem'>
                              View All Payments
                            </Link>
                            <Link
                              to='/'
                              onClick={logoutHandler}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              role='menuitem'>
                              Sign out
                            </Link>
                          </>
                        ) : (
                          <>
                            {' '}
                            <Link
                              onClick={() =>
                                setOpenProfileMenu(!openProfileMenu)
                              }
                              to='/profile'
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              role='menuitem'>
                              My Orders
                            </Link>
                            <Link
                              onClick={() =>
                                setOpenProfileMenu(!openProfileMenu)
                              }
                              to={`/editprofile/${userInfo._id}`}
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              role='menuitem'>
                              Update Profile
                            </Link>
                            <a
                              onClick={logoutHandler}
                              href='#'
                              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              role='menuitem'>
                              Sign out
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      to='/register'
                      className='bg-gray-800 p-1 mr-5 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Register</span>
                      Register
                    </Link>
                    <Link
                      to='/login'
                      className='bg-gray-800 p-1 mr-5 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Login</span>
                      Login
                    </Link>
                    <span className='sr-only'>Cart Icon</span>
                    {/* Cart Icon */}
                    <Link to='/login'>
                      <span className='inline-block relative text-gray-400 cursor-pointer'>
                        <svg
                          className='h-7'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                          />
                        </svg>
                        <span className='absolute top-0 text-lg right-0 block h-5 w-5 -mt-4 text-yellow-400'>
                          0
                        </span>
                      </span>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className='-mr-2 flex sm:hidden'>
              {/* <!-- Mobile menu button --> */}
              <button
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  onClick={() => setopenMobileMenu(!openMobileMenu)}
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className='hidden h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!--
    Mobile menu, toggle classNamees based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
        <div className={`${openMobileMenu ? 'block' : 'hidden'} sm:hidden`}>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link
              to='/'
              onClick={() => setopenMobileMenu(!openMobileMenu)}
              className='bg-yellow-500 text-white block px-3 py-2 rounded-md text-base font-medium'>
              Home
            </Link>
            <Link
              to='/about'
              onClick={() => [
                setopenMobileMenu(!openMobileMenu),
                closeCategoryMenuIfNotClosed(),
              ]}
              className='text-gray-300 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              About
            </Link>

            <Link
              to='/contact'
              onClick={() => [
                setopenMobileMenu(!openMobileMenu),
                closeCategoryMenuIfNotClosed(),
              ]}
              className='text-gray-300 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Contact
            </Link>
            <Link
              to='/products'
              onClick={() => [
                setopenMobileMenu(!openMobileMenu),
                closeCategoryMenuIfNotClosed(),
              ]}
              className='text-gray-300 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Products
            </Link>

            <a
              onClick={() => [
                setOpenCategoryMenu(!openCategoryMenu),
                setopenMobileMenu(!openMobileMenu),
              ]}
              className='text-gray-300 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Categories
            </a>
            {!userInfo ? (
              <>
                {' '}
                <Link
                  to='/register'
                  onClick={() => [
                    setopenMobileMenu(!openMobileMenu),
                    closeCategoryMenuIfNotClosed(),
                  ]}
                  className='text-gray-300 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Register
                </Link>
                <Link
                  to='/login'
                  onClick={() => [
                    setopenMobileMenu(!openMobileMenu),
                    closeCategoryMenuIfNotClosed(),
                  ]}
                  className='text-gray-300 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Login
                </Link>
                <span className='sr-only'>Cart Icon</span>
                {/* Cart Icon */}
                <Link to='/login'>
                  <span className='inline-block relative text-gray-400 cursor-pointer mt-3 ml-3'>
                    <svg
                      className='h-7'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                    <span className='absolute top-0 text-lg right-0 block h-5 w-5 -mt-4 text-yellow-400'>
                      0
                    </span>
                  </span>
                </Link>
              </>
            ) : (
              <>
                {' '}
                <Link
                  onClick={() => [
                    setopenMobileMenu(!openMobileMenu),
                    closeCategoryMenuIfNotClosed(),
                    logoutHandler(),
                  ]}
                  className='text-gray-300 hover:bg-yellow-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Logout
                </Link>
                <span className='sr-only'>Cart Icon</span>
                {/* Cart Icon */}
                <Link to='/cart'>
                  <span className='inline-block relative text-gray-400 mt-3 ml-3 cursor-pointer'>
                    <svg
                      className='h-8'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                    <span className='absolute top-0 text-lg right-0 block h-5 w-5 -mt-4 text-yellow-400'>
                      {cartItems?.length}
                    </span>
                  </span>
                </Link>
                {/* Profile links */}
                <div className='pt-4 pb-3 border-t border-gray-700'>
                  <div className='flex items-center px-5'>
                    <div className='flex-shrink-0'>
                      <span class='inline-block relative'>
                        <svg
                          class='h-8 w-auto bg-gray-400 rounded-full text-gray-300'
                          fill='currentColor'
                          viewBox='0 0 24 24'>
                          <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                        </svg>
                        <span class='absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'></span>
                      </span>
                    </div>
                    <div className='ml-3'>
                      <div className='text-base font-medium text-white'>
                        {userInfo.name}
                      </div>
                      <div className='text-sm font-medium text-gray-400'>
                        {userInfo.email}
                      </div>
                    </div>
                  </div>
                  <div className='mt-3 px-2 space-y-1'>
                    {/* Display links for admin and normal users */}

                    {userInfo && userInfo.isAdmin ? (
                      <>
                        <Link
                          to='/profile'
                          onClick={() => [
                            setopenMobileMenu(!openMobileMenu),
                            closeCategoryMenuIfNotClosed(),
                          ]}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          My Orders
                        </Link>
                        <Link
                          onClick={() => [
                            closeCategoryMenuIfNotClosed(),
                            setopenMobileMenu(!openMobileMenu),
                          ]}
                          to={`/editprofile/${userInfo._id}`}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          Update Profile
                        </Link>
                        <Link
                          onClick={() => [
                            closeCategoryMenuIfNotClosed(),
                            setopenMobileMenu(!openMobileMenu),
                          ]}
                          to='/admin/allorders'
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          All Orders
                        </Link>
                        <Link
                          onClick={() => [
                            closeCategoryMenuIfNotClosed(),
                            setopenMobileMenu(!openMobileMenu),
                          ]}
                          to='/admin/createproducts'
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          Add New Product
                        </Link>
                        <Link
                          onClick={() => [
                            closeCategoryMenuIfNotClosed(),
                            setopenMobileMenu(!openMobileMenu),
                          ]}
                          onClick={() => [
                            closeCategoryMenuIfNotClosed(),
                            setopenMobileMenu(!openMobileMenu),
                          ]}
                          to='/admin/fetchproducts'
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          All Products
                        </Link>
                        <Link
                          onClick={() => [
                            closeCategoryMenuIfNotClosed(),
                            setopenMobileMenu(!openMobileMenu),
                          ]}
                          to='/admin/allpayments'
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          View All Payments
                        </Link>
                        <Link
                          to='/'
                          onClick={logoutHandler}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          Sign out
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to='/profile'
                          onClick={() => [
                            closeCategoryMenuIfNotClosed(),
                            setopenMobileMenu(!openMobileMenu),
                          ]}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          My Orders
                        </Link>
                        <Link
                          onClick={() => [
                            closeCategoryMenuIfNotClosed(),
                            setopenMobileMenu(!openMobileMenu),
                          ]}
                          to={`/editprofile/${userInfo._id}`}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          Update Profile
                        </Link>
                        <Link
                          to='/'
                          onClick={logoutHandler}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          Sign out
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* flyer  Mega Menu DeskTop*/}

      <div
        className={`${
          openCategoryMenu ? 'block' : 'hidden'
        } absolute z-10 inset-x-0  transform shadow-lg`}>
        <div className='absolute inset-0 flex' aria-hidden='true'>
          <div className='bg-white w-1/2'></div>
          <div className='bg-gray-50 w-1/2'></div>
        </div>
        <div className='relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2'>
          <nav
            className='grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12'
            aria-labelledby='solutionsHeading'>
            <h2 id='solutionsHeading' className='sr-only'>
              Categories menu
            </h2>
            <div>
              <h3 className='text-sm font-medium tracking-wide text-gray-500 uppercase'>
                Electronics
              </h3>
              <ul className='mt-5 space-y-6'>
                <li
                  onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
                  className='flow-root'>
                  <Link
                    to='/phones-accessories'
                    className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
                      />
                    </svg>
                    <span className='ml-4'>Phone & Accessories</span>
                  </Link>
                </li>

                <li
                  className='flow-root'
                  onClick={() => setOpenCategoryMenu(!openCategoryMenu)}>
                  <Link
                    to='/laptops-accessories'
                    className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                    <span className='ml-4'>Laptops and Accessories</span>
                  </Link>
                </li>

                <li
                  onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
                  className='flow-root'>
                  <Link
                    to='/home-appliances'
                    className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
                      />
                    </svg>
                    <span className='ml-4'>Home Appliances</span>
                  </Link>
                </li>

                <li
                  onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
                  className='flow-root'>
                  <Link
                    to='/auto-parts'
                    href='#'
                    className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2'
                      />
                    </svg>
                    <span className='ml-4'>Auto Parts</span>
                  </Link>
                </li>

                <li
                  onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
                  className='flow-root'>
                  <Link
                    to='/hot-deals'
                    className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                    <span className='ml-4'>Hot Deals</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-medium tracking-wide text-gray-500 uppercase'>
                Fashion Collections
              </h3>
              <ul className='mt-5 space-y-6'>
                <li
                  onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
                  className='flow-root'>
                  <Link
                    to='/ladies-shoes'
                    className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                    <span className='ml-4'>Ladies Shoes</span>
                  </Link>
                </li>
                <li
                  onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
                  className='flow-root'>
                  <Link
                    to='/ladies-clothings'
                    className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                    <span className='ml-4'>Ladies Clothings</span>
                  </Link>
                </li>
                <li
                  onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
                  className='flow-root'>
                  <Link
                    to='/men-shoes'
                    className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                    <span className='ml-4'>Men Shoes</span>
                  </Link>
                </li>

                <li
                  onClick={() => setOpenCategoryMenu(!openCategoryMenu)}
                  className='flow-root'>
                  <Link
                    to='/men-clothings'
                    className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-gray-400'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                    <span className='ml-4'>Men Clothings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className='bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12'>
            <div>
              <h3 className='text-sm font-medium tracking-wide text-gray-500 uppercase'>
                Best Selling of the week
              </h3>
              <ul className='mt-6 space-y-6'>
                {displayTwoProducts.map(product => {
                  return (
                    <li className='flow-root'>
                      <Link
                        onClick={() => [closeCategoryMenuIfNotClosed()]}
                        to={`/product/${product._id}`}
                        className='-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150'>
                        <div className='hidden sm:block flex-shrink-0'>
                          <img
                            className='w-32 h-20 object-cover rounded-md'
                            src={product.image[0].url}
                            alt=''
                          />
                        </div>
                        <div className='min-w-0 flex-1 sm:ml-8'>
                          <h4 className='text-base font-medium text-gray-900 truncate'>
                            {truncateTitle(product.name)}
                          </h4>
                          <p className='mt-1 text-sm text-gray-500'>
                            {truncateDescription(product.description)}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='mt-6 text-sm font-medium'>
              <Link
                onClick={() => [closeCategoryMenuIfNotClosed()]}
                to='/products'
                className='text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150'>
                View All products <span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Header);
