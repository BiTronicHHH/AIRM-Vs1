"use client"
import React from 'react'
import RecentArticles from './RecentArticles';
import SwiperCarousel from './SwiperCarousel';

interface Props {
    title: string;
    desc: string;
    author: string;
    url: string;
}

const Individual: React.FC<Props> = ({ title, author, desc, url }) => {
    return (
        <div className='w-full flex flex-col font-header relative shadow-card-upload-black h-full lg:py-36 md:py-24 py-20 md:px-20 px-8'>
            <img className='absolute top-0 left-0 h-full w-full' src='/UnicornGradients/4.jpg' />
            <div className='absolute top-0 left-0 h-full w-full bg-[#00000081] z-[5]'></div>
            <div className='w-full flex justify-between z-10 h-full pr-10'>
                <div className='flex flex-col md:mr-16'>
                    <div className='w-full text-5xl font-semibold text-[transparent] bg-clip-text bg-gradient-to-r from-[#01dcff] to-[#fe01d4] text-glow'>
                        {title}
                    </div>
                    <div className='mt-3 text-custom-sky text-lg mb-8'>
                        By <span className='text-white text-xl font-semibold italic'>{author}</span> published 1 day ago
                    </div>
                    <div>
                        <img src={url} className=' aspect-video w-full shadow-card-upload-black rounded-3xl border-2 border-white p-1 object-cover object-center' />
                    </div>
                    <div className='text-white text-lg mt-3'>
                        {desc}
                    </div>
                </div>
                <div className='w-full flex-shrink-0 md:w-[30%] min-h-full'></div>
            </div>
            <div className='w-full flex justify-center items-center z-10 mt-32'>
                <div className='text-5xl font-semibold text-[transparent] bg-clip-text bg-gradient-to-r from-[#01dcff] to-[#fe01d4] '>Most Popular Articles</div>
            </div>
            <SwiperCarousel />
            <RecentArticles />
        </div>
    )
}

export default Individual;