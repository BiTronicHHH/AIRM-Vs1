import React, { useState, useCallback } from 'react'
import Image from 'next/image';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components'
import Carousel from '../../dist/bundle'
// import Carousel from 'react-grid-carousel'


const CustomBtn = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100px;
  font-size: 20px;
  color: red;
  opacity: 0;
  cursor: pointer;
  top: 50%;
  z-index: 10;
  transition: all 0.25s;
  transform: ${({ type }) =>
    `translateY(-50%) ${type === 'left' ? 'rotate(180deg)' : ''}`};
  left: ${({ type }) => (type === 'left' ? '20px' : 'initial')};
  right: ${({ type }) => (type === 'right' ? '20px' : 'initial')};

  &:hover {
    background: #1151fd;
    color: #fff;
    opacity: 0.5;
  }
`

const CustomDot = styled.span`
  display: inline-block;
  height: 12px;
  margin: 0px 5px;
  width: ${({ isActive }) => (isActive ? '26px' : '12px')};
  opacity: ${({ isActive }) => (isActive ? '0.8' : '0.5')};
  border-radius: 8px;
  background: #1151fd;
  transition: all 0.2s;
  margin-top: 12px;
`

const items = [
  { id: 1, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 6, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 7, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 8, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 1, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 6, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 7, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 8, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 6, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 7, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 8, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 1, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 6, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 7, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 8, src: '/store.png', alt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

export default function DoubleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 2 : prevIndex - 2);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === items.length - 2 ? 0 : prevIndex + 2);
  };

  return (
    <div className="relative">
      <Carousel
        showDots
        cols={5}
        rows={2}
        mobileBreakpoint={499}
        arrowLeft={<CustomBtn type="left">➜</CustomBtn>}
        arrowRight={<CustomBtn type="right">➜</CustomBtn>}
        dot={CustomDot}
        responsiveLayout={[
          { breakpoint: 1000, cols: 3 },
          { breakpoint: 750, cols: 2, rows: 1, gap: 5 },
          { breakpoint: 499, autoplay: 2000, loop: true }
        ]}
      >
        {items.map((item, i) => (
          <Carousel.Item key={i}>
            <div className='w-full'>
              <img
                width="100%"
                src={item.src}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
