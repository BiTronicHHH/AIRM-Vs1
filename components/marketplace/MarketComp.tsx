import React from 'react'
import { FaCoins, FaThumbsUp, FaTimes } from 'react-icons/fa';

// {
//     image: [
//       '/projects/5.png',
//       '/projects/8.png',
//       '/projects/2.png',
//       '/projects/3.png',
//     ],
//     title: 'NFT projects that was built using Next.js',
//     author: 'Felix Martel',
//     revies: 3,
//     likes: 4,
//     AI: 'MidJourney',
//     CPrompt: 'Business',
//     Sub: 'Fashion design',
//     Tag: 'architecture'
//   },

interface Props {
    image: string[];
    title: string;
    author: string;
    sells: number;
    likes: number;
    AI: string;
    CPrompt: string;
    Sub: string;
    Tag: string;
    desc: string;
}
const MarketComp: React.FC<Props> = ({ image, title, author, sells, likes, AI, CPrompt, Sub, Tag, desc }) => {
    return (
        <div className={`flex w-full flex-col mb-4 px-4 py-6 lg:px-20 shadow-card-upload-black rounded-xl`}>
            <div className='w-full flex flex-col items-center lg:items-start lg:flex-row '>
                <div className=' w-[60%] md:w-[70%] lg:w-[50%] lg:mr-6 shrink-0'>
                    <img src={image[0]} className='w-full aspect-video object-cover object-center rounded-xl shadow-card-upload-black' />
                </div>
                <div className='flex flex-col items-center my-4 lg:my-0 lg:items-start'>
                    <div className='text-lg md:text-xl font-semibold text-[transparent] bg-clip-text bg-gradient-to-r from-[#01dcff] to-[#fe01d4] text-glow'>{title}</div>
                    <div className='flex items-center'>
                        <div className='mr-8 text-xs'>By <span className='italic text-sm'>{author}</span></div>
                        <div className='flex items-center'>
                            <div className='mr-4 flex items-center text-sm gap-2 text-cus-yellow'>
                                <FaCoins className=' text-glow' />
                                <span className=' text-xs font-semibold'>{sells}</span>
                            </div>
                            <div className='flex items-center text-sm gap-2 text-custom-sky'>
                                <FaThumbsUp className='' />
                                <span className=' text-xs font-semibold'>{likes}</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-xs my-2 px-8 md:px-12 lg:px-0'>
                        {desc}
                    </div>
                    <div className='text-sm mt-2 italic'>
                        <div className=' text-dark-grey'>AI  Model / Category / Sub-category / Tag:</div>
                        <div>{AI} / {CPrompt} / {Sub} / {Tag}</div>
                    </div>
                    <div className='flex flex-col w-full items-center my-4'>
                        <div className='text-sm md:text-base rounded-lg py-1 px-6 border cursor-pointer border-[white] shadow-card-upload-black hover:shadow-card-upload font-semibold bg-gradient-to-r from-[#01dcff] to-[#6f01fe] text-white'>
                            Review Prompt
                        </div>
                        <div className='text-dark-grey text-xs my-2 italic font-light text-center mb-2'>Once you have bought it, you will get the prompt file.<br />Just remember, you need to already have access to Midjourney to use this file.</div>
                    </div>
                </div>
            </div>
            <div className='w-full flex md:my-4 lg:my-10 justify-center'>
                {image.map((img, index) => (
                    <img src={img} alt='wrong' className='lg:w-[25%] lg:mx-2 w-[22%] mx-1 rounded-lg shadow-card-upload-black' key={index}></img>
                ))}
            </div>
        </div>
    )
}

export default MarketComp;