import React from 'react'
import BlogPreview from './BlogPreview'
import BlogRecent from './BlogRecent'
import DoubleCarousel from './DoubleCarousel'
import MostPop from './MostPop'
const temp = {
    title: 'SF restaurant says it came nowhere near meeting high costs,is closing',
    desc: 'The restaurant which was owned by a former Lazy Bear sous-chef, is set to close at the end of the month',
    author: 'Susana Guerrero',
    publisher: 'Fiscal Times',
    category: 'Food',
    url: '/store.png',
    newsId: 1
}
const temp1 = {
    title: 'San Francisco died, again',
    desc: 'The restaurant which was owned by a former Lazy Bear sous-chef, is set to close at the end of the month',
    author: 'Susana Guerrero',
    publisher: 'Fiscal Times',
    category: 'Food',
    url: '/ear.png',
    newsId: 2
}
const title = [
    'SF Giants get trade deadline target for free'
    , 'Cristiano Ronaldo is back in the Champions League! - Superstar still loses his temper'
    , 'Ronaldo, Neymar and Co.: crazy salaries!'
    , 'SF Giants get trade deadline target for free'
    , 'Cristiano Ronaldo is back in the Champions League! - Superstar still loses his temper'
    , 'Ronaldo, Neymar and Co.: crazy salaries!'

]
const Blog = () => {
    return (
        <div className='w-full shadow-card-upload-black bg-white h-full lg:pt-[144px]'>
            <div className='font-header text-glow lg:text-6xl md:text-4xl text-2xl px-2 lg:mb-8 md:mb-4 font-bold z-10  text-[white] tracking-wider flex w-full justify-center py-4 shadow-card-upload text-center bg-gradient-to-b to-[#a072ff] from-[#ff1d46]'>
                News
            </div>
            <div className='flex w-full h-full px-10'>
                <div className='flex flex-col items-center w-full md:pl-[250px]'>
                    <div className='flex mx-8 w-full mb-5'>
                        <BlogPreview title={temp.title} desc={temp.desc} author={temp.author} publisher={temp.publisher} category={temp.category} url={temp.url} />
                        <div className='flex flex-col h-full md:w-[50%]'>
                            <div className='flex w-full'>
                                <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                                <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                            </div>
                            <div className='flex w-full'>
                                <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                                <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                            </div>
                            <div className='flex w-full'>
                                <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                                <BlogRecent title={temp1.title} desc={temp1.desc} author={temp1.author} publisher={temp1.publisher} category={temp1.category} url={temp1.url} />
                            </div>
                        </div>
                    </div>
                    <DoubleCarousel />
                </div>
                <div className='flex flex-col justify-end min-h-full md:w-[350px] flex-shrink-0  md:mt-[400px]'>
                    <MostPop title={title} />
                </div>
            </div>
        </div>
    )
}

export default Blog;