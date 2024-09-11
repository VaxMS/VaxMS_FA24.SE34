import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assest/images/vnvc-logo.png';
import '../styles/styleuser.scss';

function Header() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleFocus = () => setShowSuggestions(true);
  const handleBlur = () => setTimeout(() => setShowSuggestions(false), 200);

  return (
    <>
      <div id="headerweb">
        <div className="container-web">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img src={logo} className="imagelogoheader" alt="VNVC Logo" />
              </a>
              {/* Search Bar */}
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Tìm kiếm vaccine theo tên, độ tuổi, nhà sản xuất..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
                {showSuggestions && (
                  <div className="search-suggestions">
                    <h5>Gợi ý vaccine</h5>
                    <div className="suggestions-list">
                      <span>Pfizer</span>
                      <span>Moderna</span>
                      <span>Sinopharm</span>
                      <span>AstraZeneca</span>
                      <span>J&J</span>
                      <span>Sputnik V</span>
                      <span>Covaxin</span>
                    </div>
                  </div>
                )}
              </div>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse">
                <div className="d-flex">
                  <Link to="/dang-ky-tiem-chung" className="itemheader itemtopheader">
                    <i className="fa fa-calendar"></i> Đăng ký tiêm
                  </Link>
                  <a href="tel:02871026595" className="itemheader itemtopheader hotlineheader">
                    Hotline: 028 7102 6595
                  </a>
                  <Link to="/login" className="itemheader itemtopheader hotlineheader">
                    Đăng nhập
                  </Link>
                </div>

              </div>
            </div>
          </nav>
        </div>
        <hr className='hrheader-web' />
        <div className="container-web container-bottom-header">
          <a href="/" className="itemheader">Trang chủ</a>
          <a href="" className="itemheader">Giới thiệu</a>
          <a href="" className="itemheader">Vắc xin trẻ em</a>
          <a href="" className="itemheader">Vắc xin người lớn</a>
          <a href="" className="itemheader">Gói vắc xin</a>
          <a href="" className="itemheader">Cẩm nang</a>
          <a href="" className="itemheader">Bảng giá</a>
          <a href="" className="itemheader">Bệnh học</a>
          <a href="" className="itemheader">Tin tức</a>
        </div>
      </div>
    </>
  );
}

export default Header;
