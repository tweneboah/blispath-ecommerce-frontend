import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import Message from '../components/Message';

//We need the id from match.params.id;
//To get value from query string we will use location.search

const CartScreen = ({ match, location, history }) => {
  const [shippingType, setshippingType] = useState('free');
  //===============================
  const productId = match.params?.id;
  // const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  //===============================

  const dispatch = useDispatch();

  const parsedQueryStrings = queryString.parse(location.search);
  const qty = parseInt(parsedQueryStrings.qty);
  const color = parsedQueryStrings.color;
  const size = parsedQueryStrings.size;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, color, size));
    }
  }, [dispatch, productId]);

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  //================================================================
  //Calc the shipping cost
  //================================================================
  const shippingCostOfProducts = cartItems.reduce(
    (accumulator, currentValue) => {
      console.log(currentValue);
      return accumulator + currentValue.shippingCost;
    },
    0
  );

  console.log(shippingCostOfProducts);
  //================================================================
  //Total Shipping cost base on shipping method
  //================================================================

  const shippingCostBaseOnShippingMethod =
    shippingType === 'free' ? 0.0 : Number(shippingCostOfProducts);

  //===============================
  //Total Cost of items
  //===============================
  const totalCostOfItems = cartItems
    .reduce((acc, curr) => acc + curr?.qty * curr?.price, 0)
    .toFixed(2);

  //================================================================
  //Grand Total
  //================================================================
  const grandTotal =
    shippingType === 'free'
      ? Number(totalCostOfItems)
      : Number(totalCostOfItems) + Number(shippingCostBaseOnShippingMethod);

  //Remove cart item
  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  //===============================
  //checkout
  //===============================
  const checkoutHandler = () => {
    //redirect to login if it has a queryString of shipping
    history.push('/login?redirect=shipping'); //This means if not login it will take you to login otherwise redirect to shipping
  };

  //Save the payment details to storage

  localStorage.setItem(
    'orderPaymentDetails',
    JSON.stringify({
      shippingType: shippingType,
      grandTotal: grandTotal,
      shippingCostOfProducts: shippingCostOfProducts,
      totalCostOfItems: totalCostOfItems,
      shippingCostBaseOnShippingMethod: shippingCostBaseOnShippingMethod,
    })
  );

  return (
    <div className='min-screen'>
      <div className='mt-5 lg:flex   text-center bg-gray-200 py-2 md:block'>
        <div className='flex-2 ml-3'>
          <Link to='/'>
            <button class='bg-gray-600  px-3 py-2 text-base  rounded-l-full text-gray-100 hover:bg-red-300'>
              Keep Shopping
            </button>
          </Link>
        </div>
        <div className='flex-1 text-lg font-semibold'>Shopping Cart</div>
      </div>
      {cartItems?.length === 0 ? (
        <Message>
          Your cart is empty<Link>Go Back</Link>
        </Message>
      ) : (
        <div className='flex flex-col bg-gray-300 lg:flex-row'>
          <div>
            <div class='flex flex-col'>
              <div class='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div class='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                  <div class='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                    <table class='min-w-full divide-y divide-gray-200 mt-4 mb-4'>
                      <tbody class='bg-gray-200 divide-y divide-gray-200 '>
                        <div className='p-2 font-semibold mb-2'>
                          pre orders list
                        </div>
                        {cartItems?.map(item => (
                          <tr>
                            <td class='px-6 py-4 whitespace-nowrap'>
                              <div class='flex items-center'>
                                <div class='flex-shrink-0 h-10 w-10'>
                                  <img
                                    class='h-10 w-10 rounded-full'
                                    src={item?.image[0].url}
                                  />
                                </div>
                                <div class='ml-4'>
                                  <div class='text-sm text-gray-500'>
                                    <Link to={`/product/${item?.product}`}>
                                      {item?.name}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class='px-6 py-4 whitespace-nowrap'>
                              <div class='text-sm text-gray-900'>
                                GHS {item?.price}
                              </div>
                            </td>
                            <td class='px-6 py-4 whitespace-nowrap'>
                              <select
                                value={item?.qty}
                                onChange={e =>
                                  dispatch(
                                    addToCart(
                                      item?.product,
                                      Number(e.target.value)
                                    )
                                  )
                                }
                                class=' block  shadow-lg pl-3 pr-10 py-2  border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100 rounded-md'>
                                {[...Array(item.countInStock)?.keys()].map(
                                  x => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </td>
                            <td class='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                              <button
                                onClick={() =>
                                  removeFromCartHandler(item?.product)
                                }
                                className='bg-red-500 text-yellow-50 p-2 rounded-lg '>
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-100 border md:w-full mt-6 mr-4 rounded-md h-screen ml-4 text-center flex justify-center items-center flex-col'>
            <div className=''>
              <h2 className='capitalize text-lg font-black'>
                Total Items ({' '}
                {cartItems?.reduce((acc, curr) => {
                  return acc + curr?.qty;
                }, 0)}
                )
              </h2>
              <h2 className='capitalize mt-2 text-lg font-black'>
                Shipping Cost GHS {shippingCostBaseOnShippingMethod}
              </h2>

              <h2 className='capitalize text-lg mt-2 font-black'>
                Cost of Items GHS {totalCostOfItems}
              </h2>
              {/* PRICE */}
              <h2 className='font-mono font-black mt-2  text-lg text-red-600'>
                Grand Total GHS {grandTotal}
              </h2>

              <div className='mt-2'>
                <label
                  for='location'
                  class='block text-sm font-medium text-gray-700'>
                  Select shipping Type
                </label>
                <select
                  onChange={e => {
                    const selectedShippingType = e.target.value;
                    setshippingType(selectedShippingType);
                  }}
                  class='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                  <option value='free'>Free</option>
                  <option value='express'>Express</option>
                </select>
              </div>
            </div>
            <button
              disabled={cartItems?.length === 0}
              className=' px-3 border-yellow-400 shadow mt-4 rounded-full text-lg bg-blue-900 text-white py-2'
              onClick={checkoutHandler}>
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
