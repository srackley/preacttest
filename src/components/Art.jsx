import React from 'react';
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
  {
    src: '/portfolio/28.jpg',
    width: 7,
    height: 5,
  },
  {
    src: '/portfolio/01.jpg',
    width: 7,
    height: 5,
  },
  {
    src: '/portfolio/25.jpg',
    width: 6,
    height: 7,
  },
  {
    src: '/portfolio/05.jpg',
    width: 5,
    height: 7,
  },
  {
    src: '/portfolio/03.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/portfolio/04.jpg',
    width: 5,
    height: 7,
  },
  {
    src: '/portfolio/26.jpg',
    width: 7,
    height: 5,
  },
  {
    src: '/portfolio/06.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/portfolio/24.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/portfolio/02.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/portfolio/35.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/portfolio/34.jpg',
    width: 3,
    height: 5,
  },
  {
    src: '/portfolio/18.jpg',
    width: 5,
    height: 7,
  },
  {
    src: '/portfolio/07.jpg',
    width: 7,
    height: 5,
  },
  {
    src: '/portfolio/23.jpg',
    width: 5,
    height: 7,
  },
  {
    src: '/portfolio/31.jpg',
    width: 3,
    height: 2,
  },
  {
    src: '/portfolio/08.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/portfolio/09.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/portfolio/14.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/portfolio/12.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/portfolio/33.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/portfolio/29.jpg',
    width: 7,
    height: 5,
  },
  {
    src: '/portfolio/11.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/portfolio/16.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/portfolio/17.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/portfolio/32.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/portfolio/15.jpg',
    width: 5,
    height: 7,
  },
  {
    src: '/portfolio/36.jpg',
    width: 3,
    height: 2,
  },
  {
    src: '/portfolio/10.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/portfolio/19.jpg',
    width: 4,
    height: 3,
  },
  {
    src: '/portfolio/21.jpg',
    width: 3,
    height: 4,
  },
  {
    src: '/portfolio/13.jpg',
    width: 5,
    height: 7,
  },
  {
    src: '/portfolio/20.jpg',
    width: 7,
    height: 5,
  },
  {
    src: '/portfolio/27.jpg',
    width: 7,
    height: 5,
  },
  {
    src: '/portfolio/22.jpg',
    width: 7,
    height: 5,
  },
  {
    src: '/portfolio/30.jpg',
    width: 3,
    height: 4,
  },
];

const Art = () => (
  <div>
    {console.log('%c Yay! You found my artwork. Bathe in the beauty of my work.', 'font-family: Verdana; line-height: 32px; font-size:20px;color:#fff;text-shadow:0 1px 0#ccc,0 2px 0  #c9c9c9 ,0 3px 0  #bbb ,0 4px 0  #b9b9b9 ,0 5px 0  #aaa ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);')}
    <div style={{ height: '100px' }} />
    <Gallery photos={PHOTO_SET} />
  </div>
);

export default Art;
