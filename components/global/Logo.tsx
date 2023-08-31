import React from 'react'

interface Props {
    clasLog?: boolean;
}
const Logo:React.FC<Props> = ({clasLog}) => {
    return (
        <div className={`z-10 py-2 mx-4 flex items-center font-Urbansit overflow-visible ${clasLog ? 'flex-row' : 'flex-col md:flex-row'}`}>
            <div className={`${clasLog ? 'text-8xl mr-2' : ' mr-0 md:mr-2 md:text-8xl text-6xl ' }  text-[transparent] bg-clip-text bg-gradient-to-r from-[#01dcff] to-[#fe01d4]`}>AI</div>
            <div className=' text-[transparent] bg-clip-text bg-gradient-to-r from-[#01dcff] to-[#fe01d4]'>
                <div className='flex flex-col justify-center'>
                    <div className={`${clasLog ? 'text-4xl' : ' md:text-4xl text-lg ' } leading-tight`}>Resources</div>
                    <div className={`${clasLog ? 'text-[32px]' : ' md:text-[32px] text-base ' }  leading-none`}>Marketplace</div>
                </div>
            </div>
        </div>
    )
}

export default Logo;