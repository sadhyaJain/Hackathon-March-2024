// import React from 'react';
// import Slider from 'react-slick';

// const SimpleCarousel = () => {
//   const cards = [
//     {
//       title: 'Card 1',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Card+1',
//     },
//     {
//       title: 'Card 2',
//       content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Card+2',
//     },
//     {
//       title: 'Card 3',
//       content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Card+3',
//     },
//     {
//       title: 'Card 4',
//       content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Card+4',
//     },
//     {
//       title: 'Card 5',
//       content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Card+5',
//     },
//     {
//       title: 'Card 6',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       imageUrl: 'https://via.placeholder.com/300x200?text=Card+6',
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       }
//     ]
//   };

//   const carouselHeight = `${(window.innerHeight / 4)}px`; // Calculate carousel height as 1/4th of the viewport height

//   return (<>
//     <div style={{ height: carouselHeight, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <Slider {...settings}>
//         {cards.map((card, index) => (
//           <div key={index} style={{ textAlign: 'center', width: '50%', margin: '0 auto' }}>
//             <img src={card.imageUrl} alt={card.title} style={{ width: '100%', height: 'auto' }} />
//             <div style={{ padding: '20px' }}>
//               <h5 style={{ margin: '0' }}>{card.title}</h5>
//               <p style={{ margin: '0' }}>{card.content}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div></>
//   );
// };
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const ServiceCarousel = () => {
//   const services = [
//     {
//       title: 'Courses',
//       image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       link: 'https://yourwebsite.com/service1',
//     },
//     {
//       title: 'Downloads',
//       image: 'https://plus.unsplash.com/premium_photo-1684522168034-32f22b4b7eef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       link: 'https://yourwebsite.com/service2',
//     },
//     {
//       title: 'Edit info',
//       image: 'https://plus.unsplash.com/premium_photo-1661582351565-9ef475b8df9e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       link: 'https://yourwebsite.com/service3',
//     },

//     {
//         title: 'Your courses list',
//         image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         link: 'https://yourwebsite.com/service1',
//       },

//       {
//         title: 'Our best picks',
//         image: 'https://media.istockphoto.com/id/607301436/photo/choosing-the-key-to-success.webp?b=1&s=170667a&w=0&k=20&c=y3W9YiywqRw250ypEd44G3dA4_cPrGd9ImfeOsCg7lg=',
//         link: 'https://yourwebsite.com/service1',
//       },

//       {
//         title: 'Your Benefits',
//         image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVuZWZpdHN8ZW58MHx8MHx8fDA%3D',
//         link: 'https://yourwebsite.com/service1',
//       },


//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const carouselHeight = `${(window.innerHeight * 0.6)}px`; // Calculate carousel height as 60% of the viewport height

//   return (
//     <div style={{ height: carouselHeight }}>
//       <Slider {...settings}>
//         {services.map((service, index) => (
//           <div key={index}>
//             <a href={service.link} target="_blank" rel="noopener noreferrer">
//               <img src={service.image} alt={service.title} style={{ width: '50%', height: '100%' }} />
//               <h3>{service.title}</h3>
//             </a>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ServiceCarousel;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServiceCarousel = () => {
  const services = [
    {
      title: 'Courses',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://yourwebsite.com/service1',
    },
    {
      title: 'Downloads',
      image: 'https://plus.unsplash.com/premium_photo-1684522168034-32f22b4b7eef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://yourwebsite.com/service2',
    },
    {
      title: 'Edit info',
      image: 'https://plus.unsplash.com/premium_photo-1661582351565-9ef475b8df9e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://yourwebsite.com/service3',
    },
    {
      title: 'Your courses list',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://yourwebsite.com/service1',
    },
    {
      title: 'Our best picks',
      image: 'https://media.istockphoto.com/id/607301436/photo/choosing-the-key-to-success.webp?b=1&s=170667a&w=0&k=20&c=y3W9YiywqRw250ypEd44G3dA4_cPrGd9ImfeOsCg7lg=',
      link: 'https://yourwebsite.com/service1',
    },
    {
      title: 'Your Benefits',
      image: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVuZWZpdHN8ZW58MHx8MHx8fDA%3D',
      link: 'https://yourwebsite.com/service1',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index} className="carousel-item">
            <a href={service.link} target="_blank" rel="noopener noreferrer">
              <img src={service.image} alt={service.title} className="carousel-image" />
              <h3>{service.title}</h3>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;
