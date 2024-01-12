import React, { useEffect, useState, useRef } from "react";
import { getTrendingVideos } from "../services/globalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
const screenWidth = window.innerWidth;
const Slider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true  }, [Autoplay()])

  const elementRef = useRef();
  const [movieList, setmovieList] = useState([]);
  useEffect(() => {
    const getTrending = async () => {
      const response = await getTrendingVideos();
      console.log(response);
      setmovieList(response.results);
    };
    getTrending();
  }, []);

  //   const sliderRight=(element)=>{
  //     console.log("Hello")
  // element.scrollLeft+=screenWidth-100
  //   }

  //   const sliderLeft=(element)=>{
  //     console.log('HL')
  //     element.scrollLeft-=screenWidth-100
  //       }

  return (
    <div>
      {/* <HiChevronLeft onClick={()=>sliderLeft(elementRef.current)} className="text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer hidden md:block" />
      <HiChevronRight onClick={()=>sliderRight(elementRef.current)} className="text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 hidden md:block" />
      <div
        className="flex overflow-x-auto px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList &&
          movieList.map((item, index) => (
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              className="min-w-full md:h-[320px] object-center mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-200 ease-in"
              key={index}
            />
          ))}
      </div> */}
      <div className="overflow-hidden relative cursor-pointer pb-4" ref={emblaRef}>
        <div className="flex">
          {movieList &&
            movieList.map((item, index) => (
              <div className="min-w-full">
              <img
                src={IMAGE_BASE_URL + item.backdrop_path}
                className="min-w-full md:h-[400px] object-center mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-200 ease-in"
                key={index}
              />
              <div className="hidden md:inline absolute mt-0 top-0 pl-3 pt-40 z-20 w-full h-full bg-transparent bg-gradient-to-r from-gray-900/70 to-transparent">
                <h2 className="text-5xl text-white font-bold max-w-xl z-50 py-2">{item?.name || item?.title}</h2>
                <p className=" max-w-xl text-white line-clamp-3 ">{item?.overview}</p>
              </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
