import React from 'react'
import Image from 'next/image';
interface Props {
    category?: string;
    imageUrl: string;
    description: string;
    price: number;
}

const SliderComp: React.FC<Props> = ({ category, imageUrl, description, price }) => {
  return (
    <div className='w-[300px] mr-2 relative rounded-lg'>
        <div className="w-[300px]">
            <Image src={imageUrl} className='w-[300px] rounded-t-lg' alt='wrongUrl' width={300} height={200} style={{width:300}} />
        </div>
        <div className='flex w-[300px] bg-[black] justify-between text-[white] rounded-b-lg px-3 py-2 font-semibold'>
            <div>{description}</div>
            <div>${price}</div>
        </div>
    </div>
  )
}

export default SliderComp;