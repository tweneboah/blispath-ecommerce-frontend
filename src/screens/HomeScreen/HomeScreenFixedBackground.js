import React from 'react';
import '../../styles/HomeScreenFixedBackground.css';
const HomeScreenFixedBackground = () => {
  return (
    <>
      <div class='homescreen_fixed_bg '></div>
      <div class='w-layout-grid home_screen_big_grid'>
        <div
          id='w-node-fd6f59dd2b73-6ce95aa1'
          class='homescreen_big_img_column'></div>
        <div class='homescreen_big_image_text'>
          <h1 class='big_img_text'>99 % off</h1>
          <p class='big_img_desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
      <div class='w-layout-grid money_back_grid '>
        <div class='money_back_img'>
          {/* <h1 class='heading-2'>30 days money back. No question ask</h1> */}
        </div>
        <div class='money_back_text_column'>
          <a href='#' class='big_img_button w-button'>
            Shop Now
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeScreenFixedBackground;
