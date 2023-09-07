import React from 'react'
import PriceComp from './PriceComp'
import { motion } from 'framer-motion';

const monthlyStarter = [
    {
        numReview: 10,
        monthPrice: 30,
        promptPrice: 3,
        accessArticle: false
    },
    {
        numReview: 30,
        monthPrice: 60,
        promptPrice: 2,
        accessArticle: true
    },
    {
        numReview: 50,
        monthPrice: 80,
        promptPrice: 1.6,
        accessArticle: true
    },
    {
        numReview: 200,
        monthPrice: 199,
        promptPrice: 1,
        accessArticle: true
    },
]
const annualStarter = [
    {
        numReview: 10,
        monthPrice: 27,
        promptPrice: 2.7,
        accessArticle: false,
        totalSave: 36
    },
    {
        numReview: 30,
        monthPrice: 54,
        promptPrice: 1.8,
        accessArticle: true,
        totalSave: 72
    },
    {
        numReview: 50,
        monthPrice: 72,
        promptPrice: 1.44,
        accessArticle: true,
        totalSave: 96
    },
    {
        numReview: 200,
        monthPrice: 179,
        promptPrice: 0.9,
        accessArticle: true,
        totalSave: 238.8
    },
]
export default function Price() {
    const [monthly, setMonthly] = React.useState(true);
    return (
        <div className='lg:pt-[144px] flex flex-col items-center justify-center py-20 h-full relative shadow-card-upload-black'>
            <img className='absolute top-0 left-0 h-full w-full' src='/bg2.jpg' />
            <div className='flex items-center cursor-pointer z-10 mb-14'>
                <div className={`shadow-card-upload-black text-[white] font-semibold  rounded-l-md flex items-center active:opacity-10 justify-center py-2 w-52 ${!monthly ? 'text-white bg-gradient-to-r to-[#3072ff] from-[#191ec7] z-30' : 'bg-[transparent] text-slight-text'}`} onClick={() => { setMonthly(false) }}>Annual Commitment</div>
                <div className={`shadow-card-upload-black text-[white] font-semibold  rounded-r-md flex items-center active:opacity-10 justify-center py-2 w-52 ${!monthly ? 'bg-[transparent] text-slight-text' : 'text-white bg-gradient-to-r to-[#3072ff] from-[#191ec7] z-30'}`} onClick={() => { setMonthly(true) }}>Month to Month</div>
            </div>
            <div className={`flex flex-col lg:flex-row items-center justify-center opponent ${monthly && 'visible'}`}>
                {
                    monthly && monthlyStarter.map((plan, index) => (
                        <PriceComp key={index} numReview={plan.numReview} monthPrice={plan.monthPrice} promptPrice={plan.promptPrice} accessArticle={plan.accessArticle} />
                    ))
                }
            </div>
            <div className={`flex flex-col lg:flex-row items-center justify-center opponent ${!monthly && 'visible'}`}>
                {
                    (!monthly) && annualStarter.map((plan, index) => (
                        <PriceComp key={index} numReview={plan.numReview} monthPrice={plan.monthPrice} promptPrice={plan.promptPrice} accessArticle={plan.accessArticle} totalSave={plan.totalSave} />
                    ))
                }
            </div>

        </div>
    )
}
