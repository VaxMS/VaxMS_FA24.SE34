import React from 'react';

const ServiceSection = () => {
  const services = [
    { id: 1, name: 'Tiêm chủng theo yêu cầu', image: '/assets/service1.png' },
    { id: 2, name: 'Tiêm cho người chuẩn bị mang thai', image: '/assets/service2.png' },
    { id: 3, name: 'Tiêm trọn gói cho người lớn', image: '/assets/service3.png' },
    { id: 4, name: 'Tiêm trọn gói cho trẻ em', image: '/assets/service4.png' }
  ];

  return (
    <section className="service-section">
      <h2>Dịch Vụ Tiêm Chủng</h2>
      <div className="service-cards">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
