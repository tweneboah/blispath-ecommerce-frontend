import React from 'react';

const ShippingPolicy = () => {
  return (
    <div>
      <div>
        <div className='text-center h-min-screen m-4'>
          <p className='text-lg font-bold mb-3 mt-6'>
            Shipping and return Policy
          </p>
          <ul className='mb-4'>
            <li className='pb-2'>
              Our products in stock in our warehouse (Ghana) will shipped within
              24 business hours.
            </li>
            <li>
              {' '}
              Goods yet to be shipped from China after ordering, takes 2-3 days
              to process.
            </li>
            <li>
              Your order will be assigned a tracking number and it can be
              tracked on our website.
            </li>
            <li>
              You will be emailed or WhatsApp to a confirmation that your order
              has shipped along with the tracking number.
            </li>

            <li>
              You can also log into your account to view the tracking number.
            </li>
            <li>Goods are shipped strictly to Ghana for now</li>
            <li>
              For other countries, please give us a call or WhatsApp us on at +
              <span class='text-blue-500'>8617805016400.</span>
            </li>
            <li>
              We provide shipping to Ghana for free via sea. Depending on what
              you are ordering it takes between 35 to 55 days to deliver. •
              Sometimes delivery may delay due to certain inconveniences which
              may be beyond our control. Please be patient within that time, we
              will do all we can for you to get your orders.
            </li>
          </ul>

          <p className='text-lg font-bold'>Shipping options</p>

          <li>• Free shipping/ Sea: 35-55 days</li>
          <li>• Express/ Air shipping: 7-14 days</li>
          <p>Please refer to our terms and conditions for more information.</p>

          <p className='text-lg font-bold mb-3'>Return Policy</p>
          <p className='text-lg font-bold mb-3'>Please Note: </p>
          <ul>
            <li>Orders can only be return</li>
            <li>
              if we made a mistake in your order including size, color, etc.{' '}
            </li>

            <li>
              If you do not like the product you ordered because it did not meet
              your satisfaction, please read our Terms & Conditions page.{' '}
            </li>

            <li> We have sevens (7) days return policy.</li>
            <li>after the seven days we cannot accept any returns.</li>
            <li>
              Any product you want to return should have it original box and
              everything should be intact as received.
            </li>
            <li>
              If you want us to change the product for you, we will do so.
            </li>
            <li>
              If you want your money back, we will do so after product have been
              received and checked.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
