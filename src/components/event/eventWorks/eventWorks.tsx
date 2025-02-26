import { useRef, useState } from 'react';
import './eventWorks.scss';
import { Fade } from 'react-awesome-reveal';
import { useWorksPopUp } from '../../../hooks/useWorksPopUp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function EventWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { handleToggleWorksPopUp, worksList, handleSetSelectedWorkIndex } =
    useWorksPopUp();
  const sliderRef = useRef<Slider>(null);

  const visibleWorks = 3;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? worksList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === worksList.length - visibleWorks + 2;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const openWorksPopUp = (index: number) => {
    handleSetSelectedWorkIndex(index);
    handleToggleWorksPopUp(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="event-works">
        <Fade direction="left" triggerOnce>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="56"
            viewBox="0 0 33 56"
            fill="none"
            className="left-arrow"
            onClick={() => goToPrevious()}
          >
            <path
              d="M30.5 2.5L5 28L30.5 53.5"
              stroke="white"
              stroke-width="7"
            />
          </svg>
        </Fade>
        <div className="carousel-slide-container">
          <Fade direction="up" delay={200} triggerOnce>
            <div
              className="carousel-slide"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleWorks)
                }%)`,
              }}
            >
              {worksList.map((work, index) => (
                <div
                  className="image-wrapper"
                  key={index}
                  onClick={() => openWorksPopUp(index)}
                >
                  <div className="image-container">
                    <img
                      src={work.work_main_image || '/work.jpg'}
                      alt={`Slide ${index}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
        <Fade direction="right" triggerOnce>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="56"
            viewBox="0 0 34 56"
            fill="none"
            className="right-arrow"
            onClick={() => goToNext()}
          >
            <path d="M3 53.5L28.5 28L3 2.5" stroke="white" stroke-width="7" />
          </svg>
        </Fade>
      </div>
      <div className="event-works-mobile">
        <Slider ref={sliderRef} {...settings}>
          {worksList.map((work, index) => (
            <div
              key={index}
              className="image-container"
              onClick={() => openWorksPopUp(index)}
            >
              <img
                src={`${work.work_main_image || '/work.jpg'}`}
                alt="imagen"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
