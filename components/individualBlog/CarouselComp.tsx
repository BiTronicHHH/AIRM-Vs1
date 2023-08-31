"use client"
import React from "react"
import Image from "next/image"
import { motion } from 'framer-motion';

interface Props {
    name: string;
    description: string;
    image: string;
}

const CarouselComp:React.FC<Props> = ({name, description, image}) => {
  return (
    <motion.div initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }} className="w-full h-full cursor-pointer shadow-card-upload-black rounded-3xl p-1 border-2 border-white">
                <div className="card-project text-white w-full h-full">
                  <div className=" poster font-header w-full h-full ">
                    <img src={image} alt="Location Unknown"  className='w-full h-full img-project' />
                    <div className="details">
                      <h1 className="">{name}</h1>
                      <p className="desc truncate text-lg">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>

    </motion.div>
  )
}

export default CarouselComp;
