import React from 'react'
import { FaSortDown } from 'react-icons/fa';
import RecentArticlesComp from './RecentArticlesComp';

interface Props {
    url: string;
    title: string;
    author: string;
    comments: number;
    favorites: number;
}
const recentData = [
    {
        url: '/projects/1.jpg',
        title: 'Crypto Legions is released by Felix',
        author: 'Luffy',
        comments: 4,
        favorites: 2
    },
    {
        url: '/projects/2.png',
        title: 'Godz NFT is released by Albert',
        author: 'Felix',
        comments: 2,
        favorites: 3
    },
    {
        url: '/projects/3.png',
        title: 'Crypto Legions',
        author: 'Luffy',
        comments: 1,
        favorites: 2
    },
    {
        url: '/projects/4.png',
        title: 'Meta Verse',
        author: 'Albert',
        comments: 10,
        favorites: 12
    },
    {
        url: '/projects/1.jpg',
        title: 'Crypto Legions',
        author: 'Luffy',
        comments: 4,
        favorites: 2
    },
    {
        url: '/projects/2.png',
        title: 'Godz NFT',
        author: 'Felix',
        comments: 2,
        favorites: 3
    },
]
export default function RecentArticles() {
    return (
        <div className='flex fixed bottom-0 right-0 z-10 shadow-card-upload-black flex-col w-[450px] rounded-tl-2xl h-[500px] overflow-y-scroll bg-gradient-to-b from-[#101a30] to-[#042831] '>
            <div className='fixed w-full z-20'>
                <div className='flex w-[450px] justify-center py-4 z-[12] rounded-tl-2xl bg-gradient-to-r from-[#2a7a86] to-[#500343] items-center font-semibold tracking-wider text-2xl text-white'>
                    <div className='w-[450px] flex justify-center'>Recent Articles</div>
                </div>
            </div>
            <div className='mt-20'>
                {
                    recentData.map((data, index) => (
                        <RecentArticlesComp url={data.url} title={data.title} author={data.author} comments={data.comments} favorites={data.favorites} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}
