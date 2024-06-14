import React, { useState, useEffect } from "react";
import Image from "next/image";
import { SubHeadingBg } from "./common/Icons";
import Navbar from "./common/Navbar";
import { HeaderDiscord, HeaderLinked, HeaderTelegram } from "./common/Icons";

const videoSources = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
];

const Header = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) =>
          prevIndex === videoSources.length - 1 ? 0 : prevIndex + 1
        );
        setFadeIn(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToSection = (elementId) => {
    
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="relative z-[100]">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-full h-full object-cover">
        {videoSources.map((source, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentVideoIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: currentVideoIndex === index ? 1 : -1 }}
          >
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
      <div className="absolute flex z-[100] items-center right-[-21%] md:right-0 hover:right-0 transition-all duration-300 ease-linear top-[50%] translate-y-[-50%]">
        <div className="bg-white w-[15px] h-[145px] rounded-l-full"></div>
        <div className="backdrop-blur bg-white-opacity-[17%] px-[20px] py-[70px]">
          <Link href="https://www.twitter.com/">
            <Image
              src="/assets/images/svg/header/twitter.svg"
              width={36}
              height={36}
              alt="logo"
              className="mb-7"
            />
          </Link>
          <div className="mb-7">
            <Link href="https://www.discord.com/">
              <HeaderDiscord />
            </Link>
          </div>
          <div className="mb-7">
            <Link href="https://www.telegram.com/">
              <HeaderTelegram />
            </Link>
          </div>
          <div className="mb-7">
            <Link href="https://www.linkedin.com/">
              <HeaderLinked />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow relative z-10 flex items-center justify-center">
        <div className="max-w-[1164px] mx-auto px-3">
          <div className="flex justify-center items-center flex-col">
            <div className="flex items-center relative justify-center">
              <SubHeadingBg />
              <p className="font-medium leading-md font-inter text-sm text-offWhite absolute">
                Future of Gaming
              </p>
            </div>
            <h1 className="!leading-[110%] font-OpenSans text-offWhite font-normal text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-center mt-[10px] mb-4">
              BEYOND <br /> <span className="text-pink">ENTERTAINMENT</span>
            </h1>
            <p className="text-center leading-md text-base max-w-[670px] font-Poppins font-normal text-lightGrey">
              Galileo Sky, founded by industry experts, is redefining the gaming
              landscape. With a blend of groundbreaking technology and immersive
              entertainment, we create world-class gaming experiences and
              thriving digital economies that captivate and inspire
            </p>
          </div>
        </div>
      </div>
      <div className="absolute z-20 -translate-x-1/2 bottom-10 left-1/2">
        <button
          onClick={() => scrollToSection("footer")}
          className={`flex w-6 sm:w-11 h-[72px] sm:h-[76px] rounded-full border border-pink relative after:absolute sm:after:w-[27px] after:w-[15px] after:h-[27px] after:rounded-full after:bg-pink after:duration-300 after:left-1/2 after:-translate-x-1/2 ${
            fadeIn ? "after:top-9" : "after:top-2"
          }`}
        ></button>
      </div>
    </div>
  );
};

export default Header;
