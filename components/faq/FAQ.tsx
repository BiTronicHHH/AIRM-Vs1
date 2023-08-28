import React from 'react'
import Link from 'next/link'
import FaqComp from './FaqComp'

const first = [
    {
        title: 'Fix a problem',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet sed lectus ut congue. Suspendisse enim nisi, dapibus at malesuada sed, aliquam et lectus. Morbi auctor venenatis mauris. Praesent id lacus at nunc accumsan commodo. Aliquam et velit purus. Duis sit amet ipsum eu felis efficitur condimentum. Curabitur ultricies at turpis ac accumsan. Donec arcu nunc, tincidunt in porttitor vel, laoreet ut augue. Praesent molestie fermentum mauris, quis eleifend purus dictum ac. Quisque at justo eu ligula iaculis accumsan. Donec lorem nisl, lobortis eu hendrerit ut, fermentum id felis. Etiam lacinia tincidunt semper. Morbi et lacus ut nisl feugiat pellentesque at sit amet felis. Pellentesque bibendum tempor viverra. Mauris sollicitudin purus placerat arcu dapibus, a egestas erat convallis. In eget tempus ipsum, ut pulvinar libero. In hac habitasse platea dictumst. Curabitur porta eros vel semper suscipit. Maecenas sed augue tempus, pulvinar enim sed, tempus turpis. Sed vel molestie felis. Morbi eu mattis dolor, id fermentum augue. Donec sollicitudin feugiat interdum. Donec fringilla tincidunt dui, ultrices accumsan elit dictum ac. Duis ut luctus lorem, in laoreet turpis. Etiam quis fermentum leo. Aenean quis leo erat. Nam lacinia ipsum eget risus volutpat eleifend. Aenean venenatis ligula eu dapibus convallis. Etiam vulputate, ex semper rutrum laoreet, purus mi pretium augue, sed condimentum dolor ligula nec lectus. Sed sodales luctus blandit. Maecenas tincidunt est at nulla euismod, malesuada euismod turpis eleifend. Aliquam auctor mi in erat ullamcorper volutpat. Proin pretium a diam id posuere. Suspendisse lobortis sem sit amet feugiat vestibulum. Donec sit amet convallis velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In imperdiet sollicitudin nulla at euismod'
    },
    {
        title: 'Watch videos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet sed lectus ut congue. Suspendisse enim nisi, dapibus at malesuada sed, aliquam et lectus. Morbi auctor venenatis mauris. Praesent id lacus at nunc accumsan commodo.'
    },
    {
        title: 'Manage your account and settings',
        description: 'Sed sodales luctus blandit. Maecenas tincidunt est at nulla euismod, malesuada euismod turpis eleifend. Aliquam auctor mi in erat ullamcorper volutpat. Proin pretium a diam id posuere. Suspendisse lobortis sem sit amet feugiat vestibulum. Donec sit amet convallis velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In imperdiet sollicitudin nulla at euismod'
    },
    {
        title: 'Create and grow your channel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam imperdiet sed lectus ut congue. Suspendisse enim nisi, dapibus at malesuada sed, aliquam et lectus. Morbi auctor venenatis mauris. Praesent id lacus at nunc accumsan commodo.'
    }
]
export default function FAQ() {
    return (
        <div className='flex w-full py-16 md:py-24 flex-col items-center shadow-card-upload-black relative'>
            <img className='absolute top-0 left-0 h-full w-full' src='/bg4.jpg' />
            <div className='font-header text-glow lg:text-5xl md:text-4xl text-center text-2xl px-2 lg:mb-8 md:mb-4 font-bold z-10 text-[white] tracking-wider'>
                Frequently Asked Questions (FAQ)
            </div>
            <div className='z-10 mt-10'>
                <div className='flex items-center justify-between mb-8 lg:w-[600px] md:w-[400px] w-full'>
                    <div className='font-header lg:text-3xl md:text-2xl text-lg font-semibold text-[white] text-center'>
                        About Subscription Plan
                    </div>
                    <Link href="" className='font-header md:px-6 px-4 text-sm lg:text-lg md:text-base whitespace-nowrap rounded-md py-1 text-[white] font-semibold shadow-card-upload-black bg-gradient-to-r from-[#3072ff] to-[#ca2ccf]'>
                        Subscribe Now
                    </Link>
                </div>
                {
                    first.map((element, index) => (
                        <FaqComp key={index} title={element.title} description={element.description} />
                    ))
                }
            </div>
            <div className='z-10 mt-10'>
                <div className='flex items-center justify-between mb-8 w-full md:w-[600px]'>
                    <div className='font-header lg:text-3xl md:text-2xl text-xl font-semibold text-[white]'>
                        About Selling
                    </div>
                    <Link href="" className=' font-header md:px-6 px-4 lg:text-lg md:text-base text-sm whitespace-nowrap rounded-md py-1 text-[white] font-semibold  shadow-card-upload-black bg-gradient-to-r to-[#3072ff] from-[#ca2ccf]'>
                        Sell Prompt
                    </Link>
                </div>
                {
                    first.map((element, index) => (
                        <FaqComp key={index} title={element.title} description={element.description} />
                    ))
                }
            </div>
        </div>
    )
}
