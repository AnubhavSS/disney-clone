import React, { useEffect, useState, useRef } from "react";
import { getByGenre } from "../services/globalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import LargeMovieCard from "./LargeMovieCard";
const MovieList = ({ genreId, index_ }) => {
  const [movieList, setmovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    const getGenreMovies = async () => {
      const response = await getByGenre(genreId);
      //   console.log(response);
      setmovieList(response.results);
    };
    getGenreMovies();
  }, []);

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute ${index_%3===0? 'mt-[80px]':'mt-[150px]'}
           `}
      />
      <div
        className="py-5 px-3 flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth "
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 === 0 ? (
              <LargeMovieCard movie={item} key={index}/>
            ) : (
              <MovieCard movie={item} key={index} />
            )}
          </>
        ))}
      </div>

      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 ${index_%3===0? 'mt-[80px]':'mt-[150px]'}
            '}`}
      />
    </div>
  );
};

export default MovieList;
