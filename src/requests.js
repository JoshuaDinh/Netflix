const API_KEY2 = process.env.REACT_APP_MOVIE_T_API_KEY;

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY2}&with_networks=213`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY2}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false`,
  fetchAction: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY2}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&with_genres=28    `,
  fetchComedy: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY2}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&with_genres=35`,
  fetchHorror: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY2}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&with_genres=27`,
  fetchRomance: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY2}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY2}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&with_genres=99    `,
};
export default requests;
