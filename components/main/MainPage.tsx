import React from 'react'
import Slider from '../slide/Slider'
import Title from './Title'
import TitleSecond from './TitleSecond'
import Link from 'next/link'

export default function MainPage () {
    const freeRes = [
        { category: '', imageUrl: ['/aiImage/1 (1).jfif', '/aiImage/1 (1).jpg', '/aiImage/1 (1).png', '/aiImage/1 (11).jfif' ], description: 'Blue Simple Drawings', sales: 3 , thumb: 3},
        { category: '', imageUrl: ['/aiImage/1 (19).jfif', '/aiImage/1 (1).jpg', '/aiImage/1 (1).png', '/aiImage/1 (11).jfif' ], description: 'Blue Simple Drawings', sales: 5 , thumb: 4},
        { category: '', imageUrl: ['/aiImage/1 (4).jfif', '/aiImage/1 (1).jpg', '/aiImage/1 (1).png', '/aiImage/1 (11).jfif' ], description: 'Blue Simple Drawings', sales: 32, thumb: 3 },
        { category: '', imageUrl: ['/aiImage/1 (11).jfif', '/aiImage/1 (1).jpg', '/aiImage/1 (1).png', '/aiImage/1 (11).jfif' ], description: 'Blue Simple Drawings', sales: 12, thumb: 23 },
        { category: '', imageUrl: ['/aiImage/1 (2).png', '/aiImage/1 (1).jpg', '/aiImage/1 (1).png', '/aiImage/1 (11).jfif' ], description: 'Blue Simple Drawings', sales: 4 , thumb: 31},
    ]
    const hotRes = [
        { category: '', imageUrl: ['/aiImage/1 (3).jfif', '/aiImage/1 (1).jpg', '/aiImage/1 (1).png', '/aiImage/1 (11).jfif' ], description: 'Blue Simple Drawings', sales: 23, thumb: 3 },
        { category: '', imageUrl: ['/aiImage/1 (1).jfif', '/aiImage/1 (1).jpg', '/aiImage/1 (3).png', '/aiImage/1 (11).jfif' ], description: 'Blue Simple Drawings', sales: 32, thumb: 32 },
        { category: '', imageUrl: ['/aiImage/1 (4).jfif', '/aiImage/1 (1).jpg', '/aiImage/1 (1).png', '/aiImage/1 (3).jfif' ], description: 'Blue Simple Drawings', sales: 12, thumb: 23 },
        { category: '', imageUrl: ['/aiImage/1 (6).jfif', '/aiImage/1 (1).jpg', '/aiImage/1 (1).png', '/aiImage/1 (5).jfif' ], description: 'Blue Simple Drawings', sales: 4 , thumb: 23},
        { category: '', imageUrl: ['/aiImage/1 (5).jfif', '/aiImage/1 (1).jpg', '/aiImage/1 (1).png', '/aiImage/1 (11).jfif' ], description: 'Blue Simple Drawings', sales: 52, thumb: 33 },
    ]
    return (
        <div className='w-full items-center bg-[white] flex flex-col gap-16 py-8'>
            <Title />
            <div className='w-full flex flex-col'>
                <div className='md:mx-40 mb-4 mx-12 w-full pb-4 font-semibold  text-3xl title-shadow text-[#555]'>
                    Free Resources Daily
                </div>
                <Slider compArray={freeRes} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='md:mx-40 mb-4 mx-12 w-full pb-4 font-semibold text-3xl  title-shadow text-[#555]'>
                    Hottest MidJourney prompts
                </div>
                <Slider compArray={hotRes} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='md:mx-40 mb-4 mx-12 w-full pb-4 font-semibold text-3xl  title-shadow text-[#555]'>
                    Hottest Chat GPT prompts
                </div>
                <Slider compArray={freeRes} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='md:mx-40 mb-4 mx-12 w-full pb-4 font-semibold text-3xl  title-shadow text-[#555]'>
                    Latest MidJourney prompts
                </div>
                <Slider compArray={hotRes} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='md:mx-40 mb-4 mx-12 w-full pb-4 font-semibold text-3xl  title-shadow text-[#555]'>
                    Latest Chat GPT prompts
                </div>
                <Slider compArray={freeRes} />
            </div>
            <TitleSecond />
            <div className='w-full flex flex-col'>
                <div className='md:mx-40 mb-4 mx-12 w-full pb-4 font-semibold text-3xl  title-shadow text-[#555]'>
                    Realistic
                </div>
                <Slider compArray={hotRes} />
            </div>
            <div className='w-full flex flex-col'>
                <div className='md:mx-40 mb-4 mx-12 w-full pb-4 font-semibold text-3xl  title-shadow text-[#555]'>
                    Business
                </div>
                <Slider compArray={freeRes} />
            </div>
            <Link href="" className="mt-8 mb-16 relative font-semibold px-8 py-4 text-white hover:bg-[#0349a4] rounded-md shadow-card-upload-black bg-[#0084FF] text-xl">
                Browse Marketplace
            </Link>
        </div>
    )
}
