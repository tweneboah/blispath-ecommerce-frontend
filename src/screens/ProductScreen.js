import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';
import { useDispatch, useSelector } from 'react-redux';

import Ratings from '../components/Ratings';
import { productDetailsActions } from '../redux/actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({ match, history }) => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  //Fetch the product in params
  useEffect(() => {
    dispatch(productDetailsActions(match.params.id));
  }, [match.params.id, dispatch]);

  //fetch the product in store
  const productDetails = useSelector(state => state.productDetails);
  const { loading, product, error } = productDetails;

  //Loop throught the images of the product and pass to the carousel component
  console.log(product.colors);
  let productImages = [];

  if (!loading && product && !error) {
    productImages = product.image?.map(img => {
      return {
        original: img?.url,
        thumbnail: img?.url,
      };
    });
  }
  //This will send to cart page but it will send the product id and qty as a query params
  const addToCartHandler = () => {
    // if (size === '' && size === '') {
    //   alert('Please select size and color option');
    // } else {
    //   history.push(
    //     `/cart/${match.params.id}?qty=${qty}&color=${color}&size=${size}`
    //   );
    // }

    history.push(
      `/cart/${match.params.id}?qty=${qty}&color=${color}&size=${size}`
    );
  };
  console.log('product', product);
  return (
    <>
      <Link to='/'>
        <button class='bg-red-600 mt-2 mb-2 px-3 py-2 ml-3 text-xl rounded-l-full text-gray-100 hover:bg-red-300'>
          {' '}
          Go Back
        </button>
      </Link>
      {loading ? (
        <Loader /> ? (
          error
        ) : (
          <Message variant='danger'>{error}</Message>
        )
      ) : (
        <section class='py-12 px-4 bg-gray-200'>
          <div class='flex flex-wrap -mx-4'>
            <div class='lg:w-1/2 px-4 mb-4 lg:mb-0'>
              {productImages && (
                <ImageGallery
                  autoPlay={true}
                  showIndex={true}
                  thumbnailPosition='bottom'
                  lazyLoad={true}
                  showThumbnails={true}
                  class='rounded shadow-md'
                  items={productImages && productImages}
                />
              )}
              <h2 class='text-4xl mb-4 font-heading'>{product?.name}</h2>
              <p class='mb-6 text-gray-500 leading-relaxed'>
                {product?.description}
              </p>
            </div>
            <div class='lg:w-1/2 w-full px-4'>
              <div className='flex mb-4 mt-4 justify-around items-center bg-gray-100 rounded-full shadow-md py-3 text-lg text-gray-600'>
                <div className=''>Price : GHS</div>
                <div>
                  <strong>{product?.price}</strong>
                </div>
              </div>
              <div className='flex mb-4 mt-4 justify-around items-center bg-gray-100 rounded-full shadow-md py-3 text-lg text-gray-600'>
                <div className=''>Status</div>
                {product?.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </div>

              <div className='flex mb-4 mt-4 justify-around items-center bg-gray-100 rounded-full shadow-md py-2 text-lg text-gray-600'>
                <div className=''>Quantity</div>
                {product?.countInStock > 0 && (
                  <>
                    <select
                      value={qty}
                      onChange={e => setQty(e.target.value)}
                      class=' block  pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                      {[...Array(product?.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </>
                )}
              </div>

              {/* Dynamic display either color or size  base on category*/}
              <>
                <h1 className='font-semibold'>
                  Selected Color:
                  <span className='text-green-500 py-1 px-2'>
                    {color ? color : 'No color selected'}
                  </span>
                </h1>
                <div className='flex justify-start m-2 '>
                  {product.colors?.map(color => {
                    return (
                      <button
                        className='cursor-pointer bg-gray-50'
                        onClick={() => setColor(color)}
                        style={{
                          backgroundColor: `${color}`,
                          height: '22px',
                          width: '23px',
                          marginRight: '10px',
                        }}></button>
                    );
                  })}
                </div>
              </>

              {/* product?.category */}
              {product?.category === 'Men Clothings' && (
                <div className='flex justify-start flex-col'>
                  <div>
                    <h1 className='font-semibold'>
                      Selected Color:
                      <span className='text-green-500 py-1 px-2'>
                        {size ? size : 'No Size selected'}
                      </span>
                    </h1>

                    <div className='flex justify-start m-2 '>
                      {product.clothingSizes?.map(size => {
                        return (
                          <button
                            className='focus:bg-yellow-600 mr-4 text-lg bg-gray-300 px-2'
                            onClick={() => setSize(size)}>
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              {product?.category === 'Ladies Shoes' && (
                <div className='flex justify-start flex-col'>
                  <div>
                    <h1 className='font-semibold'>
                      Selected Color:
                      <span className='text-green-500 py-1 px-2'>
                        {size ? size : 'No Size selected'}
                      </span>
                    </h1>
                    <div className='flex justify-start m-2 '>
                      {product.shoesSizes?.map(size => {
                        return (
                          <button
                            className='focus:bg-yellow-600 mr-4 text-lg bg-gray-300 px-2'
                            onClick={() => setSize(size)}>
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {product?.category === 'Men Shoes' && (
                <div className='flex justify-start flex-col'>
                  <div>
                    <h1>Selected Size:{size ? size : 'No size selected'}</h1>
                    <div className='flex justify-start m-2 '>
                      {product.shoesSizes?.map(size => {
                        return (
                          <button
                            className='focus:bg-yellow-600 mr-4 text-lg bg-gray-300 px-2'
                            onClick={() => setSize(size)}>
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              {product?.category === 'Men Clothings' && (
                <div className='flex justify-start flex-col'>
                  <div>
                    <h1 className='font-semibold'>
                      Selected Size:
                      <span className='text-green-500 py-1 px-2'>
                        {size ? size : 'No Size selected'}
                      </span>
                    </h1>
                    <div className='flex justify-start m-2 '>
                      {product.clothingSizes?.map(size => {
                        return (
                          <button
                            className='focus:bg-yellow-600 mr-4 text-lg bg-gray-300 px-2'
                            onClick={() => setSize(size)}>
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {product?.category === 'Ladies Clothings' && (
                <div className='flex justify-start flex-col'>
                  <div>
                    <h1 className='font-semibold'>
                      Selected Size:
                      <span className='text-green-500 py-1 px-2'>
                        {size ? size : 'No Size selected'}
                      </span>
                    </h1>
                    <div className='flex justify-start m-2 '>
                      {product.clothingSizes?.map(size => {
                        return (
                          <button
                            className='focus:bg-yellow-600 mr-4 text-lg bg-gray-300 px-2'
                            onClick={() => setSize(size)}>
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              <div className='flex justify-around'>
                <button
                  onClick={addToCartHandler}
                  disabled={product?.countInStock === 0}
                  class={`inline-block w-60 py-3 mt-3 rounded-lg px-4 leading-none text-white  ${
                    product?.countInStock === 0
                      ? 'bg-red-400 cursor-not-allowed'
                      : 'bg-blue-900'
                  } md:rounded-l-none`}>
                  Add To Cart
                </button>
              </div>
              <div class='pt-4 border-t'>
                {/* <a class='text-blue-700 hover:underline' href='#'>
                  Add to favorites
                </a> */}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductScreen;
