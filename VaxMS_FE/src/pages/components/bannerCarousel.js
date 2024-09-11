import React from 'react';
import Slider from 'react-slick';

const BannerCarousel = () => {
  const settings = {
    dots: true, // Hiển thị các dấu chấm bên dưới để chỉ trang
    infinite: true, // Vòng lặp vô tận
    speed: 500, // Tốc độ chuyển đổi
    slidesToShow: 1, // Hiển thị 1 ảnh mỗi lần
    slidesToScroll: 1, // Chuyển 1 ảnh mỗi lần
    autoplay: true, // Tự động chuyển ảnh
    autoplaySpeed: 3000, // Thời gian tự động chuyển (3 giây)
    nextArrow: <NextArrow />, // Mũi tên chuyển tiếp
    prevArrow: <PrevArrow />, // Mũi tên quay lại
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="path-to-your-banner-image1.jpg" alt="Banner 1" />
        </div>
        <div>
          <img src="path-to-your-banner-image2.jpg" alt="Banner 2" />
        </div>
        <div>
          <img src="path-to-your-banner-image3.jpg" alt="Banner 3" />
        </div>
      </Slider>
    </div>
  );
};

// Mũi tên bên phải (next arrow)
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClick}
    />
  );
};

// Mũi tên bên trái (prev arrow)
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClick}
    />
  );
};

export default BannerCarousel;
