import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/actions/userAction';
import { Link } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { GiClothes } from 'react-icons/gi';
// Icons
import { BiRun } from 'react-icons/bi';
import { GiLaptop } from 'react-icons/gi';
import { ImMobile } from 'react-icons/im';
import { GiMonclerJacket } from 'react-icons/gi';
import { BsSpeaker } from 'react-icons/bs';
import { AiFillCar } from 'react-icons/ai';
import { AiOutlineLogout } from 'react-icons/ai';
import '../styles/normalize.css';
import '../styles/default.css';
import '../styles/navbar.css';
import '../index.css';
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
        data-animation='default'
        data-duration='400'
        role='banner'
        class='navbarcontainer w-nav'>
        <div class='navbarcontainer w-container'>
          <a href='#' class='brandlogo w-nav-brand'>
            <img
              src='../images/momo.png'
              loading='lazy'
              width='56'
              alt=''
              class='logoimage'
            />
          </a>
          <nav role='navigation' class='navmenucontainer w-nav-menu'>
            <a href='#' class='navlinkitem w-nav-link'>
              Home
            </a>
            <a href='#' class='navlinkitem w-nav-link'>
              About
            </a>
            <a href='#' class='navlinkitem w-nav-link'>
              Contact
            </a>
          </nav>
          <div class='menubutton w-nav-button'>
            <div class='hamburicon w-icon-nav-menu'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
