import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Dropzone from 'react-dropzone';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { createProductAction } from '../../redux/actions/productActions';
import ColorsMultiSelect from './MultiSelection/ColorsMultiSelect';
import SizeMultiSelect from './MultiSelection/SizeMultiSelect';

const formSchema = Yup.object({
  colors: Yup.array()
    .min(1, 'Pick at least 1 tags')
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
  sizes: Yup.array()
    .min(1, 'Pick at least 3 tags')
    .of(
      Yup.object().shape({
        label: Yup.string(),
        value: Yup.string(),
      })
    ),
  name: Yup.string().required('Name is required!'),
  price: Yup.string().required('Price is required!'),
  brand: Yup.string().required('Brand is required!'),
  category: Yup.string().required('category is required!'),
  countInStock: Yup.string().required('Count in Stock is required!'),
  description: Yup.string().required('Count in Stock is required!'),
  shippingCost: Yup.string().required(),
});

const AdminCreateProducts = props => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      brand: '',
      category: 'Fashion',
      countInStock: '',
      description: '',
      image: [],
      colors: [],
      sizes: [],
      shippingCost: '',
    },
    onSubmit: value => {
      const payload = {
        ...value,
        colors: value.colors.map(color => color.value),
        sizes: value.sizes.map(size => size.value),
      };

      dispatch(createProductAction(payload));
    },
    validationSchema: formSchema,
  });

  console.log(formik.values.category);
  const productCreate = useSelector(state => state.productCreate);

  const { loading, success, product, error } = productCreate;

  //Rediredirect when product is created
  useEffect(() => {
    if (success) {
      props.history.push('/');
    }
  }, [dispatch, success]);

  //Redirect if not admin
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo && !userInfo.isAdmin) props.history.pushState('/profile');
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        {/* begining */}
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt='Workflow'
            />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Add New Product
            </h2>

            <div>
              {loading && (
                <p className='text-lg text-pink-500'>
                  Product is creating please wait....
                </p>
              )}
              {error && (
                <p className='text-lg bg-gray-200 text-red-600'>{error}</p>
              )}
            </div>
          </div>
          <div></div>
          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
              <div>
                <label
                  for='email'
                  className='block text-sm font-medium text-gray-700'>
                  Product name
                </label>
                <div className='mt-1'>
                  <input
                    onBlur={formik.handleBlur('name')}
                    value={formik.values.name}
                    onChange={formik.handleChange('name')}
                    type='text'
                    autocomplete='text'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
                <div className='text-red-500'>
                  {formik.touched.name && formik.errors.name}
                </div>
              </div>
              <div>
                <label
                  for='password'
                  className='block text-sm font-medium text-gray-700'>
                  Product price
                </label>
                <div className='mt-1'>
                  <input
                    onBlur={formik.handleBlur('price')}
                    value={formik.values.price}
                    onChange={formik.handleChange('price')}
                    id='number'
                    name='number'
                    type='number'
                    autocomplete='current-text'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
                <div className='text-red-500'>
                  {formik.touched.price && formik.errors.price}
                </div>
              </div>
              <div>
                <label
                  for='password'
                  className='block text-sm font-medium text-gray-700'>
                  Shipping Cost
                </label>
                <div className='mt-1'>
                  <input
                    onBlur={formik.handleBlur('shippingCost')}
                    value={formik.values.shippingCost}
                    onChange={formik.handleChange('shippingCost')}
                    id='number'
                    name='number'
                    type='number'
                    autocomplete='current-text'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
                <div className='text-red-500'>
                  {formik.touched.shippingCost && formik.errors.shippingCost}
                </div>
              </div>
              <div>
                <label
                  for='password'
                  className='block text-sm font-medium text-gray-700'>
                  Product brand
                </label>
                <div className='mt-1'>
                  <input
                    onBlur={formik.handleBlur('brand')}
                    value={formik.values.brand}
                    onChange={formik.handleChange('brand')}
                    type='text'
                    autocomplete='text'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
                <div className='text-red-500'>
                  {formik.touched.brand && formik.errors.brand}
                </div>
              </div>
              {/* Upload image */}
              <div className='mt-2 sm:mt-0 sm:col-span-2'>
                <div className='max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                  <div className='space-y-1 text-center'>
                    <svg
                      className='mx-auto h-12 w-12 text-gray-400'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 48 48'
                      aria-hidden='true'>
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                    <div className='flex text-sm text-gray-600'>
                      <Dropzone
                        accept='image/jpeg, image/png'
                        maxFiles={4}
                        onDrop={acceptedFiles => {
                          formik.setFieldValue(
                            'image',
                            formik.values.image.concat(acceptedFiles)
                          );
                        }}>
                        {({ getRootProps, getInputProps }) => (
                          <div className='container'>
                            <div
                              {...getRootProps({
                                classNameName: 'dropzone',
                                onDrop: event => event.stopPropagation(),
                              })}>
                              <input {...getInputProps()} />
                              <p>
                                Drag 'n' drop some files here, or click to
                                select files
                              </p>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                    </div>
                    <p className='text-sm text-gray-500'>
                      PNG, JPG, GIF minimum size 1M
                    </p>
                  </div>
                </div>
              </div>
              {/* end of upload image */}
              <div>
                <div className='mt-1'>
                  <div>
                    <label
                      for='location'
                      className='block text-sm font-medium text-gray-700'>
                      Category
                    </label>
                    <select
                      onBlur={formik.handleBlur('category')}
                      onChange={formik.handleChange('category')}
                      name='category'
                      className='mt-1 block border w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                      <option value='Fashion'>Fashion</option>
                      <option value='Gents'>Gents</option>
                      <option value='Ladies'>Ladies</option>
                      <option value='Hot Deals'>Hot Deals</option>
                      <option value='Phone Accessories'>
                        Phone Accessories
                      </option>
                      <option value='Laptops and Accessories'>
                        Laptops and Accessories
                      </option>
                      <option value='Home Appliances'>Home Appliances</option>
                    </select>
                  </div>
                </div>
                <div className='text-red-500'>
                  {formik.touched.category && formik.errors.category}
                </div>
              </div>
              {/* Color select */}
              <div>
                <div className='mt-1'>
                  <ColorsMultiSelect
                    value={formik.values.colors}
                    onChange={formik.setFieldValue}
                    onBlur={formik.setFieldTouched}
                    error={formik.errors.colors}
                    touched={formik.touched.colors}
                  />
                </div>
                <div className='text-red-500'>
                  {formik.touched.countInStock && formik.errors.countInStock}
                </div>
              </div>

              {formik.values.category === 'Fashion' ? (
                <div>
                  <div className='mt-1'>
                    <SizeMultiSelect
                      value={formik.values.sizes}
                      onChange={formik.setFieldValue}
                      onBlur={formik.setFieldTouched}
                      error={formik.errors.sizes}
                      touched={formik.touched.sizes}
                    />
                  </div>
                  <div className='text-red-500'>
                    {formik.touched.countInStock && formik.errors.countInStock}
                  </div>
                </div>
              ) : formik.values.category === 'Gents' ? (
                <div>
                  <div className='mt-1'>
                    <SizeMultiSelect
                      value={formik.values.sizes}
                      onChange={formik.setFieldValue}
                      onBlur={formik.setFieldTouched}
                      error={formik.errors.sizes}
                      touched={formik.touched.sizes}
                    />
                  </div>
                  <div className='text-red-500'>
                    {formik.touched.countInStock && formik.errors.countInStock}
                  </div>
                </div>
              ) : formik.values.category === 'Ladies' ? (
                <div>
                  <div className='mt-1'>
                    <SizeMultiSelect
                      value={formik.values.sizes}
                      onChange={formik.setFieldValue}
                      onBlur={formik.setFieldTouched}
                      error={formik.errors.sizes}
                      touched={formik.touched.sizes}
                    />
                  </div>
                  <div className='text-red-500'>
                    {formik.touched.countInStock && formik.errors.countInStock}
                  </div>
                </div>
              ) : (
                ''
              )}

              <div>
                <label
                  for='password'
                  className='block text-sm font-medium text-gray-700'>
                  Product in Stock
                </label>
                <div className='mt-1'>
                  <input
                    onBlur={formik.handleBlur('countInStock')}
                    value={formik.values.countInStock}
                    onChange={formik.handleChange('countInStock')}
                    type='text'
                    autocomplete='text'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
                <div className='text-red-500'>
                  {formik.touched.countInStock && formik.errors.countInStock}
                </div>
              </div>
              <div>
                <label
                  for='password'
                  className='block text-sm font-medium text-gray-700'>
                  Product description
                </label>
                <div className='mt-1'>
                  <textarea
                    cols='20'
                    onBlur={formik.handleBlur.description}
                    value={formik.values.description}
                    onChange={formik.handleChange('description')}
                    id='description'
                    name='description'
                    type='textarea'
                    autocomplete='current-description'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'></textarea>
                </div>
              </div>
              <div className='text-red-500'>
                {formik.touched.description && formik.errors.description}
              </div>

              <button
                type='button'
                className='bg-red-500 block py-2 text-lg w-full   rounded-full mt-3 text-white'
                onClick={formik.resetForm}
                disabled={!formik.dirty || formik.isSubmitting}>
                Reset
              </button>

              {formik.values.image.length === 0 ? (
                <button
                  disabled
                  className='bg-red-200 block w-full py-2 text-lg cursor-not-allowed rounded-full mt-3 text-white'
                  type='submit'>
                  Please upload image to continue
                </button>
              ) : (
                <button
                  className='bg-yellow-600 block w-full py-2 text-lg cursor-not-allowed rounded-full mt-3 text-white'
                  type='submit'
                  disabled={formik.isSubmitting}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
        {/* end of form */}
      </form>
    </>
  );
};

export default AdminCreateProducts;
