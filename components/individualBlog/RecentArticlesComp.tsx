import React from 'react'
import Image from 'next/image';
import { FaComments } from 'react-icons/fa';

interface Props {
  url: string;
  title: string;
  author: string;
  comments: number;
  favorites: number;
}
const RecentArticlesComp: React.FC<Props> = ({ url, title, author, comments, favorites }) => {
  return (
    <div className='flex items-center w-full py-2'>
      <div className='relative mr-4'>
        <img src={url} className='aspect-square object-cover object-center w-[80px]' />
        <div className='flex items-center absolute bg-custom-sky rounded-r-full px-2 py-1 text-white top-[calc(50%-10px)] left-0'>
          <FaComments className='text-lg mr-1 flex-shrink-0'/>
          <div className='text-xs'>
            {comments}
          </div>
        </div>
      </div>
      <div className=''>
        <div className='text-2xl text-white truncate w-[95%]'>{title}</div>
        <div className='mt-1 text-custom-sky text-lg'>
          By <span className='text-white text-xl font-semibold italic'>{author}</span> published 1 day ago
        </div>
      </div>
    </div>
  )
}

export default RecentArticlesComp;