import $ from 'jquery';
export const FETCH_POPULAR = 'FETCH_POPULAR';
export const TMDB_URL = 'https://api.themoviedb.org/3';
export const TMDB_API_KEY = '86c721eb7322ea8fcaae0d0ad200e6d3';
export const mostPopular = (page) => dispatch => {
    const url = `${TMDB_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
    fetch(url)
    .then(response => response.json())
    .then(movies => dispatch({
        type:FETCH_POPULAR,
        payload: movies.results
    }))
}
