const HomeSlider = () => {
  return (
    <div
      id='carouselExampleDark'
      className='carousel carousel-dark slide'
      data-bs-ride='carousel'>
      <ol className='carousel-indicators'>
        <li
          data-bs-target='#carouselExampleDark'
          data-bs-slide-to='0'
          className='active'></li>
        <li data-bs-target='#carouselExampleDark' data-bs-slide-to='1'></li>
        <li data-bs-target='#carouselExampleDark' data-bs-slide-to='2'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active' data-bs-interval='10000'>
          <img
            src='https://cdn.pixabay.com/photo/2015/08/14/08/34/business-888146_1280.jpg'
            className='d-block w-100'
            alt='slide 1'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className='carousel-item' data-bs-interval='2000'>
          <img
            src='https://cdn.pixabay.com/photo/2019/08/01/04/32/girl-4376612_1280.jpg'
            className='d-block w-100'
            alt='slide 2'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            src='https://cdn.pixabay.com/photo/2015/09/18/11/35/vinyl-records-945396_1280.jpg'
            className='d-block w-100'
            alt='slide 3'
          />
          <div className='carousel-caption d-none d-md-block'>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href='#carouselExampleDark'
        role='button'
        data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleDark'
        role='button'
        data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </a>
    </div>
  );
};

export default HomeSlider;
