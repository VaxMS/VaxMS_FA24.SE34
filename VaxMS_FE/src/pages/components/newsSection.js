import React from 'react';

const NewsSection = () => {
  const news = [
    { id: 1, title: 'Cập nhật về tiêm vắc xin COVID-19', description: 'Thông tin mới nhất về vắc xin COVID-19...', image: '/assets/news1.png' },
    { id: 2, title: 'Tiêm chủng cho trẻ em', description: 'Lợi ích của việc tiêm chủng cho trẻ em...', image: '/assets/news2.png' }
  ];

  const healthTopics = [
    { id: 1, title: 'Vắc xin phế cầu có tác dụng gì?', description: 'Tìm hiểu về vắc xin phế cầu...', image: '/assets/health1.png' },
    { id: 2, title: 'Tiêm phế cầu 6in1 cho trẻ', description: 'Thông tin về vắc xin 6in1...', image: '/assets/health2.png' }
  ];

  return (
    <>
      <section className="news-section">
        <h2>Tin Tức</h2>
        <div className="news-cards">
          {news.map((item) => (
            <div className="news-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="health-section">
        <h2>Bệnh Học</h2>
        <div className="health-cards">
          {healthTopics.map((topic) => (
            <div className="health-card" key={topic.id}>
              <img src={topic.image} alt={topic.title} />
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewsSection;
