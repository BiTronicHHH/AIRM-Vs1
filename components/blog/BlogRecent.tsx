import React from 'react'

interface Props {
    title: string;
    desc: string;
    author: string;
    publisher: string;
    category: string;
    url: string;
}

const BlogRecent: React.FC<Props> = ({ title, desc, author, publisher, category, url }) => {
  return (
    <div className='w-[50%] mr-4 text-[#334] text-xs font-semibold'>
        <img src={url} className='w-full aspect-video'/>
        <div className='font-header font-normal my-1 border-b border-dashed border-[#334] text-[#666] '>{publisher}</div>
        <div className='font-body text-xs'>{title}</div>
    </div>
  )
}

export default BlogRecent;