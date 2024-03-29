const key = import.meta.env.VITE_TMDB_API_KEY;

const urls = {
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  horrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27`,
  scifiMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878`,
  animationMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16`,
  documentaryMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99`,
  trendingTVShows: `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}&language=en-US&page=1`,
  topRatedTVShows: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  scififantasyTVShows: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=first_air_date.desc&with_genres=10765`,
  crimeTVShows: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=first_air_date.desc&with_genres=80`,
  dramaTVShows: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=first_air_date.desc&with_genres=18`,
  documentaryTVShows: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=first_air_date.desc&with_genres=99`,
  baseMovieUrlById: "https://api.themoviedb.org/3/movie/",
  baseTVShowUrlById: "https://api.themoviedb.org/3/tv/",
  endUrlById: `?api_key=${key}&language=en-US&append_to_response=credits`,
  endVideoUrl: `/videos?api_key=${key}&language=en-US`,
};

export default urls;
