import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles


const MyCarousel = () => {
  

  return (
    <div className=''>
      <Carousel autoPlay infiniteLoop interval={2000} showStatus={false}>
        <div className='h-[75vh]'>
          <img src='https://i.ibb.co/71FfCf8/Fashion-C-1.jpg' alt="Slide 1" />
        </div>
        <div className='h-[75vh]'>
          <img className='h-full' src='https://i.ibb.co/0JBjf9J/carousel-2.jpg' alt="Slide 1" />
        </div>
        <div className='h-[75vh]'>
          <img src='https://i.ibb.co/ZBr73CP/carousel-3.jpg' alt="Slide 1" />
        </div>
        <div className='h-[75vh]'>
          <img src='https://i.ibb.co/PNtF3TW/Fashion-C-3.png' alt="Slide 1" />
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
