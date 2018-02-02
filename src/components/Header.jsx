import React from 'react';

const Header = ({ title }) => (
  <div className="header">
    <h1 className="animate fadeInLeft one">{title}</h1>{console.log('Congratulations! You found me. For an extra artistic bonus, click on my nose on the About page.')}
    <span id="bars">
      <div className="bar light neonBars animate fadeInLeft one super" style={{ width: '10px' }} />
      <div className="bar light neonBars animate fadeInLeft one super" style={{ width: '40px' }} />
      <div className="bar light neonBars animate fadeInLeft one super" style={{ width: '80px' }} />
      <div className="bar light neonBars animate fadeInLeft one thick" style={{ width: '120px' }} />
      <div className="bar light neonBars animate fadeInLeft one thick" style={{ width: '160px' }} />
      <div className="bar light neonBars animate fadeInLeft one thick" style={{ width: '200px' }} />
      <div className="bar light neonBars animate fadeInLeft one thick" style={{ width: '240px' }} />
      <div className="bar light neonBars animate fadeInLeft one med" style={{ width: '280px' }} />
      <div className="bar light neonBars animate fadeInLeft one med" style={{ width: '320px' }} />
      <div className="bar light neonBars animate fadeInLeft one med" style={{ width: '360px' }} />
      <div className="bar light neonBars animate fadeInLeft one med" style={{ width: '420px' }} />
      <div className="bar light neonBars animate fadeInLeft one thin" style={{ width: '460px' }} />
      <div className="bar light neonBars animate fadeInLeft one thin" style={{ width: '500px' }} />
      <div className="bar light neonBars animate fadeInLeft one thin" style={{ width: '480px' }} />
      <div className="bar light neonBars animate fadeInLeft one med" style={{ width: '440px' }} />
      <div className="bar light neonBars animate fadeInLeft one med" style={{ width: '400px' }} />
      <div className="bar light neonBars animate fadeInLeft one med" style={{ width: '360px' }} />
      <div className="bar light neonBars animate fadeInLeft one thick" style={{ width: '320px' }} />
      <div className="bar light neonBars animate fadeInLeft one thick" style={{ width: '240px' }} />
      <div className="bar light neonBars animate fadeInLeft one super" style={{ width: '120px' }} />
      <div className="bar light neonBars animate fadeInLeft one super" style={{ width: '10px' }} />
    </span>
  </div>
);

export default Header;
