import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SliderComp from './SliderComp';

interface Props {
    category?: string;
    imageUrl: string;
    description: string;
    price: number;
}

const Slider: React.FC<{ compArray: Props[] }> = ({compArray}) => {
        const renderArrowPrev = (onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined, hasPrev: any, label: string | undefined) =>
            hasPrev && (
                <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="absolute slideBtn right-[120px] z-10 bottom-0 rounded-xl bg-[#FE9800] w-12 h-12 flex justify-center items-center"
                >
                    <FaChevronLeft />
                </button>
            );

        const renderArrowNext = (onClickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined, hasNext: any, label: string | undefined) =>
            hasNext && (
                <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    className="absolute slideBtn right-10 bottom-0 z-10 rounded-xl bg-[#FE9800] w-12 h-12 flex justify-center items-center"
                >
                    <FaChevronRight />
                </button>
            );
        return (
            <div className='flex w-full items-center flex-col py-5'>
                <div className='w-full relative'>
                    <Carousel
                        renderArrowPrev={renderArrowPrev}
                        renderArrowNext={renderArrowNext}
                        showIndicators={false}
                        infiniteLoop={true}
                        showStatus={false}
                        showThumbs={false}
                        autoFocus={true}
                        interval={2000}
                    >
                        {/* Add your carousel slides here */}
                        {compArray.map((comp, i) => (
                            <SliderComp key={i} category={comp.category} imageUrl={comp.imageUrl} description={comp.description} price={comp.price}/>
                        ))}
                    </Carousel>
                </div>
            </div>
        )
    }


export default Slider;