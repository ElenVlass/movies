import axios from "axios";

const API_KEY = "17b2b146e05f15592cbc027a030a6f63";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getMovies = (page) => {
  return axios
    .get(`trending/movie/week?api_key=${API_KEY}&page=${page}`)
    .then((response) => response.data.results);
};

export const searchMovies = (query) => {
  return axios
    .get(
      `search/movie?api_key=${API_KEY}&lpage=1&include_adult=false&query=${query}`
    )
    .then((response) => response.data.results);
};

export const getMovieById = (movieId) => {
  return axios
    .get(
      `movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,reviews,images`
    )
    .then((response) => response.data);
};

//Example API Request
//https://api.themoviedb.org/3/movie/550?api_key=17b2b146e05f15592cbc027a030a6f63

// const weeklyMoviesUrl = `trending/movie/week?api_key=${API_KEY}&page=${page}`;
