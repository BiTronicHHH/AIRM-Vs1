import React from 'react'

interface Props {
    title: string;
    image: string[];
}
const MemArticlesComp:React.FC<Props> = ({title, image}) => {
    const [show, setShow] = React.useState(""); 
    const handleClick = (img: string) => {
        setShow(img);
    }
  return (
    <div className='w-full my-4 '>
        <div className={`${show ? 'flex' : 'hidden'} items-center justify-center fixed w-screen h-screen bg-[#04131bc7] top-0 left-0 z-10`} onClick={()=>setShow("")}>
            <div className='h-[80%] aspect-[2/3] z-[11]'>
                <img src={show} className='w-full h-full border-4 border-[#ffffffe8] rounded-2xl shadow-card-upload object-cover object-center' alt='wrong' />
            </div>
        </div>
        <div className=' lg:text-4xl md:text-3xl text-2xl my-4 font-semibold '>
            <span className='text-[transparent] bg-clip-text bg-gradient-to-r from-[#4de6fd] to-[#f700c2]'>{title}</span>
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 py-6 px-4 rounded-2xl shadow-card-upload-black'>
            {image.map((img, index) => (
                <div className='w-full aspect-[2/3] outline-2 p-1 rounded-lg shadow-card-upload relative cursor-pointer' key={index}>
                    <img src={img} className='w-full h-full rounded-lg object-cover object-center' alt='ddd' onClick={() => handleClick(img)}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MemArticlesComp;