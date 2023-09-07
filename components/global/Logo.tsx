import React from 'react'

interface Props {
    clasLog?: boolean;
}
const Logo:React.FC<Props> = ({clasLog}) => {
    return (
        <div className={`z-10 mx-4 flex items-center font-Urbansit overflow-visible ${clasLog ? 'flex-row' : 'flex-col md:flex-row'}`}>
            <div className={`${clasLog ? 'text-6xl mr-1' : ' mr-0 md:mr-1 md:text-6xl text-6xl ' }  text-[transparent] bg-clip-text bg-gradient-to-r from-[#01dcff] to-[#fe01d4]`}>AI</div>
            <div className=' text-[transparent] bg-clip-text bg-gradient-to-r from-[#01dcff] to-[#fe01d4]'>
                <div className='flex flex-col justify-center'>
                    <div className={`${clasLog ? 'text-xl' : ' md:text-xl text-xs ' } leading-tighter`}>Resources</div>
                    <div className={`${clasLog ? 'text-[18px]' : ' md:text-[18px] text-[11px] ' }  leading-none`}>Marketplace</div>
                </div>
            </div>
        </div>
    )
}

export default Logo;