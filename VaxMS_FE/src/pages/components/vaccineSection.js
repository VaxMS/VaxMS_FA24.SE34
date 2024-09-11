import React from 'react';
import { Link } from 'react-router-dom';

const VaccineSection = () => {
  const vaccines = [
    { id: 1, name: 'Vắc xin Pfizer', description: 'Vắc xin ngừa COVID-19', image: '../../../assest/images/prizer.jpg' },
    { id: 2, name: 'Vắc xin Moderna', description: 'Vắc xin ngừa COVID-19', image: '/assets/moderna.png' },
    { id: 3, name: 'Vắc xin AstraZeneca', description: 'Vắc xin ngừa COVID-19', image: '/assets/astrazeneca.png' },
    { id: 4, name: 'Vắc xin Sputnik V', description: 'Vắc xin ngừa COVID-19', image: '/assets/sputnik.png' },
    { id: 5, name: 'Vắc xin J&J', description: 'Vắc xin ngừa COVID-19', image: '/assets/jj.png' },
    { id: 6, name: 'Vắc xin Sinovac', description: 'Vắc xin ngừa COVID-19', image: '/assets/sinovac.png' },
    { id: 7, name: 'Vắc xin Sinopharm', description: 'Vắc xin ngừa COVID-19', image: '/assets/sinopharm.png' },
    { id: 8, name: 'Vắc xin Covaxin', description: 'Vắc xin ngừa COVID-19', image: '/assets/covaxin.png' }
  ];

  return (
    <section className="vaccine-section">
      <h2>Danh Mục Vaccine Nổi Bật</h2>
      <div className="vaccine-cards">
        {vaccines.map((vaccine) => (
          <div className="vaccine-card" key={vaccine.id}>
            <img src={vaccine.image} alt={vaccine.name} />
            <h3>{vaccine.name}</h3>
            <p>{vaccine.description}</p>
          </div>
        ))}
      </div>
      <div className="view-all">
        <Link to="/danh-sach-vaccine">Xem tất cả</Link>
      </div>
    </section>
  );
};

export default VaccineSection;
