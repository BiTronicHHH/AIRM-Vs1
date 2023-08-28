import React from 'react'

interface Props {
    numReview: number;
    monthPrice: number;
    promptPrice: number;
    accessArticle: boolean;
    totalSave?: number;
}
const PriceComp: React.FC<Props> = ({ numReview, monthPrice, promptPrice, accessArticle, totalSave  }) => {
    return (
        <div className='relative z-10 flex flex-col items-center hover:scale-105 hover:z-30 px-6 py-12 bg-[#aaaaaa11] text-[white] shadow-card-upload-black hover:bg-gradient-to-br from-[#0e3252] to-[#3a1b3a] hover:bg-opacity-20 '>
            {totalSave && 
            (<div className='absolute font-semibold px-3 shadow-card-upload-black py-1  top-1 right-2 bg-gradient-to-r to-[#3072ff] from-[#191ec7]'>
                Save 10%
            </div>)}
            <div className='text-2xl font-Urbansit font-semibold mb-2'>
                {numReview == 10 ? 'Starter' : numReview == 30 ? 'Basic' : numReview == 50 ? 'Premium' : 'Pro'}
            </div>
            <div className='text-center'>
                <span className='font-semibold text-lg'>{numReview}</span> of Reviews Available
            </div>
            <div className='flex h-full items-start text-main-blue mt-4'>
                <div className='flex flex-col text-lg mt-[6px]'>
                    <div>$</div>
                </div>
                <div className='flex flex-col text-6xl'>
                    <div>{monthPrice}</div>
                </div>
                <div className='flex flex-col justify-end mt-10 text-base'>
                    <div>/mo</div>
                </div>
            </div>
            <div className='text-[white] my-4 cursor-pointer bg-gradient-to-r to-[#3072ff] from-[#191ec7] font-semibold rounded-full px-3 py-1'>
                Start free trial
            </div>
            <ul className='list-disc px-4'>
                <li className='mb-2'>
                    Mix & Match Midjourney <br />& Chat GPT Available
                </li>
                <li className='mb-2'>
                    Price of Prompt:  <span className='font-semibold text-lg'>${promptPrice.toFixed(2)}</span>
                </li>
                {
                    totalSave && (
                        <li className='mb-2'>
                            Total Save Annually <span className='font-semibold text-lg'>{totalSave}</span>
                        </li>
                    )
                }
                <li className='mb-2'>
                    Selling Prompts Available
                </li>
                <li className='mb-2'>
                    100,000+ GPT Prompts Questions
                </li>
                <li className={`${totalSave ? '' : 'hidden'}  mb-2`} >
                    Total Save: <span className='font-semibold text-lg'>${totalSave?.toFixed(2)}</span>
                </li>
                <li className={`${accessArticle ? 'visible' : 'invisible'}`}>
                    Access AI Article: Tips, Techniques
                </li>
            </ul>
        </div>
    )
}

export default PriceComp;