import React from 'react';
import { Link } from 'react-router-dom';
import whatsAppSVG from '../images/whatsapp.svg';
const Footer = () => {
  return (
    <footer className='bg-gray-900' aria-labelledby='footerHeading'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 ml-3 lg:py-16 lg:px-8'>
        <div className='pb-8 xl:grid xl:grid-cols-4 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-4'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Categories
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      to='/ladies'
                      className='text-base text-gray-300 hover:text-white'>
                      Ladies
                    </Link>
                  </li>

                  <li>
                    <Link
                      to='/gents'
                      className='text-base text-gray-300 hover:text-white'>
                      Gents
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/phones-accessories'
                      className='text-base text-gray-300 hover:text-white'>
                      Phone & Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/laptops-accessories'
                      className='text-base text-gray-300 hover:text-white'>
                      Laptops & Accessories
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/home-appliances'
                      className='text-base text-gray-300 hover:text-white'>
                      Home Appliances
                    </Link>
                  </li>

                  <li>
                    <Link
                      to='/auto-parts'
                      className='text-base text-gray-300 hover:text-white'>
                      Auto Parts
                    </Link>
                  </li>

                  <li>
                    <Link
                      to='/hot-deals'
                      className='text-base text-gray-300 hover:text-white'>
                      Hot Deals
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Account
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      to='/login'
                      className='text-base text-gray-300 hover:text-white'>
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link
                      to='/register'
                      className='text-base text-gray-300 hover:text-white'>
                      Register
                    </Link>
                  </li>

                  <li>
                    <Link
                      to='/profile'
                      className='text-base text-gray-300 hover:text-white'>
                      My Orders
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Company
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      to='/about'
                      className='text-base text-gray-300 hover:text-white'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/contact'
                      className='text-base text-gray-300 hover:text-white'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-400 tracking-wider uppercase'>
                  Legal
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      to='/policy'
                      href='#'
                      className='text-base text-gray-300 hover:text-white'>
                      Policies and Privacy
                    </Link>
                  </li>

                  <li>
                    <Link
                      to='/terms'
                      className='text-base text-gray-300 hover:text-white'>
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between'>
          <div className='flex space-x-6 md:order-2'>
            <a
              target='_blank'
              href=' https://www.facebook.com/blisspathgh/'
              className='text-gray-400 hover:text-gray-300'>
              <span className='sr-only'>Facebook</span>
              <svg
                className='h-6 w-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'>
                <path
                  fill-rule='evenodd'
                  d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>

            <a
              target='_blank'
              href=' https://www.instagram.com/invites/contact/?i=iqo59ul1huoh&utm_content=5w6mcz'
              className='text-gray-400 hover:text-gray-300'>
              <span className='sr-only'>Instagram</span>
              <svg
                className='h-6 w-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'>
                <path
                  fill-rule='evenodd'
                  d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>

            <a
              target='_blank'
              href=' https://chat.whatsapp.com/JToEJGFDqVY5VH4HQy8i0D'
              className='text-gray-400 hover:text-gray-300'>
              <span className='sr-only'>Whatsapp</span>
              <svg
                width='22'
                height='25'
                viewBox='0 0 22 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.0045 4.76139C15.1339 2.69889 12.6429 1.56451 9.99554 1.56451C4.53125 1.56451 0.0848214 6.45559 0.0848214 12.4663C0.0848214 14.3864 0.540179 16.2623 1.40625 17.9172L0 23.5645L5.25446 22.0471C6.70089 22.9163 8.33036 23.373 9.99107 23.373H9.99554C15.4554 23.373 20 18.4819 20 12.4712C20 9.55916 18.875 6.82389 17.0045 4.76139V4.76139ZM9.99554 21.5364C8.51339 21.5364 7.0625 21.0993 5.79911 20.2743L5.5 20.0779L2.38393 20.9766L3.21429 17.6324L3.01786 17.2886C2.19196 15.8449 1.75893 14.1801 1.75893 12.4663C1.75893 7.4721 5.45536 3.40603 10 3.40603C12.2009 3.40603 14.2679 4.34889 15.8214 6.06273C17.375 7.77657 18.3304 10.0502 18.3259 12.4712C18.3259 17.4703 14.5357 21.5364 9.99554 21.5364V21.5364ZM14.5134 14.7498C14.2679 14.6123 13.0491 13.9542 12.8214 13.8659C12.5938 13.7725 12.4286 13.7284 12.2634 14.0034C12.0982 14.2784 11.625 14.8873 11.4777 15.0739C11.3348 15.2556 11.1875 15.2801 10.942 15.1426C9.48661 14.3422 8.53125 13.7136 7.57143 11.9016C7.31696 11.4203 7.82589 11.4547 8.29911 10.4136C8.37946 10.2319 8.33929 10.0748 8.27679 9.93728C8.21429 9.79978 7.71875 8.45916 7.51339 7.91407C7.3125 7.38371 7.10714 7.45737 6.95536 7.44755C6.8125 7.43773 6.64732 7.43773 6.48214 7.43773C6.31696 7.43773 6.04911 7.50648 5.82143 7.77657C5.59375 8.05157 4.95536 8.7096 4.95536 10.0502C4.95536 11.3909 5.84375 12.6873 5.96429 12.869C6.08929 13.0507 7.70982 15.8007 10.1964 16.9842C11.7679 17.7306 12.3839 17.7944 13.1696 17.6667C13.6473 17.5882 14.6339 17.0087 14.8393 16.3703C15.0446 15.7319 15.0446 15.1868 14.9821 15.0739C14.9241 14.9511 14.7589 14.8824 14.5134 14.7498Z'
                  fill='#F2E6E6'
                />
              </svg>
            </a>
          </div>
          <p className='mt-8 text-base text-gray-400 md:mt-0 md:order-1'>
            &copy; 2021 Blisspath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
