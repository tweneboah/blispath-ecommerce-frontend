import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchAllProductsAction } from '../../redux/actions/productActions';

import Loader from '../../components/Loader';
import HomeSlider from '../../components/HomeSlider';
import HomeScreenCategory from './HomeScreenCategory';
import HomeScreenProductList from './HomeScreenProductList';
import HomeScreenFixedBackground from './HomeScreenFixedBackground';
import HomeScreenFreeShipping from './HomeScreenFreeShipping';

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
      <HomeScreenFreeShipping />
    </div>
  );
};

export default HomeScreen;
