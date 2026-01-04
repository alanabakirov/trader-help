import React, { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './CartSlider.css';

export interface Slide {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function CardSlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="card-slider">
      
      <div className="card-slider_container">
        
        <button className="card-slider_button" onClick={prevSlide}>
          <ArrowLeftOutlined />
        </button>

        <div className="card-slider_window">
          <div className="card-slider_track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((slide) => (
              <div className="card-slider_slide" key={slide.id}>
                <div className="card-slider_content" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slide.image})` }}>
                  <h3 className="card-slider_title">{slide.title}</h3>
                  <p className="card-slider_text">{slide.description}</p>
                  <button className="card-slider_action"onClick={() => navigate(slide.link)}>Open Tool</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="card-slider_button" onClick={nextSlide}>
          <ArrowRightOutlined />
        </button>

      </div>
    </div>
  );
}