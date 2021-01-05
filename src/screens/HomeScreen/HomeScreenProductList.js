import React from 'react';
import '../../styles/HomeScreenProductList.css';
import img from '../../images/p1-p-1080.jpeg';
const HomeScreenProductList = () => {
  return (
    <div class='home_product_list_grid_section'>
      <div class='home_product_list_title_div w-container'>
        <h1 class='product_heading'>Latest Products</h1>
      </div>
      <div class='w-layout-grid home_product_list_grid'>
        <div class='home_product_list_item_wrapper'>
          <img src={img} alt='' class='product_img' />
          <h1 class='product_title'>iphone 8</h1>
          <p class='product_desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <h1 class='product_price'>GHS 200</h1>
          <div class='new_product_tag'>New </div>
        </div>
        <div class='home_product_list_item_wrapper'>
          <img src={img} alt='' class='product_img' />
          <h1 class='product_title'>iphone 8</h1>
          <p class='product_desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <h1 class='product_price'>GHS 200</h1>
          <div class='new_product_tag'>New </div>
        </div>
        <div class='home_product_list_item_wrapper'>
          <img src={img} alt='' class='product_img' />
          <h1 class='product_title'>iphone 8</h1>
          <p class='product_desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <h1 class='product_price'>GHS 200</h1>
          <div class='new_product_tag'>New </div>
        </div>
        <div class='home_product_list_item_wrapper'>
          <img src={img} alt='' class='product_img' />
          <h1 class='product_title'>iphone 8</h1>
          <p class='product_desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <h1 class='product_price'>GHS 200</h1>
          <div class='new_product_tag'>New </div>
        </div>
        <div class='home_product_list_item_wrapper'>
          <img src={img} alt='' class='product_img' />
          <h1 class='product_title'>iphone 8</h1>
          <p class='product_desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <h1 class='product_price'>GHS 200</h1>
          <div class='new_product_tag'>New </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenProductList;
