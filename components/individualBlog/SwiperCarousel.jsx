"use client"
import SwiperCore from "swiper";
import { Autoplay } from 'swiper/modules'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselComp from "./CarouselComp";
import React, { useState } from "react";
import { classNames } from "../../utils/misc";
import styles from "./styles.module.css";

const projects = [
    {
        name: "Crypto Legions",
        description:
            "Crypto Legions is a cutting edge Play-To-Earn NFT game on the BSC network. Bloodstone is the native utility token that's used for: Minting in-game NFTs. I was on charge of frontend development and smart contract",
        image: "/projects/1.jpg",
    },
    {
        name: "GODz of Solaria",
        description:
            "The world's first DAO operated NFT Incubator, launchpad and game platform. I was on charge of frontend development of mint and sacrifice pages, also smart contract and backend development for sacrifice",
        image: "/projects/2.png",
    },
    {
        name: "Neon Sabers",
        description:
            "Neon Sabers is one stop shop for highly premium and durable Neon Lightsabers.Our lightsabers are highly customizable, you can choose the color of Hilt, type of blade and attach accessories of your choice.",
        image: "/projects/6.jpg",
    },
    {
        name: "MailMerge365",
        description:
            "A Microsoft 365 plugin and SaaS to enable the sending of mass personalized email using your existing Microsoft tenant mailbox. Frontend developer role.",
        image: "/projects/4.png",
    },
    {
        name: "Unjabbed Dating",
        description:
            "Unjabbed is a unique dating app exclusively for those who have chosen not to receive the COVID-19 vaccine. I was the only developer for this project.",
        image: "/projects/5.png",
    },
    {
        name: "Astronaud",
        description:
            "Astronaud helps YouTube Networks, YouTube Channels, Artists, Musicians and many others. I was in charge of UI/UX design and development.",
        image: "/projects/8.png",
    },
    {
        name: "Crypto Legions",
        description:
            "Crypto Legions is a cutting edge Play-To-Earn NFT game on the BSC network. Bloodstone is the native utility token that's used for: Minting in-game NFTs. I was on charge of frontend development and smart contract",
        image: "/projects/1.jpg",
    },
    {
        name: "GODz of Solaria",
        description:
            "The world's first DAO operated NFT Incubator, launchpad and game platform. I was on charge of frontend development of mint and sacrifice pages, also smart contract and backend development for sacrifice",
        image: "/projects/2.png",
    },
    {
        name: "Neon Sabers",
        description:
            "Neon Sabers is one stop shop for highly premium and durable Neon Lightsabers.Our lightsabers are highly customizable, you can choose the color of Hilt, type of blade and attach accessories of your choice.",
        image: "/projects/6.jpg",
    },
    {
        name: "MailMerge365",
        description:
            "A Microsoft 365 plugin and SaaS to enable the sending of mass personalized email using your existing Microsoft tenant mailbox. Frontend developer role.",
        image: "/projects/4.png",
    },
    {
        name: "Unjabbed Dating",
        description:
            "Unjabbed is a unique dating app exclusively for those who have chosen not to receive the COVID-19 vaccine. I was the only developer for this project.",
        image: "/projects/5.png",
    }
];


SwiperCore.use([Autoplay]);

const SwiperCarousel = () => {
    const [currentSlide, setCurrentSlide] = React.useState(1);
    return (
        <div className="flex w-full z-10 md:px-40 py-20 justify-center">
            <Swiper
                loop={true}
                initialSlide={1}
                spaceBetween={0}
                slidesPerView={5}
                autoplay={{
                    delay: 5000,
                }}
                onSlideChange={(swiper) => {
                    setCurrentSlide((swiper.realIndex + 1) % projects.length);
                }}
            >
                {projects.map((project, i) => (
                    <SwiperSlide
                        key={i}
                        className={classNames(
                            "py-[10%] cursor-pointer",
                            i == currentSlide && "z-10"
                        )}
                        style={{ width: 500 }}
                    >
                        <div className="relative pb-[125%]">
                            <div
                                className={classNames(
                                    "absolute inset-0 transition-all",
                                    styles.glow,
                                    i == currentSlide && "inset-[-20%]"
                                )}
                            >
                                <CarouselComp name={project.name} image={project.image} description={project.description} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperCarousel;