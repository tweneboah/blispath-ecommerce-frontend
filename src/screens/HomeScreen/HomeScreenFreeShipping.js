import React from 'react';

import img from '../../images/happy3-p-1080.png';
import shippingSvg from '../../images/shipping2.svg';

const HomeScreenFreeShipping = () => {
  return (
    <div className='free_shipping_section'>
      <div className='w-layout-grid free_shipping_grid'>
        <div className='free_shipping_second_div'>
          <h1 className='text-4xl mb-5 font-semibold mt-5 text-gray-400'>
            Free Shipping
          </h1>
          <p className='text-lg p-2 text-gray-400 pt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <img src={img} alt='shipping' className='free_shipping_img' />
        </div>
        <div className='shippingdetails bg-black'>
          <h3 className='text-4xl mb-5 font-semibold mt-5 text-gray-400'>
            Shipping Methods
          </h3>
          <div>
            <img src={shippingSvg} className='h-96' />
          </div>
          <div className='shippingdetailsdiv'>
            <h3 className='text-4xl mb-5 font-semibold mt-5 text-gray-400 text-center'>
              Free shipping
            </h3>

            <p className='paragraph text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className='shippingdetailsdiv'>
            <h3 className='text-4xl mb-5 font-semibold mt-5 text-gray-400 text-center'>
              Free shipping
            </h3>
            <p className='paragraph-2 pb-11 text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenFreeShipping;
