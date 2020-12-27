import React, { useEffect } from 'react';
import { Formik } from 'formik';
import Dropzone from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductAction,
  fetchAllProductsAction,
  updateProductAction,
} from '../../redux/actions/productActions';
import { productFileImageUploadAction } from '../../redux/actions/productFileImageUploadAction';

const AdminEditProduct = ({ history, match }) => {
  const dispatch = useDispatch();

  //===================IMAGE UPLOAD=================
  //File Upload Logic
  const productImageUploaded = useSelector(state => state.productImageUploaded);
  const { loading, file, error } = productImageUploaded;

  //======FETCH ALL PRODUCTS==================

  useEffect(() => {
    dispatch(fetchAllProductsAction());
  }, [match.params.id]);
  const productList = useSelector(state => state.productList);

  const { products } = productList;
  //find the particular product whos id is in the param and populate it in the form
  const product =
    products && products.find(product => product._id === match.params.id);

  return (
    // <>
    //   {loading && <h1>File uploading please wait .....</h1>}
    //   {error && <h1>{error}</h1>}
    //   {!product & !match.params.id ? (
    //     <h1>product loading</h1>
    //   ) : (
    //     <Formik
    //       initialValues={{
    //         name: product && product.name,
    //         price: product && product.price,
    //         brand: product && product.brand,
    //         category: product && product.category,
    //         countInStock: product && product.countInStock,
    //         numReviews: product && product.numReviews,
    //         description: product && product.description,
    //       }}
    //       onSubmit={values => {
    //         dispatch(updateProductAction(match.params.id, values));
    //         //Redirect
    //         // history.push('/admin/fetchproducts');
    //       }}>
    //       {props => {
    //         return (
    //           <>
    //             <form onSubmit={props.handleSubmit}>
    //               <div className='container'>
    //                 <div className='row justify-content-center'>
    //                   <div className='col-md-5 col-lg-4'>
    //                     <label className='sr-only' htmlFor='input1-signin-03'>
    //                       Name
    //                     </label>
    //                     <input
    //                       value={props.values.name}
    //                       onChange={props.handleChange('name')}
    //                       className='form-control my-3 bg-light'
    //                       id='input1-signin-03'
    //                       type='text'
    //                       placeholder='Enter Product Name'
    //                     />
    //                     <label className='sr-only' htmlFor='input2-signin-03'>
    //                       Price
    //                     </label>
    //                     <input
    //                       value={props.values.price}
    //                       onChange={props.handleChange('price')}
    //                       className='form-control my-3 bg-light'
    //                       id='input2-signin-03'
    //                       type='text'
    //                       placeholder='Enter Product Price'
    //                     />
    //                     <label htmlFor='input2-signin-03'>Image</label>
    //                     <input
    //                       onChange={e =>
    //                         dispatch(
    //                           productFileImageUploadAction(e.target.files[0])
    //                         )
    //                       }
    //                       className='form-control my-3 bg-gray-200'
    //                       id='input2-signin-03'
    //                       type='file'
    //                       placeholder='Image'
    //                     />
    //                     <label className='sr-only' htmlFor='input2-signin-03'>
    //                       Brand
    //                     </label>
    //                     <input
    //                       value={props.values.brand}
    //                       onChange={props.handleChange('brand')}
    //                       className='form-control my-3 bg-light'
    //                       id='input2-signin-03'
    //                       type='text'
    //                       placeholder='Enter Product Brand'
    //                     />
    //                     <label className='sr-only' htmlFor='input2-signin-03'>
    //                       category
    //                     </label>
    //                     <input
    //                       value={props.values.category}
    //                       onChange={props.handleChange('category')}
    //                       className='form-control my-3 bg-light'
    //                       id='input2-signin-03'
    //                       type='text'
    //                       placeholder='Enter Product Category'
    //                     />

    //                     <label className='sr-only' htmlFor='input2-signin-03'>
    //                       In Stock
    //                     </label>
    //                     <input
    //                       value={props.values.countInStock}
    //                       onChange={props.handleChange('countInStock')}
    //                       className='form-control my-3 bg-light'
    //                       id='input2-signin-03'
    //                       type='text'
    //                       placeholder='Enter Count in Stock'
    //                     />
    //                     <label className='sr-only' htmlFor='input2-signin-03'>
    //                       description
    //                     </label>
    //                     <input
    //                       value={props.values.description}
    //                       onChange={props.handleChange('description')}
    //                       className='form-control my-3 bg-light'
    //                       id='input2-signin-03'
    //                       type='text'
    //                       placeholder='Enter Product Description'
    //                     />

    //                     <label className='sr-only' htmlFor='input2-signin-03'>
    //                       numReviews
    //                     </label>
    //                     <input
    //                       value={props.values.numReviews}
    //                       onChange={props.handleChange('numReviews')}
    //                       className='form-control my-3 bg-light'
    //                       id='input2-signin-03'
    //                       type='text'
    //                       placeholder='Enter Number of reviews'
    //                     />

    //                     <button
    //                       className={`btn btn-primary btn-block py-2 my-3 ${
    //                         loading && !file && 'disabled'
    //                       }`}>
    //                       update Product
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </form>
    //             <button
    //               onClick={() => {
    //                 dispatch(deleteProductAction(match.params.id));
    //                 history.push('/admin/fetchproducts');
    //               }}
    //               className={` text-white bg-red-800 btn-block py-2 my-3 ${
    //                 loading && !file && 'disabled'
    //               }`}>
    //               Delete Product
    //             </button>
    //           </>
    //         );
    //       }}
    //     </Formik>
    //   )}
    // </>

    <>
      <Formik
        initialValues={{
          name: product && product.name,
          price: product && product.price,
          brand: product && product.brand,
          category: product && product.category,
          countInStock: product && product.countInStock,
          numReviews: product && product.numReviews,
          description: product && product.description,
        }}
        onSubmit={values => {
          console.log(values.image);

          dispatch(updateProductAction(match.params.id, values));
        }}>
        {props => {
          return (
            <form onSubmit={props.handleSubmit}>
              <div class='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
                <div class='sm:mx-auto sm:w-full sm:max-w-md'>
                  <img
                    class='mx-auto h-12 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                  <h2 class='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    update Product
                  </h2>
                  <div>
                    {loading && (
                      <p class='text-lg text-pink-500'>
                        Product is creating please wait....
                      </p>
                    )}
                    {error && (
                      <p class='text-lg bg-gray-200 text-red-600'>{error}</p>
                    )}
                  </div>
                </div>
                <div></div>
                <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                  <div class='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <div>
                      <label
                        for='email'
                        class='block text-sm font-medium text-gray-700'>
                        Product name
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.name}
                          onChange={props.handleChange('name')}
                          type='text'
                          autocomplete='text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product price
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.price}
                          onChange={props.handleChange('price')}
                          id='number'
                          name='number'
                          type='number'
                          autocomplete='current-text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product brand
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.brand}
                          onChange={props.handleChange('brand')}
                          type='text'
                          autocomplete='text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <div class='mt-1'>
                        <div>
                          <label
                            for='location'
                            class='block text-sm font-medium text-gray-700'>
                            Category
                          </label>
                          <select
                            required
                            onChange={props.handleChange('category')}
                            name='category'
                            class='mt-1 block border w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                            <option>Fashion</option>
                            <option>Gents</option>
                            <option>Ladies</option>
                            <option>Hot Deals</option>
                            <option>Phone Accessories</option>
                            <option>Laptops and Accessories</option>
                            <option>Home Appliances</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product in Stock
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.countInStock}
                          onChange={props.handleChange('countInStock')}
                          type='text'
                          autocomplete='text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product description
                      </label>
                      <div class='mt-1'>
                        <textarea
                          cols='10'
                          value={props.values.description}
                          onChange={props.handleChange('description')}
                          id='description'
                          name='description'
                          type='textarea'
                          autocomplete='current-description'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'></textarea>
                      </div>
                    </div>

                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Number of Reviews
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.numReviews}
                          onChange={props.handleChange('numReviews')}
                          type='text'
                          autocomplete='current-password'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div className='mt-4'>
                      <button
                        type='submit'
                        class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Create Product
                      </button>
                    </div>

                    <div className='mt-4'>
                      <button
                        onClick={dispatch(deleteProductAction(match.params.id))}
                        type='submit'
                        class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Delete product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default AdminEditProduct;
