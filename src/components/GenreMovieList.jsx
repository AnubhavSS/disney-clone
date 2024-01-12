import React from "react";
import {  genereMovie } from "../constants/GenreList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {genereMovie.map((item,index) => (
        <div className="p-4 px-8 md:px-16" key={item.id}> 
            <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
            <MovieList genreId={item.id} index_={index}/>
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;
