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
      <div class='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div class='absolute inset-0'>
          <div class='bg-white h-1/3 sm:h-2/3'></div>
        </div>
        <div class='relative max-w-7xl mx-auto'>
          <div class='text-center'>
            <h2 class='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
              Latest Products
            </h2>
            <p class='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
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
          <div class='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {loading ? (
              <Loading />
            ) : products?.length < 0 ? (
              <h1>No products</h1>
            ) : (
              products?.map(product => {
                const dateNow = new Date();
                const productLasteDateCreated = new Date(product.isProductNew);
                return (
                  <>
                    <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                      <div className='flex-shrink-0'>
                        <Link to={`/product/${product._id}`}>
                          <img
                            className='h-80 w-full object-cover'
                            src={product?.image[0].url}
                            alt=''
                          />
                        </Link>
                      </div>
                      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                        <div className='flex-1'>
                          <p className='text-sm font-medium text-yellow-600'>
                            <p className='hover:underline text-2xl font-semibold'>
                              GHS {product?.price}
                            </p>
                          </p>
                          <a href='#' className='block mt-2'>
                            <Link to={`/product/${product._id}`}>
                              <p className='text-xl font-semibold text-gray-900'>
                                {truncateTitle(product?.name)}
                              </p>
                            </Link>
                            <Link to={`/product/${product._id}`}>
                              <p className='mt-3 text-base text-gray-500'>
                                {truncateDescription(product?.description)}
                              </p>
                            </Link>
                          </a>
                        </div>
                        <div className='mt-6 flex items-center'>
                          <div className='flex-shrink-0'>
                            <a href='#'>
                              <span className='sr-only'></span>
                              <img
                                className='h-10 w-10 rounded-full'
                                src={
                                  product?.image.length > 1
                                    ? product?.image[1].url
                                    : product?.image[0].url
                                }
                                alt=''
                              />
                            </a>
                          </div>
                          <div className='ml-3'>
                            <p className='text-sm font-medium text-blue-900'>
                              <Link to={`/product/${product._id}`}>
                                <a href='#' className='hover:underline'>
                                  Read More
                                </a>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            )}
            {/* card 1 */}
            {/* <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
              <div class='flex-shrink-0'>
                <img
                  class='h-80 w-full object-cover'
                  src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                  alt=''
                />
              </div>
              <div class='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div class='flex-1'>
                  <p class='text-sm font-medium text-indigo-600'>
                    <a href='#' class='hover:underline'>
                      Article
                    </a>
                  </p>
                  <a href='#' class='block mt-2'>
                    <p class='text-xl font-semibold text-gray-900'>
                      Boost your conversion rate
                    </p>
                    <p class='mt-3 text-base text-gray-500'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga
                      culpa, similique sequi cum eos quis dolorum.
                    </p>
                  </a>
                </div>
                <div class='mt-6 flex items-center'>
                  <div class='flex-shrink-0'>
                    <a href='#'>
                      <span class='sr-only'>Roel Aufderehar</span>
                      <img
                        class='h-10 w-10 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </a>
                  </div>
                  <div class='ml-3'>
                    <p class='text-sm font-medium text-gray-900'>
                      <a href='#' class='hover:underline'>
                        Roel Aufderehar
                      </a>
                    </p>
                    <div class='flex space-x-1 text-sm text-gray-500'>
                      <time datetime='2020-03-16'>Mar 16, 2020</time>
                      <span aria-hidden='true'>&middot;</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreenProductList;
