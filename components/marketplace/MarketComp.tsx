import React from 'react'

interface Props {
    url: string;
    title: string;
    review: number;
    sales: number;
    thumbsUp: number;
    desc: string;
    images: string[]
}
const MarketComp:React.FC<Props> = ({url, title, review, sales, thumbsUp, desc, images}) => {
  return (
    <div className='w-full flex flex-col'>
        <div className='w-full flex'>
            <img src={url} className=''/>
            <div className=''>
                <div className='text-4xl'>{title}</div>
                <div>Reviews: {review}</div>
                <div>Sales: {sales}</div>
                <div>ThumbsUp: {thumbsUp}</div>
                <div>{desc}</div>
            </div>
        </div>
        <div className='w-full flex'>
            {images.map((img, index) => (
                <img src={img} alt='wrong' key={index}></img>
            ))}
        </div>
    </div>
  )
}

export default MarketComp;