import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoriesWithLogo from '../components/Categories/CategoriesWithLogo';
import Customers from '../components/Customers';
import ErrorMessage from '../components/ErrorMessage';
import FAQ from '../components/FAQ';
import HomeBanner from '../components/HomeBanner';
import HomePageSections from '../components/HomePageSections';

import Loading from '../components/Loading';
import Ratings from '../components/Ratings';
import { fetchAllProductsAction } from '../redux/actions/productActions';
import svg1 from '../images/logi.svg';
import img1 from '../images/p2.jpg';
import svg2 from '../images/21.svg';
import svg3 from '../images/happy.svg';
import imgp2 from '../images/p2-p-3200.jpeg';
import happyImg from '../images/happy-p-1080.png';
import moneyBack from '../images/money-p-1080.png';
import productImg from '../images/inovo-p-500.jpeg';
import Loader from '../components/Loader';
import HomeSlider from '../components/HomeSlider';
import HomeScreenCategory from './HomeScreen/HomeScreenCategory';
import HomeScreenProductList from './HomeScreen/HomeScreenProductList';
import HomeScreenFixedBackground from './HomeScreen/HomeScreenFixedBackground';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [productSearchTerm, setproductSearchTerm] = useState('');
  useEffect(() => {
    dispatch(fetchAllProductsAction(productSearchTerm));
  }, [dispatch]);

  const productList = useSelector(state => state.productList);
  //These are the state that are possible to be available
  const { loading, products, error } = productList;

  return (
    <div>
      <HomeSlider />
      <HomeScreenCategory />
      <HomeScreenProductList />
      <HomeScreenFixedBackground />
    </div>
  );
};

export default HomeScreen;
