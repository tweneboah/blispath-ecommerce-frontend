import '../styles/slider.css';
const HomeSlider = () => {
  return (
    <div class='slideshowsection'>
      <div
        data-delay='3000'
        data-animation='over'
        data-autoplay='1'
        data-duration='300'
        data-infinite='1'
        class='slider w-slider'>
        <div class='w-slider-mask'>
          <div class='slide w-slide'></div>
          <div class='slide-2 w-slide'></div>
          <div class='slide-3 w-slide'></div>
        </div>
        <div class='w-slider-arrow-left'>
          <div class='w-icon-slider-left'></div>
        </div>
        <div class='w-slider-arrow-right'>
          <div class='w-icon-slider-right'></div>
        </div>
        <div class='w-slider-nav w-round'></div>
      </div>
    </div>
  );
};

export default HomeSlider;
