"use client"
import React from 'react'
import Header from '@/components/global/header'
import Footer from '@/components/global/footer'
import Individual from '@/components/individualBlog/Individual'

const data = {
  title: "I have been working with Albert Eng, we will make a killing!",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt sodales feugiat. Aenean eleifend lectus finibus leo rutrum blandit. Donec in metus eu purus tempor ultrices. Donec dictum urna eget tellus lacinia malesuada. Duis et dolor at nibh cursus rhoncus. Nunc vitae gravida orci. Proin mi est, mattis et nulla maximus, egestas interdum velit. Nulla convallis libero dui, eu mattis enim elementum vel. Nullam ultricies malesuada orci, nec hendrerit lorem consectetur eu. Donec vulputate, nunc ac pulvinar laoreet, sapien elit vulputate nisi, quis vehicula metus justo ac mi. Donec interdum dapibus laoreet. Nam ut sem lobortis, pharetra augue nec, tristique dolor. Quisque eget enim vulputate, laoreet sem nec, fermentum ipsum. Fusce interdum mi lectus, quis euismod arcu tempus nec.",
  author: 'Felix Martel',
  url: '/albert.png'
}

export default function price() {
  return (
    <div className='bg-[white] w-full font-body'>
        <Header />
        <Individual title={data.title} desc={data.desc} author={data.author} url={data.url}/>
        <Footer />
    </div>
  )
}
