import React from 'react'

interface Props {
    title: string[];
    newsId?: number;
}
const MostPop:React.FC<Props> = ({title, newsId}) => {
  return (
    <div className='w-full flex flex-col border-t border-t-[#555] border-dashed py-4'>
        <div className='font-bold font-header text-4xl text-[#ff1d46] text-glow mb-2'>
            Most Popular News
        </div>
        <div className='w-full flex-col'>
            {title.map((elem, index) => (
                <div key={index} className='w-full flex  text-xl text-body text pt-3 text-left font-semibold'>
                    <div className='text-[#ff1d46] mr-2'>{index+1}.</div>
                    <div>{elem}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MostPop;