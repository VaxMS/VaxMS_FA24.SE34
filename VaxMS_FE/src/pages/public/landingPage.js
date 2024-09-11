import React from 'react';
import { Link } from 'react-router-dom';
import VaccineSection from '../components/vaccineSection';
import ServiceSection from '../components/serviceSection';
import NewsSection from '../components/newsSection';
import ChatBox from '../components/chatbox';

import '../../layout/customer/styles/landingPage.css';

const LandingPage = () => {
  return (
    <div className="container-web">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to VaxMS</h1>
          <p>Your trusted vaccine management system. Register and track your vaccinations with ease.</p>
        </div>
        <div className="hero-image">
          <img src="../../../assets/banner10.png" alt="Vaccine" />

        </div>
      </div>



      <VaccineSection />
      <ServiceSection />
      <NewsSection />

      {/* Chat with Staff Section */}


      <ChatBox />
    </div>
  );
};

export default LandingPage;
