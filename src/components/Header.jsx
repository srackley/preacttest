import React from 'react';

const Header = ({ title }) => (
  <div className="header">
    <h1 className="animate fadeInLeft one">{title}</h1>{console.log('%c Congratulations! \n You found me. For an extra artistic bonus, click on my nose on the About page.', 'font-family: Verdana; line-height: 32px; font-size:20px;color:#fff;text-shadow:0 1px 0#ccc,0 2px 0  #c9c9c9 ,0 3px 0  #bbb ,0 4px 0  #b9b9b9 ,0 5px 0  #aaa ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);')}
    <span id="bars">
      <div className="bar light neonBars animate one super" style={{ width: '10px' }} />
      <div className="bar light neonBars animate one super" style={{ width: '40px' }} />
      <div className="bar light neonBars animate one super" style={{ width: '80px' }} />
      <div className="bar light neonBars animate one thick" style={{ width: '120px' }} />
      <div className="bar light neonBars animate one thick" style={{ width: '160px' }} />
      <div className="bar light neonBars animate one thick" style={{ width: '200px' }} />
      <div className="bar light neonBars animate one thick" style={{ width: '240px' }} />
      <div className="bar light neonBars animate one med" style={{ width: '280px' }} />
      <div className="bar light neonBars animate one med" style={{ width: '320px' }} />
      <div className="bar light neonBars animate one med" style={{ width: '360px' }} />
      <div className="bar light neonBars animate one med" style={{ width: '420px' }} />
      <div className="bar light neonBars animate one thin" style={{ width: '460px' }} />
      <div className="bar light neonBars animate one thin" style={{ width: '500px' }} />
      <div className="bar light neonBars animate one thin" style={{ width: '480px' }} />
      <div className="bar light neonBars animate one med" style={{ width: '440px' }} />
      <div className="bar light neonBars animate one med" style={{ width: '400px' }} />
      <div className="bar light neonBars animate one med" style={{ width: '360px' }} />
      <div className="bar light neonBars animate one thick" style={{ width: '320px' }} />
      <div className="bar light neonBars animate one thick" style={{ width: '240px' }} />
      <div className="bar light neonBars animate one super" style={{ width: '120px' }} />
      <div className="bar light neonBars animate one super" style={{ width: '10px' }} />
    </span>
  </div>
);

export default Header;
