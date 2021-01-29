import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProductsAction } from '../../redux/actions/productActions';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';

const HomeScreenProductList = () => {
  const dispatch = useDispatch();

  const [productSearchTerm, setproductSearchTerm] = useState('');
  useEffect(() => {
    dispatch(fetchAllProductsAction(productSearchTerm));
  }, [dispatch, productSearchTerm]);

  const productList = useSelector(state => state.productList);
  //These are the state that are possible to be available
  const { loading, products, error } = productList;

  return (
    <div className='home_product_list_grid_section'>
      <div className='home_product_list_title_div w-container'>
        <h1 className='product_heading text-3xl mb-2 text-gray-600 font-semi-bold capitalize font-mono'>
          Latest Products
        </h1>
        <div className='text-center mb-6'>
          <div>
            <input
              value={productSearchTerm}
              onChange={e => setproductSearchTerm(e.target.value)}
              type='text'
              name='email'
              id='email'
              class='shadow-sm p-3 border-2 focus:ring-indigo-500 focus:border-yellow-500 block w-full sm:text-sm border-gray-300 rounded-md text-center'
              placeholder='Search For Products'
            />
          </div>
        </div>
      </div>
      <div>
        <label for='email' class='sr-only'>
          Email
        </label>
      </div>
      <div className='w-layout-grid home_product_list_grid'>
        {loading ? (
          <Loading />
        ) : products?.length < 0 ? (
          <h1>No products</h1>
        ) : (
          products?.map(product => {
            const dateNow = new Date();
            const productLasteDateCreated = new Date(product.isProductNew);
            return (
              <div className='home_product_list_item_wrapper'>
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product?.image[0].url}
                    alt=''
                    className='product_img'
                  />
                </Link>
                <h1 className='text-2xl font-bold text-gray-600'>
                  {product?.name}
                </h1>
                <p className='product_desc font-normal'>
                  {product?.description}
                </p>
                <h1 className='text-3xl font-semibold text-red-600'>
                  GHS {product?.price}
                </h1>
                {productLasteDateCreated > dateNow && (
                  <div className='new_product_tag'>New </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomeScreenProductList;
