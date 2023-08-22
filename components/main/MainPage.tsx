import React from 'react'
import Slider from '../slide/Slider'

interface Props {
    category?: string;
    imageUrl: string;
    description: string;
    price: number;
}

export default function () {
    const freeRes = [
        { category: '', imageUrl: '/aiImage/1 (1).jfif', description: 'Blue Simple Drawings', price: 3.99 },
        { category: '', imageUrl: '/aiImage/1 (1).jpg', description: 'Blue Simple Drawings', price: 5.99 },
        { category: '', imageUrl: '/aiImage/1 (1).png', description: 'Blue Simple Drawings', price: 32.99 },
        { category: '', imageUrl: '/aiImage/1 (2).jfif', description: 'Blue Simple Drawings', price: 12.99 },
        { category: '', imageUrl: '/aiImage/1 (2).png', description: 'Blue Simple Drawings', price: 4.99 },
    ]
    const hotRes = [
        { category: '', imageUrl: '/aiImage/1 (3).jfif', description: 'Blue Simple Drawings', price: 23.99 },
        { category: '', imageUrl: '/aiImage/1 (3).png', description: 'Blue Simple Drawings', price: 32.99 },
        { category: '', imageUrl: '/aiImage/1 (4).jfif', description: 'Blue Simple Drawings', price: 12.99 },
        { category: '', imageUrl: '/aiImage/1 (19).jfif', description: 'Blue Simple Drawings', price: 4.99 },
        { category: '', imageUrl: '/aiImage/1 (5).jfif', description: 'Blue Simple Drawings', price: 52.99 },
        { category: '', imageUrl: '/aiImage/1 (6).jfif', description: 'Blue Simple Drawings', price: 1.99 },
    ]
    const chatRes = [
        { category: '', imageUrl: '/aiImage/1 (7).jfif', description: 'Blue Simple Drawings', price: 23.99 },
        { category: '', imageUrl: '/aiImage/1 (8).jfif', description: 'Blue Simple Drawings', price: 12.99 },
        { category: '', imageUrl: '/aiImage/1 (9).jfif', description: 'Blue Simple Drawings', price: 52.99 },
        { category: '', imageUrl: '/aiImage/1 (10).jfif', description: 'Blue Simple Drawings', price: 1.99 },
        { category: '', imageUrl: '/aiImage/1 (11).jfif', description: 'Blue Simple Drawings', price: 52.99 },
        { category: '', imageUrl: '/aiImage/1 (12).jfif', description: 'Blue Simple Drawings', price: 1.99 },
    ]
    const busiRes = [
        { category: '', imageUrl: '/aiImage/1 (13).jfif', description: 'Blue Simple Drawings', price: 23.99 },
        { category: '', imageUrl: '/aiImage/1 (14).jfif', description: 'Blue Simple Drawings', price: 12.99 },
        { category: '', imageUrl: '/aiImage/1 (15).jfif', description: 'Blue Simple Drawings', price: 52.99 },
        { category: '', imageUrl: '/aiImage/1 (16).jfif', description: 'Blue Simple Drawings', price: 1.99 },
        { category: '', imageUrl: '/aiImage/1 (17).jfif', description: 'Blue Simple Drawings', price: 52.99 },
        { category: '', imageUrl: '/aiImage/1 (18).jfif', description: 'Blue Simple Drawings', price: 1.99 },
        { category: '', imageUrl: '/aiImage/1 (19).jfif', description: 'Blue Simple Drawings', price: 1.99 },
    ]
    return (
        <div className='w-full bg-[white] font-Urbansit flex flex-col gap-5 py-8'>
            <div className='w-full flex flex-col'>
                <div className='mx-4 w-full pb-2 font-semibold text-2xl text-[#555] border-b-2 border-b-[#555]'>
                    Free Resources Daily
                </div>
                <Slider compArray={freeRes} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='mx-4 w-full pb-2 font-semibold text-2xl text-[#555] border-b-2 border-b-[#555]'>
                    Hottest MidJourney prompts
                </div>
                <Slider compArray={hotRes} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='mx-4 w-full pb-2 font-semibold text-2xl text-[#555] border-b-2 border-b-[#555]'>
                    Hottest Chat GPT prompts
                </div>
                <Slider compArray={chatRes} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='mx-4 w-full pb-2 font-semibold text-2xl text-[#555] border-b-2 border-b-[#555]'>
                    Latest MidJourney prompts
                </div>
                <Slider compArray={busiRes} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='mx-4 w-full pb-2 font-semibold text-2xl text-[#555] border-b-2 border-b-[#555]'>
                    Latest Chat GPT prompts
                </div>
                <Slider compArray={freeRes} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='mx-4 w-full pb-2 font-semibold text-2xl text-[#555] border-b-2 border-b-[#555]'>
                    Realistic
                </div>
                <Slider compArray={hotRes} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='mx-4 w-full pb-2 font-semibold text-2xl text-[#555] border-b-2 border-b-[#555]'>
                    Business
                </div>
                <Slider compArray={chatRes} />
            </div>
        </div>
    )
}
