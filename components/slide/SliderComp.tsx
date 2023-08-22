import React from 'react'
interface Props {
    category?: string;
    imageUrl: string;
    description: string;
    price: number;
    key: number
}

const SliderComp: React.FC<Props> = ({ category, imageUrl, description, price, key }) => {
    return (
        <div className='slider relative ml-4 pt-4 rounded-lg' key={key}>
            <img src={imageUrl} className='rounded-lg w-full' alt='wrongUrl' />
            <div className='absolute bottom-0 left-0 w-full bg-[#000000cc] justify-between truncate text-[white] rounded-b-lg px-3 py-2 font-semibold'>
                <div>{description}</div>
                <div>${price}</div>
            </div>
        </div>
    )
}

export default SliderComp;