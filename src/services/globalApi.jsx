import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api = import.meta.env.VITE_TMBD_API;
const config = {
  params: { language: "en-US" },
  headers: {
    accept: "application/json",
    Authorization: api,
  },
};
//get all trending
export const getTrendingVideos = async () => {
  return axios
    .get(movieBaseUrl + "/trending/all/day", config)
    .then((response) => response.data)
    .catch((err) => err);
};

// get by genre
export const getByGenre = async (id) => {
  // Modify config.params
  config.params = {
    ...config.params,
    include_adult: "false",
    include_video: "false",
    page: "1",
    sort_by: "popularity.desc",
    with_genres: id,
    with_companies: 'disney'
  };
  return axios
    .get(movieBaseUrl + "/discover/movie", config)
    .then((response) => response.data)
    .catch((err) => err);
};


//get by genre TV
export const getByGenreTV=async(id)=>{
  // Modify config.params
  config.params = {
    ...config.params,
    include_adult: "false",
    include_video: "false",
    page: "1",
    sort_by: "popularity.desc",
    with_genres: id,
    with_companies: 'disney'
  };
  return axios
    .get(movieBaseUrl + "/discover/tv", config)
    .then((response) => response.data)
    .catch((err) => err);
};


