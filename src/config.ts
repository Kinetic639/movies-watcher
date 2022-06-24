const BASE_URL = 'https://api.themoviedb.org/3'
const {REACT_APP_API_KEY} = process.env;

export const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${REACT_APP_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&with_networks=213`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_genres=99`,
    fetchGenres: `${BASE_URL}/genre/movie/list?api_key=${REACT_APP_API_KEY}&language=en-US`,
    searchMovies: `${BASE_URL}/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&page=1&query=`,
}
