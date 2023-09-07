import React from 'react'
import MemArticlesComp from './MemArticlesComp'

const dataTemp = [
    {
        title: 'Who is the best football player?',
        image: [
            '/projects/1.jpg',
            '/projects/2.png',
            '/projects/3.png',
            '/projects/4.png',
          ]
    },
    {
        title: 'Do you like Ronaldo or Messi?',
        image: [
            '/projects/2.png',
            '/projects/3.png',
            '/projects/4.png',
            '/projects/5.png',
          ],
    },
    {
        title: 'Do you like AlbertEng?',
        image: [
            '/projects/3.png',
            '/projects/4.png',
            '/projects/5.png',
            '/projects/8.png',
          ],
    },
    {
        title: 'Do you like Ronaldo or Messi?',
        image: [
            '/projects/2.png',
            '/projects/3.png',
            '/projects/4.png',
            '/projects/5.png',
            '/projects/3.png',
            '/projects/4.png',
          ],
    },
    {
        title: 'Do you like AlbertEng?',
        image: [
            '/projects/4.png',
            '/projects/5.png',
            '/projects/8.png',
            '/projects/2.png',
            '/projects/5.png',
            '/projects/3.png',
            '/projects/4.png',
          ],
    }
]
export default function MemArticles() {
  return (
    <div className='lg:pt-[144px] flex flex-col font-header w-full shadow-card-upload-black py-4 lg:px-40 md:px-20 px-10'>
        {dataTemp.map((data, index) => (
            <MemArticlesComp title={data.title} image={data.image} key={index} />
        ))}
    </div>
  )
}
