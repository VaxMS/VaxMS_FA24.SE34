const NewsCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Hiển thị 3 bài báo cùng lúc
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  
    return (
      <div className="news-carousel">
        <Slider {...settings}>
          <div className="news-item">
            <img src="path-to-your-news-image1.jpg" alt="News 1" />
            <h3>Tiêu đề tin tức 1</h3>
            <p>Mô tả tin tức 1...</p>
          </div>
          <div className="news-item">
            <img src="path-to-your-news-image2.jpg" alt="News 2" />
            <h3>Tiêu đề tin tức 2</h3>
            <p>Mô tả tin tức 2...</p>
          </div>
          <div className="news-item">
            <img src="path-to-your-news-image3.jpg" alt="News 3" />
            <h3>Tiêu đề tin tức 3</h3>
            <p>Mô tả tin tức 3...</p>
          </div>
          {/* Thêm các bài báo khác */}
        </Slider>
      </div>
    );
  };
  