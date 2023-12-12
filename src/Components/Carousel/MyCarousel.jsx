import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles


const MyCarousel = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className=''>
      <Carousel autoPlay infiniteLoop interval={2000} showStatus={false}>
        {
          categories?.map((category, idx) =>
            <div key={idx} className='h-[30vh] md:h-[75vh]'>
              <img className='h-full' src={category?.photo} alt="Slide 1" />
            </div>)
        }
      </Carousel>
    </div>
  );
};

export default MyCarousel;
