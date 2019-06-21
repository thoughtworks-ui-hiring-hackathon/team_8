import api from './api';
import { API_KEY } from '../config';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';

//search/multi?api_key={API_KEY}&language=en-US&query={search_query}&page=1&include_adult=false    

const searchMovies = search_query => ({
    type: SEARCH_MOVIES,
    payload: api.get(`search/multi?api_key=${API_KEY}&language=en-US&query=${search_query}&page=1&include_adult=false `),
});

export default searchMovies;