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
        {category: '', imageUrl: '/store.png', description: 'Blue Simple Drawings', price: 3.99},
        {category: '', imageUrl: '/com.png', description: 'Blue Simple Drawings', price: 2.99},
        {category: '', imageUrl: '/store.png', description: 'Blue Simple Drawings', price: 3.99},
        {category: '', imageUrl: '/com.png', description: 'Blue Simple Drawings', price: 2.99},
        {category: '', imageUrl: '/store.png', description: 'Blue Simple Drawings', price: 3.99},
        {category: '', imageUrl: '/com.png', description: 'Blue Simple Drawings', price: 2.99},
        {category: '', imageUrl: '/store.png', description: 'Blue Simple Drawings', price: 3.99},
        {category: '', imageUrl: '/com.png', description: 'Blue Simple Drawings', price: 2.99},
    ]
    return (
        <div className='w-full bg-[white]'>
            <div className='w-full flex flex-col'>
                <div className='px-4 w-full text-xl pb-2 border border-1'>
                    Free Resources Daily
                </div>
                <Slider compArray={freeRes}/>
            </div>
        </div>
    )
}
